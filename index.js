$(".switch-btn ").click(function () {
  $(".switch-btn").toggleClass("to-dark");
  $(".theme").toggleClass("active");
  if ($(".switch-btn").hasClass("to-dark")) {
    $(":root").css("--bg-color", "#000");
  } else {
    $(":root").css("--bg-color", "#fff");
  }
});
/*Whole Design belongs to the https://www.youtube.com/watch?v=S6T6hrc8cQo Shmelt Studios*/
/*Coding Crehera*/
