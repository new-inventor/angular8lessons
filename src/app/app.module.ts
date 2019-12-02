import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FioListComponent } from './fio-list/fio-list.component';
import { FirstLettersPipe } from './shared/first-letters.pipe';
import { DottedPipePipe } from './shared/dotted-pipe.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ForbiddenValidatorDirective} from './shared/forbidden-validator.directive';
import { EventFormComponent } from './event-form/event-form.component';
import { EventFormTemplateComponent } from './event-form-template/event-form-template.component';

@NgModule({
  declarations: [
    AppComponent,
    FioListComponent,
    FirstLettersPipe,
    DottedPipePipe,
    ForbiddenValidatorDirective,
    EventFormComponent,
    EventFormTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
