import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'data-analysis-dashboard',
  template: `
    <p>remote data-analysis dashboard works!</p>
  `,
  styles: ``
})
export class DashboardComponent {

}
