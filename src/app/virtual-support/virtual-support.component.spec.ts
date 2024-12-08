import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualSupportComponent } from './virtual-support.component';

describe('VirtualSupportComponent', () => {
  let component: VirtualSupportComponent;
  let fixture: ComponentFixture<VirtualSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
