import { Component } from 'angular2/core'
import { CoursesComponent } from './courses.component'
import { AuthorsComponent } from './authors.component'

@Component({
    selector: 'my-app',
    templateUrl: './app/components/templates/app.component.html',
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {

}