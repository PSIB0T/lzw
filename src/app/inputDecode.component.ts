import { Component } from '@angular/core';
import {LZW} from './lzw';

@Component({
  moduleId: module.id,
  selector: 'outputmessage',
  template: `  <div class="formContainer">
                <md-input-container>
                  <input mdInput [(ngModel)]="inputString" placeholder="Encoded message">
                </md-input-container>
                <md-input-container>
                  <input mdInput [(ngModel)]="characters" placeholder="characters">
                </md-input-container>
                <button md-button type="button" (click)="getOutput()">Get Table</button>
              </div>
              <div *ngIf="codeInputted">
                <output [outputCode]="outputCode"></output>
              </div>
              `,
  styleUrls: ['./inputMessage.component.css']

})
export class InputDecode{
  inputString:string;
  characters:string;
  codeInputted:boolean = false;
  outputCode:Object;
  getOutput(){
      this.outputCode = new LZW("gg").decodeOutput(this.inputString, this.characters);
      this.codeInputted = true;
      for(var i = 0; i < this.outputCode['objectKeys'].length; i++){
        this.outputCode['objectKeys'][i] = this.outputCode['objectKeys'][i].split(":");
      }
    }
}
