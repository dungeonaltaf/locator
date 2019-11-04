import { Component, OnInit } from '@angular/core';
import { MapsService } from '../maps.service';
import {Map} from '../map';
import { Observable, observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
  providers: [MapsService]
})
export class MapsComponent implements OnInit {
  title = 'Real-Time ';
  lat  =  51.67418;
  lng = 7.80907;
  locations :Map[];
  location : Map;
  latitude : Number;
  longitude: Number;
  constructor(private mapService : MapsService) { }

  ngOnInit() {

    this.mapService.getLocation().subscribe(locations =>this.locations =locations );
    
  }

}
