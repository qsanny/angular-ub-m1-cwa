import { Component, OnInit } from '@angular/core';
import { Pizza } from '../shared/models/pizza';
import { PIzzaService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [PIzzaService],
})
export class ContainerComponent implements OnInit {
  pizzaList: Pizza[] = [];

  pizza: Pizza;

  constructor() {}

  ngOnInit() {}

  onOpen(index) {
    console.log(index);
    this.pizza = this.pizzaList[index];
  }
}
