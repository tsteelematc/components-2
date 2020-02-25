import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  // Magic DI (depencency injection).. TS has awesmoe shorthand syntax for this
  constructor(private pizzaSvc: PizzaService) { }

  ngOnInit(): void {
  }

}
