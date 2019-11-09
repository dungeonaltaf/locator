import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {HttpResponse} from "@angular/common/http";
import {gpsFormat} from "./gpsFormat";

import {Map} from './map';


import {map, catchError}  from 'rxjs/operators/';
import { Observable } from 'rxjs';
import { Config } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class MapsService {

 
  constructor(private http : HttpClient) {
    
  }
//getting www urlencoded format from the server.  
  getLocation():Observable <Map[]>{
   return this.http.get<Map[]>("http://localhost:3000/api/get/location/");
   console.log("maps service called");
 }
}