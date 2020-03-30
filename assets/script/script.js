// Current Date and displayed to browser
var currentTime = moment().format('MMMM Do YYYY')
$("#currentDay").text(currentTime);

// Need buttons to save content to local storage
var savedTimes;
var am8 = "";
var am9 = "";
var am10 = "";
var am11 = "";
var pm12 = "";
var pm1 = "";
var pm2 = "";
var pm3 = "";
var pm4 = "";
var pm5 = "";
var pleaseWork;

//document.querySelector("am8").innerHTML = "test";

$(".btn").click(function save(){
    //var newItem = document.querySelector("input").value
    var userInfo8 = $("input:text").val();
    localStorage.setItem("am8", userInfo8)
    console.log()

});

var reloadLocalFor8am = document.querySelectorAll("#am8").innerText = localStorage.getItem("am8")
window.onload = reloadLocalFor8am






// Function that takes time, compares to time block, and formats it according to whether it is past, present, future
var am8 = $(".am8");
var am9 = $(".am9");
var am10 = $(".am10");
var am11 = $(".am11");
var pm12 = $(".pm12");
var pm1 = $(".pm1");
var pm2 = $(".pm2");
var pm3 = $(".pm3");
var pm4 = $(".pm4");
var pm5 = $(".pm5");
var currentTime = new Date().getHours();

// Color change for 8am time block
function am8ColorChange() {
    if (8 > currentTime) {
        am8.addClass("future");
    } else if (9 <= currentTime){
        am8.addClass("past")
    } else {
        am8.addClass("present")
    }};
// Color change for 9am time block
function am9ColorChange() {
    if (9 > currentTime) {
        am9.addClass("future");
    } else if (10 <= currentTime){
        am9.addClass("past")
    } else {
        am9.addClass("present")
    }};
// Color change for 10am time block
function am10ColorChange() {
    if (10 > currentTime) {
        am10.addClass("future");
    } else if (11 <= currentTime){
        am10.addClass("past")
    } else {
        am10.addClass("present")
    }};
// Color change for 11am time block
function am11ColorChange() {
    if (11 > currentTime) {
        am11.addClass("future");
    } else if (12 <= currentTime){
        am11.addClass("past")
    } else {
        am11.addClass("present")
    }};
// Color change for 12pm time block
function pm12ColorChange() {
    if (12 > currentTime) {
        pm12.addClass("future");
    } else if (13 <= currentTime){
        pm12.addClass("past")
    } else {
        pm12.addClass("present")
    }};
// Color change for 1pm time block
function pm1ColorChange() {
    if (13 > currentTime) {
        pm1.addClass("future");
    } else if (14 <= currentTime){
        pm1.addClass("past")
    } else {
        pm1.addClass("present")
    }};
// Color change for 2pm time block
function pm2ColorChange() {
    if (14 > currentTime) {
        pm2.addClass("future");
    } else if (15 <= currentTime){
        pm2.addClass("past")
    } else {
        pm2.addClass("present")
    }};
// Color change for 3pm time block
function pm3ColorChange() {
    if (15 > currentTime) {
        pm3.addClass("future");
    } else if (16 <= currentTime){
        pm3.addClass("past")
    } else {
        pm3.addClass("present")
    }};
// Color change for 4pm time block
function pm4ColorChange() {
    if (16 > currentTime) {
        pm4.addClass("future");
    } else if (17 <= currentTime){
        pm4.addClass("past")
    } else {
        pm4.addClass("present")
    }};
// Color change for 5pm time block
function pm5ColorChange() {
    if (17 > currentTime) {
        pm5.addClass("future");
    } else if (18 <= currentTime){
        pm5.addClass("past")
    } else {
        pm5.addClass("present")
    }};
// One function to run them all
function colorUpdate(){
    am8ColorChange();
    am9ColorChange();
    am10ColorChange();
    am11ColorChange();
    pm12ColorChange();
    pm1ColorChange();
    pm2ColorChange();
    pm3ColorChange();
    pm4ColorChange();
    pm5ColorChange();
}
//Run the colors format on page load
window.onload = colorUpdate;









// For loop that generates the saved information to the correct box
