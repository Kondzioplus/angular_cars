import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { ɵInternalFormsSharedModule } from '@angular/forms';



@NgModule({
  
  imports: [CommonModule, ɵInternalFormsSharedModule],
  exports: [CarsListComponent],
  declarations: [CarsListComponent, TotalCostComponent]
})
export class CarsModule { }
