import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  areaid = 0;
  townid = 0;
  type = '';
  title = '';
  descr = '';
  image = '';
  images = [];
  char = [];
  charTitle = '';
  charValue = '';
  constructor(
    private location: Location,
    private dataService: DataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getID();
  }
  getID(): void {
    this.route.params.subscribe(event => {
      this.areaid = event.areaid;
      this.townid = event.townid;
      if (this.areaid === undefined) {
        this.type = 'область';
      } else {
        if (this.townid === undefined) {
          this.type = 'город';
        } else  {
          this.type = 'объект';
        }
      }


    })
  }
  add() {
    console.log(this.title, this.image);
    if (this.type === 'область') {
      this.dataService.addArea(this.title, this.image);
    }
    if (this.type === 'город') {
      this.dataService.addTown(this.title, this.descr, this.areaid);
    }
    if (this.type === 'объект') {
      this.dataService.addObject(this.title, this.char, this.images, this.areaid, this.townid)

    }

  }

  listenForKey($event) {
    if ($event.key === 'Enter') {
      this.images.push(this.image);
    }
  }
}
