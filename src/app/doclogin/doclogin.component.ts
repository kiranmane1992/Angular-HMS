import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {


  username:String="";
  password:String="";

  constructor(private router:Router){}
  inValidLogin = false;
  checklogin(){

    if(this.username=="kiranmane" && this.password=="Kiran123"){
      // sessionStorage.setItem("username",this.username);
      this.router.navigate(['/docdash']);
      return true;
    }
    else{
      alert("invalid credentials")
      this.router.navigate(['/home']);
      return false;
    }

  }
}
