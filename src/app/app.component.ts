import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit {
  title = 'angularLessons8';
  myMiddleName = {middleName: 'Петрович'};

  ngOnInit(): void {
    console.log('init');
    setTimeout(() => {
      this.myMiddleName.middleName = 'Иванович';
    }, 5000);
  }

  ngAfterContentInit(): void {
    console.log('content init');
  }

  ngAfterViewInit(): void {
    console.log('view init');
  }
}
