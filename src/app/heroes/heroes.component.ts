import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes : Hero[];
    selectedHero: Hero;
    
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
    constructor(private heroService: HeroService) {
        this.heroService = heroService;
    }
    
    //A la selection d'un hero
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    
    //A l'initialisation de la classe
    ngOnInit() {
        this.getHeroes();
    }
    
    //Recuperation des heros à 
    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

}
