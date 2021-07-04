import { Component, OnInit } from '@angular/core';
import { Course } from './curso.model';
import { CourseService } from './curso.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'angular-project';
  displayedColumns = ["id", "name", "icon"];
  displayedColumnsPersonas = ["id", "name", "icon","email","telefono"];

  cursos : Course [];
  personas : Persona[];

  constructor(public courseService: CourseService){}

  ngOnInit(){
    this.courseService.getCourses().subscribe(data => {
        this.cursos = data;
      });
    this.courseService.getPersonas().subscribe(data => {
      this.personas = data;
      console.log(this.personas);
    });
  }


}
