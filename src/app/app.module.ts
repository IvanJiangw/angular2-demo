import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HeroComponent} from "./hero.component";
import {HeroDetail} from "./hero-detail.component";
import {HeroService} from "./hero-service";

const routers: Routes = [
    {
        path: 'heros',
        component: HeroComponent
    },
    {
        path: 'hero-detail/:id',
        component: HeroDetail
    }
];

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routers)
    ],
    declarations: [ AppComponent, HeroComponent, HeroDetail ],
    providers: [ HeroService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }