import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairGuidanceComponent } from './repair-guidance.component';

describe('RepairGuidanceComponent', () => {
  let component: RepairGuidanceComponent;
  let fixture: ComponentFixture<RepairGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepairGuidanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
