import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginComponent } from '../../loggin/loggin.component';

describe('BloodBankComponent', () => {
  let component: LogginComponent;
  let fixture: ComponentFixture<LogginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
