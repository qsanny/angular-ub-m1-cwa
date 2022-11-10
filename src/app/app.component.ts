import { Component } from '@angular/core';
import { Pizza } from './shared/models/pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pizza';

  pizza = new Pizza('Mex', '', '');
}
