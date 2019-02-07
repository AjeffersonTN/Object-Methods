const outputElement = document.querySelector("#keys")
//Object.values Lightning Exercise
let dateVisited = ""
let owed = ""
let patient = ""

const doctorVisit = [
{
    officeName: "Mustang Sally",
    streetAddress: "123 McDonalds Way",
    doctorName: "Doctor McNugget Sauce",
    patientName: "Antonio Jefferson",
    visitDate: "May 1, 2017",
    amountBilled: 407,
    dueDate:"May 10, 2017"
},
{
    officeName: "Sally",
    streetAddress: "123 Your Way",
    doctorName: "Doctor Delicious",
    patientName: "Bob Jefferson",
    visitDate: "June 1, 2017",
    amountBilled: 507,
    dueDate:"June 10, 2017"
}
]

// Iterate the array of objects. Individual objects stored in `visit`.
doctorVisit.forEach(visit => {
    dateVisited = visit["visitDate"]
    owed = visit["amountBilled"]
    patient = visit["patientName"]

    console.log(dateVisited, owed, patient)
    // Iterate all of the values of the current visit
    for (const value of Object.values(visit)) {
        console.log(value)
    }
})
//object.keys exercise
//reference to first object
const allKeys = doctorVisit[0]

// Now iterate its keys using index 0 since all keys are the same
for (const key of Object.keys(doctorVisit[0])) {
    console.log(key)
    outputElement.innerHTML += `<span><br>${key}</span>`
}