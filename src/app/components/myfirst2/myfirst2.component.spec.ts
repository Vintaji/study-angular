import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myfirst2Component } from './myfirst2.component';

describe('Myfirst2Component', () => {
  let component: Myfirst2Component;
  let fixture: ComponentFixture<Myfirst2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myfirst2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myfirst2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
