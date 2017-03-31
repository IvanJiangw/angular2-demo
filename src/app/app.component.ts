import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/heros" routerLinkActive="active">Heros</a>
        </nav>
        <router-outlet></router-outlet>
`,
    styleUrls: ['./src/app/app.component.css']
})
export class AppComponent{
    title: string;
    constructor() {
        this.title = 'Hello Heros';
    }
}