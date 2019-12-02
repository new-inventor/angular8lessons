import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetters'
})
export class FirstLettersPipe implements PipeTransform {

  transform(value: string, count: number = 1): any {
    return value.substr(0, count);
  }

}
