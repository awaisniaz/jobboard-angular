import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WayToUseComponent } from './way-to-use.component';

describe('WayToUseComponent', () => {
  let component: WayToUseComponent;
  let fixture: ComponentFixture<WayToUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WayToUseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WayToUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
