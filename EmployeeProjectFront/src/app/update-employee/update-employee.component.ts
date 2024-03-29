import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number
  employee: Employee=new Employee();
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.employeeService.getEmpoyeeById(this.id).subscribe(data => {this.employee =data}, err =>console.log(err));
  }

  onSubmit() {
    console.log(this.employee);
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {this.goToEmployeeList()}, err => {console.log(err);});
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
