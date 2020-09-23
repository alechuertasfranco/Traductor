import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraduceComponent } from './traduce.component';

describe('TraduceComponent', () => {
  let component: TraduceComponent;
  let fixture: ComponentFixture<TraduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraduceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
