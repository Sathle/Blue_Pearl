import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimsumComponent } from './dimsum-component';

describe('DimsumComponent', () => {
  let component: DimsumComponent;
  let fixture: ComponentFixture<DimsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DimsumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
