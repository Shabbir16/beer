import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCompComponent } from './beer-comp.component';

describe('BeerCompComponent', () => {
  let component: BeerCompComponent;
  let fixture: ComponentFixture<BeerCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
