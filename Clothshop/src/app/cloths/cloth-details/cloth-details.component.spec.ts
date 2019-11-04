import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothDetailsComponent } from './cloth-details.component';

describe('ClothDetailsComponent', () => {
  let component: ClothDetailsComponent;
  let fixture: ComponentFixture<ClothDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
