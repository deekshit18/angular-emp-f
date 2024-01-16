import { Component } from '@angular/core';
import { employeeModel } from '../employee.model';
import { AdminapiService } from '../services/adminapi.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent {

  employee:employeeModel={}
constructor(private api:AdminapiService){}
  cancelEmployee(){
    this.employee={}
  }

  addEmployee(){
    console.log(this.employee);
    if (!this.employee.name || !this.employee.email || !this.employee.id || !this.employee.status) {
      alert('Fill All Form')


    }
    
    else{
    this.api.addemployeeapi(this.employee).subscribe({
     next:(res:employeeModel)=>{
      console.log(res);
      alert('Added Successfully')

     } ,error:(err:any)=>{
      console.log(err);
      
     }
    })}
    
  }}
