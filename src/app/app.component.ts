import { Component } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from './pizza.service';

// Décorateur
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Composant
export class AppComponent {
  title = 'pizza party';
  pizzas: Pizza[];
  selectedPizza: Pizza; // La variable pizza est créée mais est égale a null

  // On injecte le service Pizza Service dans le composant pour pouvoir l'utiliser avec 
  // this.pizzaService
  constructor(private pizzaService: PizzaService){}

  // équivalent du codiement.redy. 
  //Quand le composant est prêt dans le DOM, on récupère les pizzas
  ngOnInit(){

  }

  onSelect(pizza: Pizza): void{
    console.log(pizza);
    // On modifie la propriété pizza de l'instance de AppComponent
    this.selectedPizza = pizza;
  }
}
