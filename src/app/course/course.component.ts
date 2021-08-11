import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course=[
    {'id':1,'name':'Learn Angular','description':'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. ','image':'../../assets/Angular.png'},
    {'id':2,'name':'Learn Typescript','description':'TypeScript is a programming language developed and maintained by Microsoft.','image':'../../assets/TypeScript.jpeg'},
    {'id':3,'name':'Learn Node.js','description':'Node is an open source development platform for executing JavaScript code server-side','image':'../../assets/nodejs.png'},
    {'id':4,'name':'Learn React.js','description':'React is a free and open-source front-end JavaScript library for building user interfaces or UI components.','image':'../../assets/reactjs.png'}
  ]

}
