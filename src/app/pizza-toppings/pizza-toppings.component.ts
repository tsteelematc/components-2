import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  // Magic DI (dependency injection).. 
  // TS has awesome shorthand syntax for this
  constructor(private pizzaSvc: PizzaService) { }

  pizzaToppings = [];
  //total = 0;
  get total() {
    return this.pizzaToppings
      .filter(x => x.checked)
      .reduce(
        (acc, x) => acc + x.price 
        , 0
      );
  }

  ngOnInit(): void {
    this.pizzaToppings = this.pizzaSvc.loadPizzaToppings();
    console.log(this.pizzaToppings);
  }

  checkout() {
    this.total = this.pizzaToppings
      .filter(x => x.checked)
      .reduce(
        (acc, x) => acc + x.price 
        , 0
      )
  }

  checkAll() {
    this.pizzaToppings = this.pizzaToppings.map(x => ({...x, checked: true }))
  }

  uncheckAll() {
    this.pizzaToppings = this.pizzaToppings.map(x => ({...x, checked: false }))
  }
}
