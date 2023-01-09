import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeservice: EmployeeService, private router:Router) { }

  employees: Employee[];

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeservice.getEmployeesList().subscribe(data =>
      this.employees = data);
      this.router.navigate(['/employees']);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id: number){
    this.employeeservice.deleteEmployee(id).subscribe(data =>{
      this.getEmployees;
    });
    this.getEmployees;
  }

  detailEmployee(id:number){
    this.router.navigate(['details-employee',id]);
  }

}
