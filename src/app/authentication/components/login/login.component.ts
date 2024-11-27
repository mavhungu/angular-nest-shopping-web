import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  loginFormSubmit() {
    if(this.loginForm.valid) {
      const loginData =  this.loginForm.value;
      console.warn(loginData);
      this.loginForm.reset();
    }else {
      this.loginForm.markAllAsTouched();
    }
  }

  get loginControls() {
    return this.loginForm.controls;
  }

}
