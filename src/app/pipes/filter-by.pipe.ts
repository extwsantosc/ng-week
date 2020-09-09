import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../model/character.model';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(characters: Array<Character>, key: string, filterBy: string): Array<Character> {
    if (!characters) {
      return [];
    }
    try {
      return characters.filter(character => character[key]?.toLowerCase() === filterBy?.toLowerCase());

    } catch (error) {
      throw Error(`InvalidPipeArgument: '${error?.message}' for pipe '${stringify(FilterByPipe)}'`);
    }
  }

}
