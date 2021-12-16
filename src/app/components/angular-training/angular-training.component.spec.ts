import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTrainingComponent } from './angular-training.component';

describe('AngularTrainingComponent', () => {
  let component: AngularTrainingComponent;
  let fixture: ComponentFixture<AngularTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
