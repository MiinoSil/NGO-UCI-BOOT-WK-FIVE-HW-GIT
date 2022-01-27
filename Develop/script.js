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
var CurrentDateTimeUpdating = function () {
    currentDateTimePEl.text(moment().format('dddd, MMMM Do YYYY h:mm:ss a'));
}

// Generate rows by looping through hours array
$.each(hoursArr, function (index, value) {
    tasksArr = [tasksHour09, tasksHour10, tasksHour11, tasksHour12, tasksHour13, tasksHour14, tasksHour15, tasksHour16, tasksHour17, tasksHour18]
    $(".container").append(
        "<div class='row'><div class='col-2 hour text-center' id='hour'" +
        (index) + "'><span>" + value.format("h A") + "</span></div><div class='col-8' id='timeblock" +
        (index) + "'><textarea class='col-12' id='taskNm" + (index) + "'>" + tasksArr[index] + "</textarea></div>" +
        "<div class='col-2 saveBtn text-center' id='saveBtn" + (index) + "'><i class='fas fa-save' title='Save Task'></i> <i class='fas fa-trash' title='Remove Task'></i></div></div></div>");
});

// Function to check each time slot then colorize, change class depending on past, present, or future
var checkPastPresentFuture = function () {
    currentTime = moment().format("hh:mm:ss");

    // For each time block, check time then colorize or change class .past, .present, .future
    if (moment().isBetween(hour09, hour10)) {
        $("#timeblock0").addClass("present");
    }
    else if (moment().isAfter(hour10)) {
        $("#timeblock0").addClass("past");
    }
    else {
        $("#timeblock0").addClass("future");
    };

    if (moment().isBetween(hour10, hour11)) {
        $("#timeblock1").addClass("present");
    }
    else if (moment().isAfter(hour11)) {
        $("#timeblock1").addClass("past");
    }
    else {
        $("#timeblock1").addClass("future");
    };

    if (moment().isBetween(hour11, hour12)) {
        $("#timeblock2").addClass("present");
    }
    else if (moment().isAfter(hour12)) {
        $("#timeblock2").addClass("past");
    }
    else {
        $("#timeblock2").addClass("future");
    };

    if (moment().isBetween(hour12, hour13)) {
        $("#timeblock3").addClass("present");
    }
    else if (moment().isAfter(hour13)) {
        $("#timeblock3").addClass("past");
    }
    else {
        $("#timeblock3").addClass("future");
    };

    if (moment().isBetween(hour13, hour14)) {
        $("#timeblock4").addClass("present");
    }
    else if (moment().isAfter(hour14)) {
        $("#timeblock4").addClass("past");
    }
    else {
        $("#timeblock4").addClass("future");
    };

    if (moment().isBetween(hour14, hour15)) {
        $("#timeblock5").addClass("present");
    }
    else if (moment().isAfter(hour15)) {
        $("#timeblock5").addClass("past");
    }
    else {
        $("#timeblock5").addClass("future");
    };

    if (moment().isBetween(hour15, hour16)) {
        $("#timeblock6").addClass("present");
    }
    else if (moment().isAfter(hour16)) {
        $("#timeblock6").addClass("past");
    }
    else {
        $("#timeblock6").addClass("future");
    };

    if (moment().isBetween(hour16, hour17)) {
        $("#timeblock7").addClass("present");
    }
    else if (moment().isAfter(hour17)) {
        $("#timeblock7").addClass("past");
    }
    else {
        $("#timeblock7").addClass("future");
    };

    if (moment().isBetween(hour17, hour18)) {
        $("#timeblock8").addClass("present");
    }
    else if (moment().isAfter(hour18)) {
        $("#timeblock8").addClass("past");
    }
    else {
        $("#timeblock8").addClass("future");
    };

    if (moment().isBetween(hour18, hour19)) {
        $("#timeblock9").addClass("present");
    }
    else if (moment().isAfter(hour19)) {
        $("#timeblock9").addClass("past");
    }
    else {
        $("#timeblock9").addClass("future");
    };    
}

// Add event listener for task storage 
$("#saveBtn0").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour09");
    $("#taskNm0").val("");
})
$("#saveBtn1").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour10");
    $("#taskNm1").val("");
})
$("#saveBtn2").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour11");
    $("#taskNm2").val("");
})
$("#saveBtn3").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour12");
    $("#taskNm3").val("");
})
$("#saveBtn4").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour13");
    $("#taskNm4").val("");
})
$("#saveBtn5").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour14");
    $("#taskNm5").val("");
})
$("#saveBtn6").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour15");
    $("#taskNm6").val("");
})
$("#saveBtn7").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour16");
    $("#taskNm7").val("");
})
$("#saveBtn8").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour17");
    $("#taskNm8").val("");
})
$("#saveBtn9").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour18");
    $("#taskNm9").val("");
})

// Add event listener for task removal
$("#saveBtn0").on("click", "i.fa-save", function () {
    var task0 = $("#taskNm0").val().trim();
    localStorage.setItem('hour09', JSON.stringify(task0));
})
$("#saveBtn1").on("click", "i.fa-save", function () {
    var task1 = $("#taskNm1").val().trim();
    localStorage.setItem('hour10', JSON.stringify(task1));
})
$("#saveBtn2").on("click", "i.fa-save", function () {
    var task2 = $("#taskNm2").val().trim();
    localStorage.setItem('hour11', JSON.stringify(task2));
})
$("#saveBtn3").on("click", "i.fa-save", function () {
    var task3 = $("#taskNm3").val().trim();
    localStorage.setItem('hour12', JSON.stringify(task3));
})
$("#saveBtn4").on("click", "i.fa-save", function () {
    var task4 = $("#taskNm4").val().trim();
    localStorage.setItem('hour13', JSON.stringify(task4));
})
$("#saveBtn5").on("click", "i.fa-save", function () {
    var task5 = $("#taskNm5").val().trim();
    localStorage.setItem('hour14', JSON.stringify(task5));
})
$("#saveBtn6").on("click", "i.fa-save", function () {
    var task6 = $("#taskNm6").val().trim();
    localStorage.setItem('hour15', JSON.stringify(task6));
})
$("#saveBtn7").on("click", "i.fa-save", function () {
    var task7 = $("#taskNm7").val().trim();
    localStorage.setItem('hour16', JSON.stringify(task7));
})
$("#saveBtn8").on("click", "i.fa-save", function () {
    var task8 = $("#taskNm8").val().trim();
    localStorage.setItem('hour17', JSON.stringify(task8));
})
$("#saveBtn9").on("click", "i.fa-save", function () {
    var task9 = $("#taskNm9").val().trim();
    localStorage.setItem('hour18', JSON.stringify(task9));
})

// initial function upon page load
checkPastPresentFuture();
CurrentDateTimeUpdating();

// Set time interval to rerun functions
setInterval(checkPastPresentFuture, 1800000);

setInterval(CurrentDateTimeUpdating, 1000);

