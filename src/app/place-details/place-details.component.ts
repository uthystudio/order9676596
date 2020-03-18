import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  object: any;
  slide = 0;
  constructor(
    private location: Location,
    private dataService: DataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getObject();
  }

  getObject(): void {
    this.route.params.subscribe(event => {
      const areaid = event.areaid;
      const townid = event.townid;
      const objectid = event.objectid;
      this.dataService.getObject(areaid, townid, objectid)
        .subscribe(object => this.object = object);
    });
  }

  nextSlide() {
    if (this.slide < this.object.img.length - 1) {
      this.slide ++;
    }
  }

  previousSlide() {
    if (this.slide > 0) {
      this.slide --;
    }
  }
  goBack() {
    this.location.back();
  }
}
