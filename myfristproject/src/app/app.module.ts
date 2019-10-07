import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { GetserviceService } from './getservice.service';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './todo.service';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    CommonModule

  ],
  providers: [GetserviceService,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
