package com.example.employeeprojectback.contorller;

import com.example.employeeprojectback.exception.ResourceNotFoundException;
import com.example.employeeprojectback.model.Emloyee;
import com.example.employeeprojectback.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v2")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employee")
    public List<Emloyee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    @PostMapping ("/employee")
    public Emloyee createEmployees(@RequestBody Emloyee emloyee){
        return employeeRepository.save(emloyee);
    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<Emloyee> getEmployee(@PathVariable Long id){
        Emloyee employee =employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("there no employee with id "+ id));
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employee/{id}")
    public ResponseEntity<Emloyee> updateEmployee(@PathVariable long id, @RequestBody Emloyee emp){
        Emloyee employee =employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("there no employee with id "+ id));
        employee.setFirstName(emp.getFirstName());
        employee.setLastName(emp.getLastName());
        employee.setEmailId(emp.getEmailId());

        Emloyee empDetails= employeeRepository.save(employee);
        return ResponseEntity.ok(empDetails);
    }

    @DeleteMapping("/employee/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable long id){
        Emloyee employee =employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("there no employee with id "+ id));
        employeeRepository.delete(employee);
        Map<String, Boolean> response= new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
