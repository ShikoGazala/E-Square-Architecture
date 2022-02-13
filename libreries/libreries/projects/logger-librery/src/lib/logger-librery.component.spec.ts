import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerLibreryComponent } from './logger-librery.component';

describe('LoggerLibreryComponent', () => {
  let component: LoggerLibreryComponent;
  let fixture: ComponentFixture<LoggerLibreryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggerLibreryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggerLibreryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
