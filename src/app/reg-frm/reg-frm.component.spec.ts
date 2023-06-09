import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegFrmComponent } from './reg-frm.component';

describe('RegFrmComponent', () => {
  let component: RegFrmComponent;
  let fixture: ComponentFixture<RegFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegFrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
