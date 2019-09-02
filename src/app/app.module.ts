import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoTypeaheadReactiveFormComponent } from './typeahead/typeahead.component.ts';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    TypeaheadModule.forRoot() 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    DemoTypeaheadReactiveFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
