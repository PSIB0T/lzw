import { Component } from '@angular/core';
import {LZW} from './lzw';

@Component({
  moduleId: module.id,
  selector: 'inputmessage',
  template: `  <div class="formContainer">
                <md-input-container>
                  <input mdInput [(ngModel)]="code" placeholder="Code">
                </md-input-container>

                <button md-button type="button" (click)="getOutput()">Get Table</button>
              </div>

              <div *ngIf="codeInputted">
                <output [outputCode]="outputCode"></output>
              </div>

              `,
  styleUrls: ['./inputMessage.component.css']

})
export class InputMessageComponent  {
  code:string;
  codeInputted:boolean = false;
  output:LZW;
  outputCode:Object;
  getOutput(){
    console.log(this.code);
    this.output = new LZW(this.code);
    this.codeInputted = true;
    this.outputCode = this.output.getOutput();
    for(var i = 0; i < this.outputCode['objectKeys'].length; i++){
      this.outputCode['objectKeys'][i] = this.outputCode['objectKeys'][i].split(":");
    }

    console.log(this.outputCode);
  }

 }
