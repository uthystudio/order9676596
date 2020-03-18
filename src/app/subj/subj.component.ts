import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-subj',
  templateUrl: './subj.component.html',
  styleUrls: ['./subj.component.css']
})
export class SubjComponent implements OnInit {

  constructor(private dataService: DataService, private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
