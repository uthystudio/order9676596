import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  area: any;
  areaid = 0;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getArea();
  }
  getArea(): void {
    this.route.params.subscribe(event => {
      this.areaid = event.areaid;
      this.dataService.getArea(this.areaid)
        .subscribe(area => this.area = area);
    });
  }
  goBack() {
    this.location.back();
  }
}
