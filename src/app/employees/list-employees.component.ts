import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee-models';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  employees:Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreferance: 'Email',
      email: 'mark@tech.com',
      dateOfBirth: new Date('11/01/2000'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreferance: 'Phone',
      phoneNumber: 56789995,
      dateOfBirth: new Date('05/27/2000'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreferance: 'Phone',
      phoneNumber: 54586665,
      dateOfBirth: new Date('04/20/1999'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/john.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
