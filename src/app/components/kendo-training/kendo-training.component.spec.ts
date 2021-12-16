import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoTrainingComponent } from './kendo-training.component';

describe('KendoTrainingComponent', () => {
  let component: KendoTrainingComponent;
  let fixture: ComponentFixture<KendoTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
