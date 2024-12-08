import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-repair-guidance',
  imports: [
    CommonModule
  ],
  templateUrl: './repair-guidance.component.html',
  styleUrl: './repair-guidance.component.scss'
})
export class RepairGuidanceComponent {
repairSteps: any;

  completeRepair(){

  }

}
