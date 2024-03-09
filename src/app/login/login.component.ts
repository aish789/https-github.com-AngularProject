import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../apiservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';


  showPassword:boolean;

 
  constructor(private apiService: ApiService, private router: Router) {}

  login() {
    if (!this.isValidEmail(this.email)) {
      alert('Invalid email format');
      return;
    }
    const users = { email: this.email, password: this.password };
    console.log(this.email);
    console.log(this.password);
    this.apiService.login(users).subscribe(
      (response) => {
        alert('Login Successfully');
        
      
        this.router.navigate(['/Dashboard']);
      },
      (error) => {
       
        alert('Invalid Email or Password');
        console.error(error);

      }
    );
  }

  private isValidEmail(email: string): boolean {
    //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
