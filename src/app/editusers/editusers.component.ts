import { Component } from '@angular/core';
import { employeeModel } from '../employee.model';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiService } from '../services/adminapi.service';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent {
employee:employeeModel={}

constructor(private route:ActivatedRoute,private api:AdminapiService,private router:Router){}

ngOnInit():void{
  this.route.params.subscribe((res:any)=>{
    console.log(res.id);
    this.viewemploy(res.id)
// 
  })
}
viewemploy(id:string){
  this.api.viewemployee(id).subscribe({
next:(res:any)=>{
  console.log(res);
  this.employee=res
  
},error:(err:any)=>{
  console.log(err);
  
}
  })
}

updateemployee(id:any){
this.api.editemployee(id,this.employee).subscribe({
  next:(res:any)=>{
    console.log(res);
    alert("update successfully")
    this.router.navigateByUrl('/employees')
  },error:(err:any)=>{
    console.log(err);
    
  }
})
}
cancel(id:any){
  this.viewemploy(id)
}
}
