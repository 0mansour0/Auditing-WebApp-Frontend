import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div class='container'>
    <pm-main></pm-main>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fawryFront';
}
