import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BackendConnService } from '../backend-conn.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title='Login';
  constructor(private bes : BackendConnService, private router:Router) { }

  ngOnInit(): void {}

  username = "";
  password = "";
  onSubmit() {
    if(this.username=="" || this.password=="")
      alert("Username or Password cannot be blank");
    else if(this.bes.validateLogin(this.username, this.password)!=null) {
        this.bes.validateLogin(this.username,this.password).subscribe(data => {
        if(this.username!=null && this.username==data.username && this.password==data.password) this.router.navigate(['/home']);
        else alert("Entered username and/or password is incorrect.");
      },
      (error) => {
        console.error('error caught in component')
      });
    }
    else 
      this.router.navigate(['']);
  }
  forgot() {
    alert("This action is temporarily disabled.");
  }

}