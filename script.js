// const outputElement = document.querySelector("#app")
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