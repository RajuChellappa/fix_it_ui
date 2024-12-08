import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diagnostic-scanner',
  imports: [
    CommonModule
  ],
  templateUrl: './diagnostic-scanner.component.html',
  styleUrl: './diagnostic-scanner.component.scss'
})
export class DiagnosticScannerComponent {
  diagnosis: any = null;

  diagnose() {
    // Hardcoded example diagnosis
    this.diagnosis = {
      result: 'Leaking Pipe Identified. Recommended repair: Apply sealant tape and replace washer.'
    };
  }

  getGuidance() {
    // Navigate to repair guidance
  }

}
