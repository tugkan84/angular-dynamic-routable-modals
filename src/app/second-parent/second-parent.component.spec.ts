import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondParentComponent } from './second-parent.component';

describe('SecondParentComponent', () => {
  let component: SecondParentComponent;
  let fixture: ComponentFixture<SecondParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
