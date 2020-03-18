import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {last} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loading = true;
  listOfObjects = [
    // { id: 0, title: 'Москва', sub: [{id: 0, title: 'Москва', obj: [], img: 'https://s1.1zoom.me/b5050/609/362302-admin_1920x1080.jpg', tag: 'CAPITAL'}], img: 'https://s1.1zoom.me/b5050/44/144022-aleni_1400x1050.jpg'},
    // { id: 1, title: 'Московская область', sub: [{id: 0, title: 'Красногорск', obj: [{id: 0, title: 'Отель "Аквариум"', type: 'Гостиницы', char: [{title: 'Количество комнат', data: 24}, {title: 'Средняя цена', data: 5000}, {title: 'Комнаты', data: ['Холл', 'Столовая', 'Прихожая']}, {title: 'Контакты', data: '+7 916-567-4466'}], img: ['https://q-cf.bstatic.com/images/hotel/max1024x768/233/233721317.jpg', 'https://q-cf.bstatic.com/images/hotel/max1024x768/233/233721317.jpg']}], info: 'Красного́рск — город в Московской области России. Население в городе — 171 793 чел. (2019), в объединённом городском округе, по сведениям администрации округа, в 2017 году составляла 317 тыс. чел., официально в 2019 году — 263 143 чел.'}, {id: 1, title: 'Балашиха', obj: [], info: 'Балаши́ха — город в России, в центре Московской области, крупнейший город области. Образует город областного значения с административной территорией и одноимённое муниципальное образование городской округ Балашиха. Основан в 1830 году. Население города составляет 490 047 чел. (2019).'}], img: 'https://avatars.mds.yandex.net/get-zen_doc/61014/pub_5b2cd174cb0ffb00a9d443e9_5b2cd31dc8dfbc00a8552b77/scale_1200' },
  ];
  getArea(areaId) {
    areaId = Number(areaId);
    if (this.listOfObjects.length === 0) {
      this.router.navigateByUrl('');
    } else {
      return of (this.listOfObjects.find(area => area.id === areaId));
    }
  }
  constructor(private db: AngularFirestore, private router: Router) {
    if (localStorage.getItem('data') === null) {
      this.listOfObjects = [];
      localStorage.setItem('data', JSON.stringify(this.listOfObjects));
    } else {
      this.listOfObjects = JSON.parse(localStorage.getItem('data'));
    }
    this.loading = false;

    // this.listOfObjects = [];
    // db.collection('areas').valueChanges().subscribe(value => {value.forEach(value1 => {this.listOfObjects.push(value1); this.loading = false; }); });
  }

  getTown(areaid: any, townid: any) {
    areaid = Number(areaid);
    townid = Number(townid);
    if (this.listOfObjects.length === 0) {
      this.router.navigateByUrl('');
    } else {
      return of (this.listOfObjects.find(area => area.id === areaid).sub.find(town => town.id === townid));
    }
  }

  getObject(areaid: any, townid: any, objectid: any) {
    areaid = Number(areaid);
    townid = Number(townid);
    objectid = Number(objectid);
    if (this.listOfObjects.length === 0) {
      this.router.navigateByUrl('');
    } else {
      return of(this.listOfObjects.find(area => area.id === areaid).sub.find(town => town.id === townid).obj.find(object => object.id === objectid));
    }
  }
  addArea(title, img) {
    let lastIndex = -1;
    this.listOfObjects.forEach(value => {
      if (value.id > lastIndex) {
        lastIndex = value.id;
      }
    });
    this.listOfObjects.push({id: lastIndex + 1, title: title, img: img, sub: []});
    // let index = 0;
    // this.db.collection('helpData').doc('lastIndex').valueChanges().subscribe(value => {
    //   // @ts-ignore
    //   index = value.value;
    //   this.db.collection('helpData').doc('lastIndex').set({value: index + 1});
    //   this.db.collection('areas').add();
    // });
    localStorage.setItem('data', JSON.stringify(this.listOfObjects));
  }
  addTown(title, descr, areaid) {
    let lastIndex = -1;
    this.listOfObjects[areaid].sub.forEach(value => {
      if (value.id > lastIndex) {
        lastIndex = value.id;
      }
    });
    this.listOfObjects[areaid].sub.push({title: title, info: descr, id: lastIndex + 1, obj: [] });
    localStorage.setItem('data', JSON.stringify(this.listOfObjects));
  }
  addObject(title, char, images, areaid, townid) {
    let lastIndex = -1;
    this.listOfObjects[areaid].sub[townid].obj.forEach(value => {
      if (value.id > lastIndex) {
        lastIndex = value.id;
      }
    });
    this.listOfObjects[areaid].sub[townid].obj.push({id: lastIndex + 1, title: title, char: char, img: images, type: 'Гостиницы'});
    localStorage.setItem('data', JSON.stringify(this.listOfObjects));

  }
}
