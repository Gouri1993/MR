// Form ------------------------------------------------------------------------
function showDeptInput() {
  var selected_dept = document.getElementById('select_dept');
  var dept = document.getElementById('dept');
  if(selected_dept.value == "other_dept"){
    dept.style.display = "block"
  } else {
    dept.style.display = "none"
  }
}
function showOrgInput() {
  var selectedOrg = document.getElementById('select_org');
  var org = document.getElementById('org');
  if(selectedOrg.value == "other_organisation"){
    org.style.display = "block"
  } else {
    org.style.display = "none"
  }
}
// Map Function--------------------------------------------------------------------
function initMap()
{
  myCenter=new google.maps.LatLng(12.892592, 77.642226);
  var mapOptions= {
    center:myCenter,
    zoom:17, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}
// Page navigation(slide to section on click)-----------------------------------------------------------------

$(document).ready(function(){
$("#ContactUs_Sec").click(function() {
    $('html,body').animate({scrollTop: $("#forth-fold").offset().top},'slow');
});
});

