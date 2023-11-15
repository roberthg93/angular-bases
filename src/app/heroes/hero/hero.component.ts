import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  // Els getters els podem cridar com si fossin propietats o variables
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  // Els mètodes també llueixen com si fossin propietats
  public getHeroDescription():string {
    return `${ this.name } - ${ this.age}`;

  }

  changeHero():void{
    this.name = 'spiderman';

  }

  changeAge():void {
    this.age = 33;

  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;

    //document.querySelectorAll('h1')!.forEach( element => {
    //  element.innerHTML = '<h1>Desde Angular</h1>';
    //});

  }

}
