import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyLessonsPage } from './buy-lessons.page';

describe('BuyLessonsPage', () => {
  let component: BuyLessonsPage;
  let fixture: ComponentFixture<BuyLessonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyLessonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyLessonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
