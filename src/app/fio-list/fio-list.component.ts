import {Component, OnDestroy, OnInit} from '@angular/core';
import {FioService} from '../shared/fio.service';
import {Fio} from '../shared/Fio';

@Component({
  selector: 'app-fio-list',
  templateUrl: './fio-list.component.html',
  styleUrls: ['./fio-list.component.scss'],
})
export class FioListComponent implements OnInit, OnDestroy {
  public testValue = '';

  constructor(private fioService: FioService) {
  }

  ngOnInit() {
  }

  addUser() {
    this.fioService.addUser(
      new Fio('asdasd', 'asdsad', 'aasdsd')
    );
  }

  ngOnDestroy(): void {
  }

  onClick() {
    this.testValue = '' + Math.random();
  }
}
