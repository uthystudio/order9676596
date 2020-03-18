import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.css']
})
export class TownComponent implements OnInit {
  town: any;
  types = ['Гостиницы', 'Достопримечательности', 'Площадки', 'Прокатчики', 'Event Agency', 'Рестораны'];
  areaid = 0;
  townid = 0;
  constructor(
    private location: Location,
    private dataService: DataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getTown();
  }

  getTown(): void {
    this.route.params.subscribe(event => {
      this.areaid = event.areaid;
      this.townid = event.townid;
      this.dataService.getTown(this.areaid, this.townid)
        .subscribe(town => this.town = town);
    });
  }


  getNumberOfObjects(category, data) {
    return data.filter(function(value) {
      return value.type === category;
    });
  }
  goBack() {
    this.location.back();
  }
}
