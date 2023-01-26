import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DndModule } from 'ngx-drag-drop';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, DndModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
