/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(arr) {
    const [firstName, familyName, title, payPerHour] = [...arr]
    const record = {firstName,familyName,title,payPerHour, timeInEvents : [], timeOutEvents : []}
    return record
}

function createEmployeeRecords(arrays) {
    return arrays.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(time) {
    const [date, hour] = time.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(hour,10)
    })
    return this
}

function createTimeOutEvent(time) {
    const [date, hour] = time.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        date: date,
        hour: parseInt(hour,10)
    })
    return this
}

function hoursWorkedOnDate(date) {
    const punchIn = this.timeInEvents.find(evnt => evnt.date === date)
    const punchOut = this.timeOutEvents.find(evnt => evnt.date === date)
    return (punchOut.hour - punchIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this,date)
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function payrollExpense(records) {
    return records.reduce(function(total, record){
        return total + allWagesFor.call(record)
    },0)
}

function findEmployeeByFirstName(records, name) {
    return records.find(record => record.firstName === name)
}

function calculatePayroll(records) {
    return payrollExpense(records)
}