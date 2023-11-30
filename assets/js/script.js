
// *API testing for UK bank holiday API and excuser API* //

var category = "office" // test category - can be replaced with user input (e.g. var selectedCategory = categoryInput.value)
var numOfExcuses = 5 // test number of excuses generated


var holidaysURL = "https://www.gov.uk/bank-holidays.json"
var excuserURL = "https://excuser-three.vercel.app/v1/excuse/" + category + "/" + numOfExcuses;

// To test excuser URL: // 
// var excuserURL = "https://excuser-three.vercel.app/v1/excuse/college/100" 

// *Test fetch for holiday API: //
var testDates = ["2023-12-25", "2023-12-26", "2023-12-27", "2023-12-28", "2023-12-29", "2023-12-30", "2024-01-01"];
fetch(holidaysURL)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        console.log(data["england-and-wales"]);
        for (let j = 0; j < testDates.length; j++) {  // loops through a 7-day array to check for any holidays
            var isHoliday = false; // tracks whether the date is a holiday or not
            for (let i = 0; i < data["england-and-wales"].events.length; i++) {  // loops through the holidayAPI data to check for a date match
                if (testDates[j] == data["england-and-wales"].events[i].date) {  // Check for a date match
                    console.log(testDates[j] + " is " + data["england-and-wales"].events[i].title); // logs the holiday to console if there is a match
                    isHoliday = true;  // update that the date is a holiday
                };
            };
            if (isHoliday == false) {  // logs to console that date is not a holiday
                console.log(testDates[j] + " is not a holiday");
            };
        };
    });

// *Test fetch for excuser API: //
fetch(excuserURL)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {  // loops through numOfExcuses (5 for testing) excuses
            console.log(data[i].excuse); // writes to console the generated excuses
        };
    });

