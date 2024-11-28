import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  protected readonly toast = toast;

  private formBuilder = inject(FormBuilder);

  constructor(private authService: AuthService) { }

  registerForm = this.formBuilder.nonNullable.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  submitRegistration() {
    if(this.registerForm.valid) {
      const registerData = this.registerForm.value;
      const regStatus = this.authService.signup(registerData);
      this.registerForm.reset();
    }else {
      this.registerForm.markAllAsTouched();
    }
  }

  get registerControls() {
    return this.registerForm.controls;
  }

}
