import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-form-template',
  templateUrl: './event-form-template.component.html',
  styleUrls: ['./event-form-template.component.scss']
})
export class EventFormTemplateComponent implements OnInit {

  public event: any = {
    name: '',
    description: 'Моё событие',
    date: '',
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.event = 'djfhksdjf';
    }, 3000);
  }

}
