import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
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

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideRouter(
    //   [
    //     {
    //       path: 'dashboard',
    //       loadComponent: () => import('./data-analysis/dashboard/dashboard.component').then(m => m.DashboardComponent),
    //       data: { label: '廠商' },
    //     },
    //     {
    //       path: '',
    //       redirectTo: 'dashboard',
    //       pathMatch: 'full'
    //     },
    //   ]
    // ),
    provideHttpClient(),
    importProvidersFrom(
      [
        TranslateModule.forRoot({
          loader: TranslationLoaderProvider,
          defaultLanguage: 'zh-TW',
        }),
        RouterModule.forRoot([
          {
            path: 'dashboard',
            loadComponent: () => import('./data-analysis/dashboard/dashboard.component').then(m => m.DashboardComponent),
            data: { label: '廠商' },
          },
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
        ])
      ]
    )
  ],
};
