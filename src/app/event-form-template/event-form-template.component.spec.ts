import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFormTemplateComponent } from './event-form-template.component';

describe('EventFormTemplateComponent', () => {
  let component: EventFormTemplateComponent;
  let fixture: ComponentFixture<EventFormTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFormTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
