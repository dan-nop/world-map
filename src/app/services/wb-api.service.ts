import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WbApiService {

  constructor( private http: HttpClient) { }

  getData( country:any ) {
    return this.http.get('http://api.worldbank.org/v2/country/'+ country + '?format=json');
  }
}
