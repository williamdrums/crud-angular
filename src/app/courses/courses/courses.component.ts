import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

courses: Observable<Course[]>;
displayedColumns = ['name','category']

// coursesService: CoursesService;

  constructor(private coursesService: CoursesService){
    // this.coursesService = new CoursesService();
    this.courses = this.coursesService.findAll();
  }


  ngOnInit(): void {

  }
}
