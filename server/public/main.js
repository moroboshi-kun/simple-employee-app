document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employee-form');
    const employeeTableBody = document.getElementById('employee-table')?.querySelector('tbody');

    // Fetch and display all employees
    const fetchEmployees = async () => {
        try {
            const response = await fetch('/api/employees');
            const employees = await response.json();

            if (employeeTableBody) {
                employeeTableBody.innerHTML = ''; // Clear existing table data

                employees.forEach(employee => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${employee.firstName}</td>
                        <td>${employee.lastName}</td>
                        <td>${employee.employeeId}</td>
                    `;
                    employeeTableBody.appendChild(row);
                });
            }
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    // Handle form submission to create a new employee
    if (employeeForm) {
        employeeForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const formData = new FormData(employeeForm);
            const data = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
            };

            try {
                const response = await fetch('/api/employees', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    alert('Employee created successfully');
                    window.location.href = 'index.html'; // Redirect to employee list
                } else {
                    alert('Failed to create employee');
                }
            } catch (error) {
                console.error('Error creating employee:', error);
            }
        });
    }

    // Fetch employees when the page loads
    if (employeeTableBody) {
        fetchEmployees();
    }
});

