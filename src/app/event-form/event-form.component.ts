import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  public form: FormGroup;
  public formValue: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.route);
  }

  ngOnInit() {
    this.form = new FormGroup({
        login: new FormControl('', [Validators.required]),
        pass: new FormControl('Моё весёлое событие'),
      }
    );
    this.formValue = {
      dirty: this.form.dirty,
      pristine: this.form.pristine,
      touched: this.form.touched,
      untouched: this.form.untouched,
      valid: this.form.valid,
      invalid: this.form.invalid,
      errors: {
        name: this.form.get('name').errors,
        date: this.form.get('date').errors,
      },
    };
    this.form.valueChanges.subscribe(() => {
      this.formValue = {
        dirty: this.form.dirty,
        pristine: this.form.pristine,
        touched: this.form.touched,
        untouched: this.form.untouched,
        valid: this.form.valid,
        invalid: this.form.invalid,
        errors: {
          name: this.form.get('name').errors,
          date: this.form.get('date').errors,
        },
      };
    });
  }

  action() {
    this.router.navigateByUrl('/user/87654');
    this.form.disable();
  }

  action2() {
    this.form.enable();
  }
}
