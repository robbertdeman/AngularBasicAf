import {Component} from 'angular2/core';
import {CourseComponent} from "./courses.component";
import {AuthorComponent} from "./authors.component";

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App Yeah bla</h1>' +
    '   <courses></courses>' +
    '   <authors></authors>',
    directives: [CourseComponent, AuthorComponent]
})
export class AppComponent { }