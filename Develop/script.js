// Declare var here
var currentDateTimePEl = $('#currentDay');
var timeBlockContainer = $('.container');

// Declare var for each time slot in time block to work with moment.js
var hour09 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);
var hour17 = moment().hour(17);
var hour18 = moment().hour(18);
var hour19 = moment().hour(19);

// Declare array to generate row and column for each time slot
var hoursArr = [hour09, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18]

// Take from localStorage stored tasks
var tasksHour09 = JSON.parse(localStorage.getItem('hour09')) || '';
var tasksHour10 = JSON.parse(localStorage.getItem('hour10')) || '';
var tasksHour11 = JSON.parse(localStorage.getItem('hour11')) || '';
var tasksHour12 = JSON.parse(localStorage.getItem('hour12')) || '';
var tasksHour13 = JSON.parse(localStorage.getItem('hour13')) || '';
var tasksHour14 = JSON.parse(localStorage.getItem('hour14')) || '';
var tasksHour15 = JSON.parse(localStorage.getItem('hour15')) || '';
var tasksHour16 = JSON.parse(localStorage.getItem('hour16')) || '';
var tasksHour17 = JSON.parse(localStorage.getItem('hour17')) || '';
var tasksHour18 = JSON.parse(localStorage.getItem('hour17')) || '';

// Format Date and time to display the day and date
currentDateTimePEl.text(moment().format('dddd, MMMM Do YYYY'));

// Generate rows by looping through hours array
$.each(hoursArr, function (index, value) {
    tasksArr = [tasksHour09, tasksHour10, tasksHour11, tasksHour12, tasksHour13, tasksHour14, tasksHour15, tasksHour16, tasksHour17, tasksHour18]
    $(".container").append(
        "<div class='row'><div class='col-2 hour text-center' id='hour'" +
        (index++) + "'><span>" + value.format("h A") + "</span></div><div class='col-8' id='timeblock" +
        (index++) + "'><textarea class='col-12' id='taskNm" + (index++) + "'>" + tasksArr[index] + "</textarea></div>" +
        "<div class='col-2 saveBtn text-center' id='saveBtn'" + (index++) + "'><i class='fas fa-save' title='Save Task'></i> <i class='fas fa-trash' title='Remove Task'></i></div></div></div>");
});

var checkPastPresentFuture = function () {
    currentTime = moment().format("hh:mm:ss");

    // For each time block, check time then colorize or change class .past, .present, .future
    if (moment().isBetween(hour09, hour10)) {
        $("#timeblock1").addClass("present");
    }
    else if (moment().isAfter(hour10)) {
        $("#timeblock1").addClass("past");
    }
    else {
        $("#timeblock1").addClass("future");
    };

    if (moment().isBetween(hour10, hour11)) {
        $("#timeblock2").addClass("present");
    }
    else if (moment().isAfter(hour11)) {
        $("#timeblock2").addClass("past");
    }
    else {
        $("#timeblock2").addClass("future");
    };

    if (moment().isBetween(hour11, hour12)) {
        $("#timeblock3").addClass("present");
    }
    else if (moment().isAfter(hour12)) {
        $("#timeblock3").addClass("past");
    }
    else {
        $("#timeblock3").addClass("future");
    };

    if (moment().isBetween(hour12, hour13)) {
        $("#timeblock4").addClass("present");
    }
    else if (moment().isAfter(hour13)) {
        $("#timeblock4").addClass("past");
    }
    else {
        $("#timeblock4").addClass("future");
    };

    if (moment().isBetween(hour13, hour14)) {
        $("#timeblock5").addClass("present");
    }
    else if (moment().isAfter(hour14)) {
        $("#timeblock5").addClass("past");
    }
    else {
        $("#timeblock5").addClass("future");
    };

    if (moment().isBetween(hour14, hour15)) {
        $("#timeblock6").addClass("present");
    }
    else if (moment().isAfter(hour15)) {
        $("#timeblock6").addClass("past");
    }
    else {
        $("#timeblock6").addClass("future");
    };

    if (moment().isBetween(hour15, hour16)) {
        $("#timeblock7").addClass("present");
    }
    else if (moment().isAfter(hour16)) {
        $("#timeblock7").addClass("past");
    }
    else {
        $("#timeblock7").addClass("future");
    };

    if (moment().isBetween(hour16, hour17)) {
        $("#timeblock8").addClass("present");
    }
    else if (moment().isAfter(hour17)) {
        $("#timeblock8").addClass("past");
    }
    else {
        $("#timeblock8").addClass("future");
    };

    if (moment().isBetween(hour17, hour18)) {
        $("#timeblock9").addClass("present");
    }
    else if (moment().isAfter(hour18)) {
        $("#timeblock9").addClass("past");
    }
    else {
        $("#timeblock9").addClass("future");
    };

    if (moment().isBetween(hour18, hour19)) {
        $("#timeblock10").addClass("present");
    }
    else if (moment().isAfter(hour19)) {
        $("#timeblock10").addClass("past");
    }
    else {
        $("#timeblock10").addClass("future");
    };    
}

checkPastPresentFuture();