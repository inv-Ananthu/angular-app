import { Component } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `<h1>Hello world!</h1>`,
})
export class AppComponent {


}
