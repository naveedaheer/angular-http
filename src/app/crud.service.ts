import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CrudService {

  constructor(private http: Http) { }

  getData():Observable<any> {
    return this.http
    .get('https://randomuser.me/api/')
    .map((response: Response)=>response.json());
  }

}
