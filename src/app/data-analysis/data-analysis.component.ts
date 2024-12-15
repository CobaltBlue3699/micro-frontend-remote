import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'data-analysis',
  standalone: true,
  imports: [SharedModule],
  template: `
    remote data-analysis works!
    <router-outlet></router-outlet>
  `,
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DataAnalysisComponent {

}
