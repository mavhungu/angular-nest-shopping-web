import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { NgHttpLoaderComponent, Spinkit } from 'ng-http-loader';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './core/components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, NgHttpLoaderComponent, NgxSonnerToaster, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Helpa App';
  public spinkit = Spinkit;
  protected readonly String = String;
}
