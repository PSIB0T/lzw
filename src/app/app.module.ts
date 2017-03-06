import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MaterialModule} from '@angular/material';
import {InputDecode} from './inputDecode.component';
import {Keys} from './keys.pipe';

import { AppComponent }  from './app.component';
import {InputMessageComponent} from './inputMessage.component';
import {OutputComponent} from './output.component';

const appRoutes: Routes = [
  { path: 'encode', component: InputMessageComponent },
  { path: 'decode', component: InputDecode },
  { path: '', redirectTo: '/encode', pathMatch: 'full'}
]


@NgModule({
  imports:      [ BrowserModule,FormsModule,MaterialModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, InputMessageComponent,InputDecode, Keys,OutputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
