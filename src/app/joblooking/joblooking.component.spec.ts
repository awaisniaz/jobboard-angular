import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoblookingComponent } from './joblooking.component';

describe('JoblookingComponent', () => {
  let component: JoblookingComponent;
  let fixture: ComponentFixture<JoblookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoblookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoblookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
