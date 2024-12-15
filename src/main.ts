import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { EntryComponent } from './app/entry.component';
import { appConfig } from './app/entry.config';
import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

(async () => {
  const app = await createApplication(appConfig);
  const counterElement = createCustomElement(EntryComponent, {
    injector: app.injector,
  });
  customElements.define('data-analysis-entry', counterElement);
})();

// bootstrapApplication(EntryComponent, appConfig)
//   .then(app => {
//     const DataAnalysisEntry = createCustomElement(EntryComponent, {
//       injector: app.injector
//     });
//     customElements.define('data-analysis-entry', DataAnalysisEntry);
//     // console.log('Registered custom element data-analysis-entry');
//   })
//   .catch((err) => console.error(err));

// platformBrowserDynamic()
//   .bootstrapModule(EntryModule)
//   .catch((err) => console.error(err));

