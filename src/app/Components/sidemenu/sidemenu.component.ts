import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  userName:string="Daniel Quiroga";
  theme:string="";
  withMenu:number=25;
  visibleMenu:boolean=false;

  setVisibilitiMenu():boolean{
    this.visibleMenu=!this.visibleMenu;
    return this.visibleMenu;
  }

  setThemeColor(color:string):string{
    return this.theme=color;
  }

  setSizeMenu(){
    this.withMenu+=10;
    if(this.withMenu>100){
      this.withMenu = 25;
    }
  }

}
