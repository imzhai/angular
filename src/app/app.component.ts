import { Component } from '@angular/core';

// création d'un objet pizza
export class Pizza {
  id: number;
  name: string;
  price: number;
  image: string;
}
// création de la constante pizza
const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: 'reine.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: '4-fromages.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: 'orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9, image: 'cannibale.jpg'}
];

// Décorateur
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Composant
export class AppComponent {
  title = 'pizza party';
  pizzas = PIZZAS;
  selectedPizza: Pizza; // La variable pizza est créée mais est égale a null

  onSelect(pizza: Pizza): void{
    console.log(pizza);
    // On modifie la propriété pizza de l'instance de AppComponent
    this.selectedPizza = pizza;
  }
}
