import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from '../shared/models/pizza';
import { PIzzaService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent implements OnInit {
  // @Input() pizzas: Pizza[] = [];
  // @Output() open: EventEmitter<any> = new EventEmitter();

  pizzas: Pizza[] = [];

  constructor(private pizzaService: PIzzaService) {
    this.pizzaService.pizzaList.subscribe((pizzas: Pizza[]) => {
      this.pizzas = pizzas;
    });
  }

  ngOnInit(): void {}

  onPizzaClick(index) {
    this.pizzaService.selectPizza(index);
  }
}
