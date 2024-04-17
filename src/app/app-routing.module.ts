import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomeComponent } from './home/home.component';
import { CreateAppintment } from './create-appintment';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';

const routes: Routes = [
  {path:'admin',component:AdmindashComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'create-appointment',component:CreateAppointmentComponent},
  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'docdash',component:DocdashComponent},
  {path:'create-patient',component:CreatePatientComponent},
  {path:'medicine-list',component:MedicineListComponent},
  {path:'create-medicine',component:CreateMedicineComponent},
  {path:'update-patient/:id',component:UpdatePatientComponent},
  {path:'view-patient/:id',component:ViewPatientComponent},
  {path:'update-medicine/:id',component:UpdateMedicineComponent},
  {path:'doclogin',component:DocloginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
