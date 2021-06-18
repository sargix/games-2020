$("nav a").on("click", function () {
  const goToSection = "[data-section=" + $(this).attr("class") + "]";
  $("body, html").animate(
    {
      scrollTop: $(goToSection).offset().top,
    },
    500
  );
});

const $headerHeight = $("header").height();
const $sectionHeight = $("section").height();

$(window).on("scroll", function () {
  if ($(window).scrollTop() >= $headerHeight / 2) {
    $("i.return").addClass("active");
  }
  if ($(window).scrollTop() < $headerHeight / 2) {
    $("i.return").removeClass("active");
  }
});

$("i.return").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: 0,
    },
    500
  );
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() >= $headerHeight / 2) {
    $("section.cyb p").addClass("active_p_left");
  }
  if ($(window).scrollTop() >= $headerHeight / 2 + $sectionHeight) {
    $("section.the_last p").addClass("active_p_right");
  }
  if ($(window).scrollTop() >= $headerHeight / 2 + 2 * $sectionHeight) {
    $("section.spider p").addClass("active_p_left");
  }
  if ($(window).scrollTop() >= $headerHeight / 2 + 3 * $sectionHeight) {
    $("section.formula p").addClass("active_p_left");
  }
  if ($(window).scrollTop() >= $headerHeight / 2 + 4 * $sectionHeight) {
    $("section.ghost p").addClass("active_p_right");
  }
  if ($(window).scrollTop() < $headerHeight / 2) {
    $("section p").removeClass("active_p_left");
  }
  if ($(window).scrollTop() < $headerHeight / 2) {
    $("section p").removeClass("active_p_right");
  }
});
