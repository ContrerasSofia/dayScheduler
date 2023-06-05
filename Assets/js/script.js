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

    var timeBlock = timeContainer.children('div').eq(i);
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
   // render the the description saved un the local storage
  var tasks = JSON.parse(localStorage.getItem('description'));

  for (var i = 0; i < tasks.length; i++){
    var timeBlock = timeContainer.children('div').eq(i);
    if(tasks[i] != null){
      timeBlock.children('textarea').text(tasks[i].description)
    }
  } 
};

saveBtn.on('click', function () {
  // save the entry data in the local storage
  txTarea = $(this.parentNode).children('textarea');
  entryData = txTarea.val().trim();
  id = $(this.parentNode).attr('id');
  
  const timeBlock = {
    description : entryData,
    id : parseInt(id)
  };

  var description = JSON.parse(localStorage.getItem('description'));
  
  if(description == null)
    description = Array();

  description[timeBlock.id] = timeBlock;
  localStorage.setItem('description', JSON.stringify(description));
  
  getInput();
});
