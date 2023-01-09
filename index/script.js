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

  $(document).ready(function() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.getItem("visitorCount") === null) {
        localStorage.setItem("visitorCount", 0);
      }
      localStorage.setItem("visitorCount", parseInt(localStorage.getItem("visitorCount")) + 1);
      $("#visitorCount").text(localStorage.getItem("visitorCount"));
    } else {
      $("#visitorCount").text("Sorry, your browser does not support local storage.");
    }
  });
  