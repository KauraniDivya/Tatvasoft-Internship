import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registertitle = 'Register';
  phoneImageUrl: string = 'https://firebasestorage.googleapis.com/v0/b/xenesis-ff41b.appspot.com/o/Untitled%20design%20(4).png?alt=media&token=d5cef96d-90d6-4f7b-9c89-3c176d392d94';
  avatarImageUrl: string = 'https://i.ibb.co/dcm0Tzx/Untitled-design.png';
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  loading: boolean = false;


  onRegister() {
    if (this.email && this.password) {
      this.loading = true;
      setTimeout(() => {
        // Handle the register logic here
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        console.log('Remember Me:', this.rememberMe);

        // Stop the loading spinner
        this.loading = false;
      }, 2000);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
