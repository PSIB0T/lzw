import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<md-toolbar>
    <span>LZW compression</span>
    <span class="example-fill-remaining-space"></span>
    <span><a routerLink="/encode" routerLinkActive="active">Encode</a></span>
    <span><a routerLink="/decode">Decode</a></span>
  </md-toolbar>
  <router-outlet></router-outlet>`,
  styles: [`
    md-toolbar{
      background: #050c6d;
      color: white;
    }
    .example-fill-remaining-space{
      flex: 1 1 auto;
    }
    span{
      margin-left: 5px;
      margin-right: 5px;
    }
    span a{
      text-decoration: none;
      color: white;
    }

    `]
})
export class AppComponent  { name = 'Angular'; }
