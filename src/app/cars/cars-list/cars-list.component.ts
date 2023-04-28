import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild("totalCostRef")
  totalCostRef: TotalCostComponent = new TotalCostComponent;
  totalCost!: number;
  grossCost!: number;
  cars!: Car[];
  
  constructor(private carsService : CarsService) {}
//ngOnInit = na starcie komponentu chcemy, zeby wyliczyło nam sume kosztów.
  ngOnInit() {
    this.loadCars();
    
}

loadCars(): void{
  this.carsService.getCars().subscribe((cars) =>{
    this.cars = cars;
    this.countTotalCost();
  })
}

ngAfterViewInit() {
  this.totalCostRef.showGross();
}
showGross(): void{
  this.totalCostRef.showGross();
}

countTotalCost() : void {
  this.totalCost = this.cars
    .map((car) => car.cost)
    .reduce((prev, next) => prev + next);
}

onShownGross(grossCost : number): void{
  this.grossCost = grossCost;
}
}
