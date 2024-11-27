import { Component } from '@angular/core';
import { toast } from 'ngx-sonner';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 protected readonly toast = toast;
 constructor(private authService: AuthService) {
 }

 loadProduct() {
   this.authService.login().subscribe(data => console.log(data));
 }
}
