import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';

import { EntryComponent } from './entry.component';
import { createCustomElement } from '@angular/elements';
import { DataAnalysisModule } from './data-analysis/data-analysis.module';

@NgModule({
  declarations: [EntryComponent],
  imports: [DataAnalysisModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EntryModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const customElement = createCustomElement(EntryComponent, {
      injector: this.injector,
    });
    window.customElements.define('data-analysis-entry', customElement);
    console.log('Registered custom element data-analysis-entry');
  }
}
