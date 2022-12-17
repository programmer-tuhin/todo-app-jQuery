$("ul").on("click", "li", function () {
  $(this).toggleClass("done");
});

$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(300, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input").keypress(function (event) {
  if (event.which === 13) {
    let task = $("input").val();
    $("ul").append(
      "<li><span class='trash'><i class='bx bxs-trash'></i></span>" +
        task +
        "</li>"
    );
    $("input").val("");
  }
});

$("#plus").click(function () {
  $("input").fadeToggle();
});
