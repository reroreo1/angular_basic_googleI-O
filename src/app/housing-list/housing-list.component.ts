import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import {HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  
  @Output() selectedLocation = new EventEmitter<HousingLocation>();
  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];
  constructor() { }


  ngOnInit(): void {
  }
  searchHousingLocations(value: string){
    if (!value) return;
    this.results = this.locationList.filter((location: HousingLocation) => {
      return location.city.toLowerCase().includes(value.toLowerCase());
    });
  }
  selectLocation(location: HousingLocation){
    this.selectedLocation.emit(location);
  }
}
