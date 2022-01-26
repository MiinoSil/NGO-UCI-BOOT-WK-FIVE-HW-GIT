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
        "<div class='row'><div class='col-2 hour text-center ' id='hour'" +
        (index + 10) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 tasks-group' id='timeblock'" +
        (index + 10) + "'><textarea class='events col-12' id='eventblock" + (index + 10) + "'>" + tasksArr[index] + "</textarea></div>" +
        "<div class='col-2 save-delete text-center' id='save-delete'" + (index + 10) + "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>");
});