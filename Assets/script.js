// COMPLETE:  Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(document).ready(function () {

// COMPLETE: Add code to display the current date in the header of the page. Figured out the below solution (for current date and auto-updating time) during module 4 week in class!
function updateClock() {
  var now = new Date(),
      months = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'];
      time = now.getHours() + ':' + now.getMinutes()+ ':' + now.getSeconds(),
      date = [now.getDate(), 
              months[now.getMonth()],
              now.getFullYear()].join(' ');
  document.getElementById('time').innerHTML = [date, time].join(' | ');
  setTimeout(updateClock, 1000);
}

// Calls the updateClock function above
updateClock();


// COMPLETE: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. 
      $('#hour05 .description').val(localStorage.getItem('hour05'));
      $('#hour06 .description').val(localStorage.getItem('hour06'));
      $('#hour07 .description').val(localStorage.getItem('hour07'));
      $('#hour08 .description').val(localStorage.getItem('hour08'));
      $('#hour09 .description').val(localStorage.getItem('hour09'));
      $('#hour10 .description').val(localStorage.getItem('hour10'));
      $('#hour11 .description').val(localStorage.getItem('hour11'));
      $('#hour12 .description').val(localStorage.getItem('hour12'));
      $('#hour13 .description').val(localStorage.getItem('hour13'));
      $('#hour14 .description').val(localStorage.getItem('hour14'));
      $('#hour15 .description').val(localStorage.getItem('hour15'));
      $('#hour16 .description').val(localStorage.getItem('hour16'));
      $('#hour17 .description').val(localStorage.getItem('hour17'));
      $('#hour18 .description').val(localStorage.getItem('hour18'));
      $('#hour19 .description').val(localStorage.getItem('hour19'));

// COMPLETE: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
    function hourRowColorizer() {
      var now = moment().hour();


      $('.time-block').each(function () {
          var hourRow = parseInt($(this).attr("id").split("hour")[1]);
          console.log(hourRow,now);

          //changes the background color of any hour rows that are tied to a div that falls BEFORE the current hour
          if (hourRow < now) {  
              $(this).addClass("past");
              $(this).removeClass("future");
              $(this).removeClass("present");
          }
          //changes the background color of any hour rows that are tied to a div that falls AFTER the current hour
          else if (hourRow === now) {  
              $(this).removeClass("past");
              $(this).addClass("present");
              $(this).removeClass("future");
            }
          //changes the background color of any div that falls WITHIN the current hour
          else {  
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");
            }
      })
  }
  // Calls the hourRowColorizer function
  hourRowColorizer();

// COMPLETE: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 
    $('.saveBtn').on('click',function(){
      var eventData = $(this).siblings('.description').val();
      var timeSlot = $(this).parent().attr('id');
      
      localStorage.setItem(timeSlot, eventData);
    })
    
   
  });