import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs'


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
  protected readonly toast = toast;

  constructor(private authService: AuthService) {}

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  loginFormSubmit() {
    if(this.loginForm.valid) {
      const loginData =  this.loginForm.value;
      const loginStatus = this.authService.login(loginData);
      this.loginForm.reset();
    }else {
      this.loginForm.markAllAsTouched();
    }
  }

  get loginControls() {
    return this.loginForm.controls;
  }

}
