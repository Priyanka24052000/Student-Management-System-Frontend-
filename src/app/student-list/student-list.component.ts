import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{


    students:Student[]=[];

  constructor(private studentService:StudentService,
    private router:Router){ 
    // this.students=[];
  }
  ngOnInit(): void {
    
    this.getStudents();
}

private getStudents(){
  this.studentService.getStudentList().subscribe(data => {
    this.students=data;
  });
} 
  studentDetails(id: any){
    this.router.navigate(['student-details',id]);
  }

updateStudent(id:any){
this.router.navigate(['update-student',id]);
}
removeStudent(id:any){
  this.studentService.removeStudent(id).subscribe( data => {
    console.log(data);
    this.ngOnInit();
  })
  
  
}
}


