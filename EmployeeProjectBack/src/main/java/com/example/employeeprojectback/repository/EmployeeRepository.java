package com.example.employeeprojectback.repository;

import com.example.employeeprojectback.model.Emloyee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Emloyee, Long> {
}
