import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularChildComponent } from './angular-child.component';

describe('AngularChildComponent', () => {
  let component: AngularChildComponent;
  let fixture: ComponentFixture<AngularChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
