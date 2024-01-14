import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  constructor(private http:HttpClient) { }

  server_URL = "http://localhost:3000"


  authorization(){
   return this.http.get(`${this.server_URL}/employee/1`)

  }
}
