import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../shared/models/pizza';
import { PIzzaService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css'],
})
export class PizzaDetailComponent implements OnInit {
  // @Input() pizza: Pizza;

  pizza: Pizza;

  constructor(private pizzaService: PIzzaService) {}

  ngOnInit(): void {
    this.pizzaService.pizza.subscribe((pizza: Pizza) => {
      this.pizza = pizza;
      console.log(pizza)
    })
  }
}
