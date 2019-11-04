import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothUpdateComponent } from './cloth-update.component';

describe('ClothUpdateComponent', () => {
  let component: ClothUpdateComponent;
  let fixture: ComponentFixture<ClothUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
