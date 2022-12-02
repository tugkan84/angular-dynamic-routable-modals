import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstParentComponent } from './first-parent.component';

describe('FirstParentComponent', () => {
  let component: FirstParentComponent;
  let fixture: ComponentFixture<FirstParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
