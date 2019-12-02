import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FioListComponent} from './fio-list/fio-list.component';
import {EventFormComponent} from './event-form/event-form.component';


const routes: Routes = [
  {
    path: 'user/:id',
    component: FioListComponent,
    children: [
      {
        path: 'comment/:id',
        component: EventFormComponent,
        data: {someVal: 'dfsdfdfsdf'}
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
