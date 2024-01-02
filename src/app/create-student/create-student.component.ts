import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';
import {StudentService } from '../student.service';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent  {

  student : Student= new Student();
  constructor(private studentService:StudentService,
    private router:Router) { }

  ngOnInit(): void {
  }
  saveStudent(){
    this.studentService.createStudent(this.student).subscribe (data =>{
      console.log(data);
      this.goToStudentList();
    },
    error => console.log(error));
}
goToStudentList(){
  this.router.navigate(['/students']);
}
  onSubmit(){
    console.log(this.student);
    this.saveStudent();
  }
}