var saveBtn = $('.saveBtn');
var timeContainer = $('#time-container');
var today = dayjs();

$(function () {
  headerDate();
  renderSchedule();
});

function headerDate(){
  var currentDay = $('#currentDay');
  currentDay.text(today.format('MMMM D, YYYY'));
};

function renderSchedule(){

  var actualHour = today.format('H');
  // applying the past, present, or future class to each time
  for (var i = 0; i < 9; i++) {

    timeBlock = timeContainer.children('div').eq(i);
    blockId = i + 9;

    if(actualHour < blockId){
     timeBlock.addClass('future');
    }else if(actualHour > blockId){
      timeBlock.addClass('past');
    }else{
      timeBlock.addClass('present');
    }  
  }
  getInput();
};

function getInput(){
 // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? 
};

saveBtn.on('click', function () {
   // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
});
