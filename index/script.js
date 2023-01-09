var typed = new Typed(".typing", {
    strings: ["Phone Number", "IMEI Code"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

$(document).ready(function() {
    $("#warning").hide();
    $("#track").click(function() {
      $("#warning").toggle();
    });
  });