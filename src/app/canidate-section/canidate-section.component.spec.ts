import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanidateSectionComponent } from './canidate-section.component';

describe('CanidateSectionComponent', () => {
  let component: CanidateSectionComponent;
  let fixture: ComponentFixture<CanidateSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanidateSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanidateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
