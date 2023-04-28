import { Injectable } from '@angular/core';
import { Car } from "./models/car";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";



@Injectable()
export class CarsService {
  private apiUrl = "http://localhost:3000/api/cars";
  httpClient: any;

  constructor(private http :HttpClient) { }
  getCars() : Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl)
  }
  
}





