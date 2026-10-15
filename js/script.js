window.addEventListener('load', () => {
    const $ = (id) => document.getElementById(id)
    const empForm      = $('empForm')
    const id           = $('id')
    const empName      = $('name')
    const ext          = $('ext')
    const email        = $('email')
    const department   = $('department')

empForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const employeeId = id.value
    const employeeName = empName.value
    const employeeExtension = ext.value
    const employeeEmail = email.value
    const employeeDepartment = department.value
    console.log(`
    ID: ${employeeId}
    Name: ${employeeName}
    Extension: ${employeeExtension}
    Email: ${employeeEmail}
    Department: ${employeeDepartment}`)

   })
})