import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesectionComponent } from './pricesection.component';

describe('PricesectionComponent', () => {
  let component: PricesectionComponent;
  let fixture: ComponentFixture<PricesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricesectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
