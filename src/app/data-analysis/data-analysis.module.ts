import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  provideZoneChangeDetection,
} from '@angular/core';
import { DataAnalysisComponent } from './data-analysis.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Language = 'en-US' | 'zh-TW';

class TranslateHttpLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}
  getTranslation(language: Language): Observable<any> {
    const cacheBusting = new Date().getTime();
    const path = `/i18n/${language}.json?t=${cacheBusting}`;
    return this.http.get(path);
  }
}

export const TranslationLoaderProvider = {
  provide: TranslateLoader,
  useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
  deps: [HttpClient],
};

@NgModule({
  declarations: [DataAnalysisComponent, DashboardComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { label: '廠商' },
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
    ]),
    TranslateModule.forRoot({
      loader: TranslationLoaderProvider,
      defaultLanguage: 'zh-TW',
    }),
    SharedModule,
  ],
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DataAnalysisComponent, RouterModule],
})
export class DataAnalysisModule {}
