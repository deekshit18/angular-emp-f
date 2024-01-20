import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allemp: any[],searchkey: string): any[] {
   const result:any=[]
if (!allemp || searchkey==="") {
  return allemp
  
}
allemp.forEach((item:any)=>{
  if(item.name.trim().toLowerCase().includes(searchkey.trim().toLowerCase())){
    result.push(item)
  }
})

    return result;
  }

}
