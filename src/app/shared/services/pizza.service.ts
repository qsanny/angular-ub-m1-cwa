import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from '../models/pizza';

@Injectable()
export class PIzzaService {
  pizzaList: BehaviorSubject<Pizza[]> = new BehaviorSubject<Pizza[]>([
    new Pizza(
      'marguerita',
      '../../assets/margarita.jpg',
      "La pizza Margherita est le nom d'une spécialité culinaire traditionnelle de la ville de Naples en Italie. "
    ),
    new Pizza(
      'Mex',
      '../../assets/mex.jpg',
      'a pizza Tex-Mex, un savant mélange de ...'
    ),
    new Pizza(
      '4 Fromages',
      '../../assets/fromage.jpg',
      "Pizza quattro formaggi Italian: est une variété de pizza dans la cuisine italienne qui est garnie d'une combinaison de quatre types de fromage"
    ),
  ]);

  public pizza: BehaviorSubject<Pizza> = new BehaviorSubject<Pizza>(null);

  constructor() {
    console.log('pizza service');
  }

  selectPizza(index: number): void {
    console.log(index)
    this.pizza.next(this.pizzaList.value[index]);
  }

  fetchPizzas(): void {
    this.pizzaList.next([
      new Pizza(
        'marguerita',
        '../../assets/margarita.jpg',
        "La pizza Margherita est le nom d'une spécialité culinaire traditionnelle de la ville de Naples en Italie. "
      ),
      new Pizza(
        'Mex',
        '../../assets/mex.jpg',
        'a pizza Tex-Mex, un savant mélange de ...'
      ),
      new Pizza(
        '4 Fromages',
        '../../assets/fromage.jpg',
        "Pizza quattro formaggi Italian: est une variété de pizza dans la cuisine italienne qui est garnie d'une combinaison de quatre types de fromage"
      ),
    ]);
  }
}
