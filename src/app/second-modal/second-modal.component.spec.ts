import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondModalComponent } from './second-modal.component';

describe('SecondModalComponent', () => {
  let component: SecondModalComponent;
  let fixture: ComponentFixture<SecondModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
