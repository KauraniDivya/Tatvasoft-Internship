import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logintitle: string = 'Login';
  phoneImageUrl: string = 'https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/Untitled%20design%20(2).png?alt=media&token=f9873000-183f-439f-870f-7ac590f4a645';
  avatarImageUrl: string = 'https://i.ibb.co/dcm0Tzx/Untitled-design.png';
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onSubmit() {
    if (this.email && this.password) {
      // Handle the login logic here
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      console.log('Remember Me:', this.rememberMe);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
