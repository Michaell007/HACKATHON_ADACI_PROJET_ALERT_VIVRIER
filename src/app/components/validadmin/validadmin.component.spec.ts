import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadminComponent } from './validadmin.component';

describe('ValidadminComponent', () => {
  let component: ValidadminComponent;
  let fixture: ComponentFixture<ValidadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
