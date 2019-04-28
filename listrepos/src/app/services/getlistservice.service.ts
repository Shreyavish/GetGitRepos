import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetlistserviceService {

  constructor(private http:HttpClient) { }

  getList(user) : Observable<any>{


    return this.http.get('https://api.github.com/users/'+user+'/repos');
  }


}
