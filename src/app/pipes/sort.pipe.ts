import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort', pure: false })
export class SortPipe implements PipeTransform {

  transform(value: any, prop: string): any {
    return value.sort((a: any, b: any) => a[prop] > b[prop] ? 1 : -1);
  }
}
