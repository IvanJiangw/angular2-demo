import {
    Component, OnInit
} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero-service";
import {Router} from "@angular/router";

@Component({
    selector: 'hero-component',
    template: `
        <ul class="heroes">
            <li *ngFor="let item of heroList" (click)="loadDetail(item.id)">
                <span class="badge">{{item.id}}</span>
                <span>{{item.name}}</span>
            </li>
        </ul>
`,
    styleUrls: ['./src/app/hero.component.css']
})
export class HeroComponent implements OnInit{
    heroList: Hero[];
    constructor(private router: Router, private heroService: HeroService) {

    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroList = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    loadDetail(id: any): void {
        this.router.navigate(['/hero-detail', id]);
    }
}