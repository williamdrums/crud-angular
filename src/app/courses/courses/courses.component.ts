import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../service/courses.service';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

courses$: Observable<Course[]>;
displayedColumns = ['name','category']

// coursesService: CoursesService;

  constructor(private coursesService: CoursesService,
    public dialog: MatDialog
  ){
    // this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.findAll()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.')
        return of([])
      })
    )
  }

  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }


  ngOnInit(): void {

  }
}
