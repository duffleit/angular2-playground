import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First {{test}} Angular 2 App</h1>'
})
export class AppComponent {
    test = "testbinding"
}