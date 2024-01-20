import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeModel } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  constructor(private http:HttpClient) { }

  server_URL = "http://localhost:3000"


  authorization(){
   return this.http.get(`${this.server_URL}/employee/1`)

  }
  addemployeeapi(employee:employeeModel){
    return this.http.post(`${this.server_URL}/employee`,employee)
 
  }

  getempapi(){
    return this.http.get(`${this.server_URL}/employee`)
 
   }

deleteempapi(id:string){
  return this.http.delete(`${this.server_URL}/employee/${id}`)

 }
 viewemployee(id:string){
  return this.http.get(`${this.server_URL}/employee/${id}`)

 }
 editemployee(id:any,employee:any){
  return this.http.put(`${this.server_URL}/employee/${id}`,employee)

 }

}
