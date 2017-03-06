import { Component, Input } from '@angular/core';
import {LZW} from './lzw';

@Component({
  moduleId: module.id,
  selector: 'output',
  templateUrl: `./output.component.html`,
  styleUrls: ['./inputMessage.component.css']

})
export class OutputComponent  {
  @Input()outputCode:Object;

 }
