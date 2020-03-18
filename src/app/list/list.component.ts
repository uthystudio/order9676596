import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  giveDataForTooltip(item) {
    let dataToReturn = '';
    item.forEach(value => dataToReturn = dataToReturn + value.title + ', ');
    dataToReturn = dataToReturn.slice(0, -2);
    return dataToReturn;
  }
}
