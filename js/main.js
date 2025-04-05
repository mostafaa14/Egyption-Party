let countDown = new Date("Jul 27 , 2024  03:00:00").getTime();

$(".toggle").click(function () {
  $(this).next().slideToggle(500);
});


window.addEventListener("load", function () {
  $(".loading-screen").fadeOut(500, function () {
    $("body").css("overflow", "visible");
  });
});


let counter = setInterval(() => {
  // date
  let dateNow = new Date().getTime();
  let dateReff = countDown - dateNow;

  // days                   Msecond / sec / min / hrs / days
  let getDays = Math.floor(dateReff / 1000 / 60 / 60 / 24);
  document.querySelector(".days").innerHTML = getDays + " D";

  //hours
  let getHours = dateReff % (1000 * 60 * 60 * 24);
  let hours = Math.floor(getHours / 1000 / 60 / 60);
  document.querySelector(".hours").innerHTML = hours + " Hrs";

  // minutes

  let getMinuts = dateReff % (1000 * 60 * 60);
  let minutes = Math.floor(getMinuts / 1000 / 60);
  document.querySelector(".minutes").innerHTML = minutes + " Min";

  // seconds
  let getSeconds = Math.floor((dateReff % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML = getSeconds + " Sec";

  if (getDays == 0 && hours == 0 && minutes == 0 && getSeconds == 0) {
    $("#counter").slideUp(1000);
  }
}, 1000);

$(".openNav").click(function () {
  $("#left-menu").animate({ width: "250px" });
  console.log("552");
});
$(".closebtn ").click(function () {
  $("#left-menu").animate({ width: "0px" });
});


// function countChar(value, limit) {
//   let remaining = limit - value.length;

//   remaining = Math.max(0, remaining);

//   console.log(remaining);

//   if (remaining === 0) {
//     document.querySelector("#chars").innerHTML =
//       "Your available characters finished";
//   } else {
//     document.querySelector("#chars").innerHTML = remaining;
//   }

//   if (remaining < 0) {
//     document.querySelector("textarea").value = value.slice(0, limit);
//   }
// }


function countChar(value, limit) {
  let remaining = limit - value.length;

  remaining = Math.max(0, remaining);

  if (remaining === 0) {
    $("#chars").html("Your available characters finished");
  } else {
    $("#chars").html(remaining);
  }

  if (remaining < 0) {
    $("textarea").val(value.slice(0, limit));
  }
}
