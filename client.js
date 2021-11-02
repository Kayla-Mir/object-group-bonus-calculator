const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  },
  {
    name: 'Warren',
    employeeNumber: '890',
    annualSalary: '500',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

$(document).ready(readyNow) 

function readyNow() {
  $('#runButton').on('click', displayObjects)
}

let newEmployeeArray = [];

function createSalary(employee) {
  let employeeSalary = {
    name: '',
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  }

  employeeSalary.name = employee.name;
  console.log(`Set salary name to employee name: ${employee.name}`);

  // Employee has 4 or more digits
  if (employee.employeeNumber.length >= 4) {
    employeeSalary.bonusPercentage += 0.05;
    console.log(`Employee has been here a long time! Add 5%. New bonus percentage: ${employeeSalary.bonusPercentage}`);
  }
  // Employee gets paid a lot
  if (Number(employee.annualSalary) > 65000) {
    employeeSalary.bonusPercentage -= 0.01;
    console.log(`Whoops already gets paid too much! Subtract 1%. New bonus percentage: ${employeeSalary.bonusPercentage}`);
  }
  // Employee ratings
  if (employee.reviewRating === 3) {
    employeeSalary.bonusPercentage += 0.04;
    console.log(`Employee is adequate. Add 4%. New bonus percentage: ${employeeSalary.bonusPercentage}`);
  } 
  else if (employee.reviewRating === 4) {
    employeeSalary.bonusPercentage += 0.06;
    console.log(`Employee is satisfactory. Add 6%. New bonus percentage: ${employeeSalary.bonusPercentage}`);
  }
  else if (employee.reviewRating === 5) {
    employeeSalary.bonusPercentage += 0.1;
    console.log(`Rockstar employee! Add 10%. New bonus percentage: ${employeeSalary.bonusPercentage}`);
  }

  // Housecleaning
  if (employeeSalary.bonusPercentage > 0.13) {
    employeeSalary.bonusPercentage = 0.13;
    console.log(`We don't want to pay people this much! Normalize to 13%. New bonus percentage: ${employeeSalary.bonusPercentage}`);
  }
  else if (employeeSalary.bonusPercentage <= 0) {
    employeeSalary.bonusPercentage = 0
    console.log(`Bonus percentage was 0 or negative. No bonus for substandard employee. New bonus percentage: ${employeeSalary.bonusPercentage}`);
  }

  employeeSalary.totalCompensation = Number(employee.annualSalary) + employee.annualSalary * employeeSalary.bonusPercentage;
  console.log(`Employee total compensation: $${employeeSalary.totalCompensation}`);
  employeeSalary.totalBonus = Number(employee.annualSalary) * employeeSalary.bonusPercentage;
  console.log(`Employee total bonus: $${employeeSalary.totalBonus}`);

  newEmployeeArray.push(employeeSalary);
  
  return employeeSalary;

}

console.log(createSalary(employees[0]));
console.log(createSalary(employees[1]));
console.log(createSalary(employees[2]));
console.log(createSalary(employees[3]));
console.log(createSalary(employees[4]));
console.log(createSalary(employees[5]));

function displayObjects () {
  let el = $('#employeeSalaries');
  el.empty();
  for (newEmployee of newEmployeeArray) {
    el.append(`
      <li>Name: ${newEmployee.name}
      <ul>
        <li>
        Bonus Percent: ${newEmployee.bonusPercentage * 100}%
        </li>
        <li>
        Total Compensation: $${newEmployee.totalCompensation} 
        </li>
        <li>
        Total Bonus: $${newEmployee.totalBonus}
        </li>
      </ul>
      </li>
    `);
  }
}


// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.