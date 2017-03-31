/**
 * Created by jiangw on 2017/2/28.
 */

import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {ActivatedRoute, Params} from "@angular/router";
import { Location } from '@angular/common';
import {HeroService} from "./hero-service";

@Component({
    selector: 'hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div>
                <label>id: </label>{{hero.id}}</div>
                <div>
                    <label>name: </label>
                    <input [(ngModel)]="hero.name" placeholder="name" />
                </div>
            <button (click)="goBack()">Back</button>
        </div>
`,
    styleUrls: ['./src/app/hero-detail.component.css']
})
export class HeroDetail implements OnInit{
    hero: Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {

    }

    loadDetail(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHeroDetail(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    ngOnInit(): void {
        this.loadDetail();
    }

    goBack(): void {
        this.location.back();
    }
}