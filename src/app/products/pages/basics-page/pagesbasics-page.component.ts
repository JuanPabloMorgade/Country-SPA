import { Component } from '@angular/core';

@Component({
  selector: 'app-pagesbasics-page',
  templateUrl: './pagesbasics-page.component.html',
  styleUrls: ['./pagesbasics-page.component.css']
})
export class PagesbasicsPageComponent {

  public nameLower: string = 'Juan Pablo'
  public nameUpper: string = 'JUAN PABLO'
  public fullName: string = 'jUaN PaBlO'
}
