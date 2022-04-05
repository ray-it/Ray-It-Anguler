$(document).ready(function () {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(function () {
    header = $("#header").innerHeight();
    $("main").css("margin-top", header);
  });

  $(function () {
    winHeight = $(window).height();
    header = $("#header").innerHeight();
    pageHeight = winHeight - header;
    fixedbarHeight = $(".fixed-bar").innerHeight();
    $(".sidebar").css({ height: pageHeight, top: header });
    $(".side-details").css({ height: pageHeight });
    $(".selling-point").css({ "min-height": pageHeight });
    $(".meal-list").css({ height: pageHeight - fixedbarHeight });
  });

  $(function () {
    winHeight = $(window).height();
    header = $("#header").innerHeight();
    pageHeight = winHeight - header;
    recipe = $(".print-recipe").innerHeight();
    search = $(".search-input").innerHeight();
    $(".list-recipe").css({ height: pageHeight - recipe - search - 255 });
  });

  $(".openModal").click(function () {
    $("#sharedModal").modal("show");
  });

  // active item in menu
  $(".main-menu>li>a").click(function () {
    $(".main-menu li").removeClass("active-item");
    $(this).parent().addClass("active-item");
  });

  $(".main-menu>li>a").click(function () {
    $(this).parent().toggleClass("open").siblings().removeClass("open");
  });

  $(".sub-menu li > a").click(function () {
    $(this).parent().toggleClass("show").siblings().removeClass("show");
  });

  $(".categories li").click(function () {
    $(".categories li").removeClass("active-category");
    $(this).addClass("active-category");
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest(".sidebar").length) {
      $(".main-menu li").removeClass("open");
    }
  });

  //select all checkbox
  $(
    "#sales,#customers,#products,#stock,#employee,#accounts,#finance,#settings"
  ).change(function () {
    if ($(this).is(":checked")) {
      $(this)
        .parents(".app-form")
        .find(".custom-control-input")
        .each(function () {
          $(this).prop("checked", true);
        });
    } else {
      $(this)
        .parents(".app-form")
        .find(".custom-control-input")
        .each(function () {
          $(this).prop("checked", false);
        });
    }
  });

  // add & remove to cart
  $(function () {
    $(".increment").on("click", function (event) {
      event.preventDefault();
      var $qty = $(this).parent().find("input");
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal)) {
        $qty.val(currentVal + 1);
      }
    });
    $(".decrement").on("click", function (event) {
      event.preventDefault();
      var $qty = $(this).parent().find("input");
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal) && currentVal > 0) {
        $qty.val(currentVal - 1);
      }
    });
  });

  // companies table
  let companies = $("#companies").DataTable({
    sDom: "lrtip",
    bPaginate: false,
    bLengthChange: false,
    bFilter: true,
    bInfo: false,
    bAutoWidth: false,
    autoWidth: false,
    columnDefs: [
      {
        targets: 0,
        className: "control",
      },
      {
        targets: 1,
        className: "select-checkbox",
      },
      {
        targets: [0, 1],
        orderable: false,
      },
    ],
    select: {
      style: "multi",
      selector: "td:nth-child(2)",
    },
    order: [[2, "asc"]],
  });

  companies
    .on("click", "th.select-checkbox", function () {
      if ($("th.select-checkbox").hasClass("selected")) {
        companies.rows().deselect();
        $("th.select-checkbox").removeClass("selected");
      } else {
        companies.rows().select();
        $("th.select-checkbox").addClass("selected");
      }
    })
    .on("select deselect", function () {
      ("Some selection or deselection going on");
      if (
        companies
          .rows({
            selected: true,
          })
          .count() !== companies.rows().count()
      ) {
        $("th.select-checkbox").removeClass("selected");
      } else {
        $("th.select-checkbox").addClass("selected");
      }
    });

  // branches table
  $("#branches,#recipe").DataTable({
    sDom: "lrtip",
    bPaginate: false,
    bLengthChange: false,
    bFilter: true,
    bInfo: false,
    columnDefs: [
      {
        targets: 0,
        className: "control",
      },
    ],
  });

  // year Data
  let yearData = $("#yearData").DataTable({
    sDom: "lrtip",
    bPaginate: false,
    bLengthChange: false,
    bFilter: true,
    bInfo: false,
    bAutoWidth: false,
    autoWidth: false,
    columnDefs: [
      {
        targets: 0,
        className: "control",
      },
      {
        targets: 1,
        className: "select-checkbox",
      },
      {
        targets: [0, 1],
        orderable: false,
      },
    ],
    select: {
      style: "multi",
      selector: "td:nth-child(2)",
    },
    order: [[2, "asc"]],
  });
  yearData
    .on("click", "th.select-checkbox", function () {
      if ($("th.select-checkbox").hasClass("selected")) {
        yearData.rows().deselect();
        $("th.select-checkbox").removeClass("selected");
      } else {
        yearData.rows().select();
        $("th.select-checkbox").addClass("selected");
      }
    })
    .on("select deselect", function () {
      ("Some selection or deselection going on");
      if (
        yearData
          .rows({
            selected: true,
          })
          .count() !== yearData.rows().count()
      ) {
        $("th.select-checkbox").removeClass("selected");
      } else {
        $("th.select-checkbox").addClass("selected");
      }
    });

  // chart
  var ctx = document.getElementById("line-chart");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [1, 2, 3, 4, 5, 6],
      datasets: [
        {
          label: "",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 2,
          borderColor: "rgba(0, 0, 0, 1)",
          pointBorderColor: "rgba(245, 103, 0, 1)",
        },
      ],
    },
  });

  var ctx2 = document.getElementById("bar-chart");
  var myChart = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      datasets: [
        {
          label: "",
          data: [12, 19, 11, 6, 8, 9, 10, 5, 17],
          borderWidth: 0,
          backgroundColor: "rgba(245, 103, 0, 1)",
          maxBarThickness: 13,
        },
      ],
    },
  });

  var ctx3 = document.getElementById("doughnut-chart");
  var myChart = new Chart(ctx3, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [100, 60],
          backgroundColor: ["rgb(245, 103, 0)", "rgb(255, 241, 222)"],
        },
      ],
    },
    options: {},
  });
});

$(function () {
  $("#mode-toggle").bootstrapToggle({
    on: "",
    off: "",
    onstyle: "default",
    style: "mode_btn",
    height: 20,
  });
});
