import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES }     from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
    public get messageService(): MessageService {
        return this._messageService;
    }
    public set messageService(value: MessageService) {
        this._messageService = value;
    }
    constructor(private _messageService: MessageService) { }
    getHeroes(): Observable<Hero[]> {
        // TODO: send the message _after_ fetching the heroes
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }
}
