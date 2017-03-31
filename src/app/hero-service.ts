/**
 * Created by jiangw on 2017/2/16.
 */

import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heros";

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroDetail(id: any): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}