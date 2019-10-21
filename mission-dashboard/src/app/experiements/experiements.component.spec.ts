import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiementsComponent } from './experiements.component';

describe('ExperiementsComponent', () => {
  let component: ExperiementsComponent;
  let fixture: ComponentFixture<ExperiementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
