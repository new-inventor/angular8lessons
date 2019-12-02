import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FioListComponent } from './fio-list.component';

describe('FioListComponent', () => {
  let component: FioListComponent;
  let fixture: ComponentFixture<FioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
