import { Component } from '@angular/core';

export class Pizza {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pizza party';
  pizza: Pizza = {
    id: 1,
    name: "4 Fromages",
    price: 10
  }
}
