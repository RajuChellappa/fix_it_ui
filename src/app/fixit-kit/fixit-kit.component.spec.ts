import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixitKitComponent } from './fixit-kit.component';

describe('FixitKitComponent', () => {
  let component: FixitKitComponent;
  let fixture: ComponentFixture<FixitKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixitKitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixitKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
