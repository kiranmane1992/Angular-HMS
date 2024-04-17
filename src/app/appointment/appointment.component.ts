import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  appointments:Appointment[]=[];
constructor(private appoitmentService:AppointmentService){}

ngOnInit():void{
  this.getAppointment();
}
getAppointment(){
    this.appoitmentService.getAppointmentList().subscribe(data=>{
      this.appointments=data;
    })
  }
delete(id:number){
  this.appoitmentService.deleteAppointment(id).subscribe(data=>{
    console.log(data);
    this.getAppointment();
  })
}

}
