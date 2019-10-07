import { Component } from '@angular/core';
import { GetserviceService } from './getservice.service';
import { apiData } from './apidata';
import { todoData } from './todo';
import { TodoService } from './todo.service';
import { getbyparam } from './todoparam';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfristproject angular';
  // constructor(private apiservice : GetserviceService ){

  // }

  // lstdata : apiData[];
  // ngOnInit(){
  // this.apiservice.getapiData().subscribe(
  // data=>{
  // this.lstdata = data;
  // console.log(this.lstdata);

  // }
  // );
  // }

  constructor(private todoservice : TodoService){}

  todolist : todoData;
  message;
  todobyparam : getbyparam;
  todopost = todoData;
  todoput = todoData;



  ngOnInit(){
    this.todoservice.gettodo().subscribe(
      data=>{
        console.log(data);
        this.todolist = data;
      }
    );

    
    this.todoservice.gettodobyparameters().subscribe(
      data=>{
        this.todobyparam = data;
        this.message = 'get data successfully';
      }
    );

    
    var opost = new todoData();
    opost.userId = 6;
    opost.title = "This is post method.";
    opost.completed = "post method completed successfully.";
    this.todoservice.posttodoparameters(opost).subscribe(
      data=>{
        this.todopost = data;
      }
    );


    var opost = new todoData();
    opost.userId = 5;
    opost.title = "This is put method.";
    opost.completed = "put method completed successfully.";
    this.todoservice.puttodoparameters(opost).subscribe(
      data=>{
        this.todoput = data;
      }
    );

  }
}
