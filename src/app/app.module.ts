import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule, MatSidenavModule,
  MatSliderModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { ListComponent } from './list/list.component';
import { AskComponent } from './ask/ask.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { SubjComponent } from './subj/subj.component';
import { WorkComponent } from './work/work.component';
import {CompanyComponent} from './company/company.component';
import { AreaComponent } from './area/area.component';
import { TownComponent } from './town/town.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AddComponent } from './add/add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from '@angular/forms';

const firebaseConfig = {
  apiKey: 'AIzaSyAWPufcqw15fmgIpXytjYG25oprWsg66G8',
  authDomain: 'kwork-project.firebaseapp.com',
  databaseURL: 'https://kwork-project.firebaseio.com',
  projectId: 'kwork-project',
  storageBucket: 'kwork-project.appspot.com',
  messagingSenderId: '324763641718',
  appId: '1:324763641718:web:c0d4aa48fa85f5356abc57'
};


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AskComponent,
    AboutComponent,
    ContactsComponent,
    MainComponent,
    SubjComponent,
    WorkComponent,
    CompanyComponent,
    AreaComponent,
    TownComponent,
    PlaceDetailsComponent,
    AddComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'subj', component: SubjComponent},
      {path: 'subj/:areaid', component: AreaComponent},
      {path: 'subj/:areaid/:townid', component: TownComponent},
      {path: 'subj/:areaid/:townid/:objectid', component: PlaceDetailsComponent},
      {path: 'work', component: WorkComponent},
      {path: 'about', component: CompanyComponent},
      {path: 'add', component: AddComponent},
      {path: 'add/:areaid', component: AddComponent},
      {path: 'add/:areaid/:townid', component: AddComponent},
      {path: '**', component: NotFoundComponent},
    ]),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
