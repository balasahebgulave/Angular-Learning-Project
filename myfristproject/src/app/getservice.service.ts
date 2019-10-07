import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetserviceService {

	constructor(private httpclient : HttpClient) { }

	getapiData(): Observable<any>{
		return this.httpclient.get('https://jsonplaceholder.typicode.com/todos')
	}

  
}
