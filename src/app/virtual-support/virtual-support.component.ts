import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-virtual-support',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './virtual-support.component.html',
  styleUrl: './virtual-support.component.scss'
})
export class VirtualSupportComponent {
  userIssue: any;
  technicianName: any;
technicianConnected: any;

  connectTechnician(){

  }

}
