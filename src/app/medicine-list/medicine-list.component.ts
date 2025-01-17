import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrl: './medicine-list.component.css'
})
export class MedicineListComponent {

  medicines:Medicine[]=[];
  constructor(private medicineService:MedicineService, private router:Router){}
  
  ngOnInit():void{
    this.getMedicine();
  }
  getMedicine(){
      this.medicineService.getMedicineList().subscribe(data=>{
        this.medicines=data;
      })
    }

  delete(id:number){
    this.medicineService.deleteMedicine(id).subscribe(data=>{
      console.log(data);
      this.getMedicine();
    })

  }
  
  update(id:number){
    this.router.navigate(['update-medicine',id]);

  }

}
