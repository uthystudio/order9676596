import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  vacancies = [{title: 'Вакансия 1', descr: 'Описание вакансии 1', price: '$200'}, {title: 'Вакансия 2', descr: 'Описание вакансии 2', price: '$120'}, {title: 'Вакансия 3', descr: 'Описание вакансии 3', price: '$140'}, ];

  constructor() { }

  ngOnInit() {
  }

}
