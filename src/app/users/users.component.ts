import { Component } from '@angular/core';
import { AdminapiService } from '../services/adminapi.service';
import { employeeModel } from '../employee.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
allemp:employeeModel[]=[]

constructor(private api:AdminapiService){}
//oninit is an interface implement ngonit
// call justafter constructer...
ngOnInit():void{
  this.allemployee()
}
allemployee(){
  this.api.getempapi().subscribe({
    next:(res:any)=>{
      this.allemp=res
      console.log(res);
      
    },error:(err:any)=>{
      console.log(err);
      
    }
  })
}

deleteemp(id:any){
  this.api.deleteempapi(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.allemployee()
    }


    ,error:(err:any)=>{
      console.log(err);
      
    }
  })
}


}
