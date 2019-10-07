import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { todoData } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpclient : HttpClient) { }

  gettodo(): Observable<any>{
    return this.httpclient.get('https://jsonplaceholder.typicode.com/todos?userId=3')
  }

  gettodobyparameters(): Observable<any>{
    let param1 = new HttpParams().set('userId','1')
    return this.httpclient.get('https://jsonplaceholder.typicode.com/todos',{params:param1})
  }

  posttodoparameters(opost:todoData): Observable<any>{
    return this.httpclient.post('https://jsonplaceholder.typicode.com/posts',opost);
  }

  puttodoparameters(opost:todoData): Observable<any>{
    return this.httpclient.put('https://jsonplaceholder.typicode.com/posts/1',opost);
  }

}
