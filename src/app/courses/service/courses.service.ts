import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {


  private readonly API = '/assets/courses.json';

  // fazendo a injeção de dependencia
  constructor(private httpClient: HttpClient) { }

  findAll() {
    //Observable que retorna uma lista de cursos
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      tap(courses => console.log(courses))
    );
  }
}
