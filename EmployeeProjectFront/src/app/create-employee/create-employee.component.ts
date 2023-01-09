import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee=new Employee();
  constructor(private employeeservice: EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeservice.createEmployee(this.employee).subscribe(employee => {
      console.log(employee);
      this.goToEmployeeList();
    },
    
    error => {
      console.log(error);
    });
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

}
