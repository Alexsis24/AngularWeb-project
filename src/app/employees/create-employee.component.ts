import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { Employee } from '../models/employee-models';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  email: string;
  fullName: string;
  
  constructor() {

   }

  ngOnInit(): void {
    
  }

  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm);
  }
}
