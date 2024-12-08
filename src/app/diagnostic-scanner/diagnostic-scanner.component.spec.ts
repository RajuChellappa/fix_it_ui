import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticScannerComponent } from './diagnostic-scanner.component';

describe('DiagnosticScannerComponent', () => {
  let component: DiagnosticScannerComponent;
  let fixture: ComponentFixture<DiagnosticScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticScannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
