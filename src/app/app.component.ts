import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseName: string;
  mycourse: string;
  mycourses: string[];

  constructor(){
    this.courseName = "";
    this.mycourse = "";
    this.mycourses = ['Java','Angular','ReactJS','MongoDB','NodeJS'];
  }

}
