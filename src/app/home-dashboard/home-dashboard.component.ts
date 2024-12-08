import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-dashboard',
  imports: [
    CommonModule,    // Required for basic Angular features like ngIf, ngFor
    MatButtonModule, // Angular Material Button
    MatInputModule,  // Angular Material Input
    MatToolbarModule
  ],
  templateUrl: './home-dashboard.component.html',
  styleUrl: './home-dashboard.component.scss'
})
export class HomeDashboardComponent {

  constructor(private router: Router) { 

  }
  
  maintenanceTasks: any;

  navigateTo(path: string){
    this.router.navigate([path]); 
  }

}
