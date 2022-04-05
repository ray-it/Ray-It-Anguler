import { Component, OnInit } from "@angular/core";
import $ from "jquery";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var header = $("#header").innerHeight();
    $("main").css("margin-top", header);
    var winHeight = $(window).height();
    var header = $("#header").innerHeight();
    var pageHeight = winHeight - header;
    var fixedbarHeight = $(".fixed-bar").innerHeight();
    $(".sidebar").css({ height: pageHeight, top: header });
    $(".side-details").css({ height: pageHeight });
    $(".selling-point").css({ "min-height": pageHeight });
    $(".meal-list").css({ height: pageHeight - fixedbarHeight });
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
  }
}
