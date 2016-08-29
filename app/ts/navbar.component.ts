import {Component} from 'angular2/core';

@Component({
    selector: 'navbar',
    templateUrl: 'app/ts/navbar.component.html',
    inputs: ['nodes', 'master']
})

export class NavbarComponent {}
