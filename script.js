// DOM elements
var currentDayEl = $("#currentDay");
var saveBtnEl = $(".saveBtn");
var textBoxEl = $(".time-block");

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

saveBtnEl.on("click", function (event) {
    // alert("Button Clicked!");
    event.preventDefault();
    var input = $(this).val();
    console.log(input);
    localStorage.setItem("input", JSON.stringify(input));
});