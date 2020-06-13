$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});

var join_button = document.getElementById("join-us")
join_button.onclick = function () {
    location.href = "join-us"
}