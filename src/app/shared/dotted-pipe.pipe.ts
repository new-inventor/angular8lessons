import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dottedPipe'
})
export class DottedPipePipe implements PipeTransform {

  transform(value: any): any {
    return value + '.';
  }

}
