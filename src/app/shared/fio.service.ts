import { Injectable } from '@angular/core';
import {Fio} from './Fio';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FioService {
  public listIn: BehaviorSubject<Fio[]> = new BehaviorSubject<Fio[]>([]);

  constructor() {
    this.listIn.next([
      new Fio('Иван', 'Иванович', 'Иванов'),
      new Fio('Петр', 'Петрович', 'Петров'),
      new Fio('Сергей', 'Иванович', 'Сергеев'),
    ]);
  }

  get list(): Fio[] {
    return this.listIn.getValue();
  }

  public addUser(user: Fio) {
    const res = this.listIn.getValue();
    res.push(user);
    this.listIn.next(res);
  }
}
