# README

---

To create a new employee record use:

    curl -X POST http://localhost:3000/api/employees \
    -H "Content-Type: application/json" \
    -d '{"firstName": "John", "lastName": "Doe"}'
    
To get a list of all employees use:

    curl -X GET http://localhost:3080/api/employees

To format the output nicer you can pipe these commands to `jq`
