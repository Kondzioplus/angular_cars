import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { HeaderComponent } from './shared-module/header/header.component';
import { CoreModule } from './core-module/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarsModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
