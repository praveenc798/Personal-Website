import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperPageComponent } from './exper-page.component';

describe('ExperPageComponent', () => {
  let component: ExperPageComponent;
  let fixture: ComponentFixture<ExperPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
