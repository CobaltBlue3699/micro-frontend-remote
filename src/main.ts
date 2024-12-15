import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { EntryModule } from './app/entry.module';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
platformBrowserDynamic()
  .bootstrapModule(EntryModule)
  .catch((err) => console.error(err));

