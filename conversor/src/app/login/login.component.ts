import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any;
  senha:any;  

  constructor() { }

  ngOnInit(): void {
  }
  
  
  fazerLogin(){
      console.log(this.email,"email login")
      console.log(this.senha,"senha login")
  }

}


