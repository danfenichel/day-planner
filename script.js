// DOM elements
var currentDayEl = $("#currentDay");
var saveBtnEl = $(".saveBtn");
var textBoxEl = $(".time-block");

var desc1El = $("#desc1");

// Setting current day with moment.js
currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var update = function () {
    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    var currHour = moment().hour();
    // var currHour = 12; - to test if the color changes are working

    // grabbing elements with data-time attribute to change class based on hour comparison to current hour
    textBoxEl.each(function (index, element) {
        element = $(element);
        if (currHour > element.attr("data-time")) {
            element.addClass("past").removeClass("future");
        } else if (currHour == element.attr("data-time")) {
            element.addClass("present").removeClass("future");
        }
    });
}
// setting time interval to update every second
setInterval(update, 1000);

// function to retrieve stored user data
renderUserInput();

function renderUserInput() {
    var userDesc1 = localStorage.getItem("desc1");
    $("#desc1").val(JSON.parse(userDesc1));
    console.log(userDesc1);

    if(userDesc1 === null){
        return;
    }

    desc1El.textContent = userDesc1;
}

// event listener to store user input upon click of Save button
saveBtnEl.on("click", function (event) {
    event.preventDefault();
    var input = $("#desc1").val();
    localStorage.setItem("desc1", JSON.stringify(input));

    renderUserInput();
});
