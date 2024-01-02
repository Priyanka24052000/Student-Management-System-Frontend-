import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL="http://localhost:8000/stu/all";
  constructor(private httpClient: HttpClient) { }
  getStudentList():Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }
  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post("http://localhost:8000/stu/addstu", student);
  }
  getStuById(id:number):Observable<Student>{
    return this.httpClient.get<any>("http://localhost:8000/stu/findstu/" + id);
  }
  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put("http://localhost:8000/stu/updatestu/" +id, student);
  }
  removeStudent(id: number): Observable<Object>{
    return this.httpClient.delete("http://localhost:8000/stu/removestu/" +id);
  }
}
