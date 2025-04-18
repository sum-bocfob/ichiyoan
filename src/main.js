import "./style.css";
import $ from "jquery";

$(function () {
    // ハンバーガーメニュー
    const ham = $(".l-header__hamburger");
    const gnav = $(".l-header__gnav");
    const menu_bg = $(".l-header__menu-bg");
    ham.on("click", function () {
        $(this).toggleClass("js-open-menu");
        gnav.toggleClass("js-open-menu");
        menu_bg.toggleClass("js-open-menu");
        ham.attr("aria-expanded", ham.attr("aria-expanded") === "true" ? "false" : "true");
        gnav.attr("aria-hidden", gnav.attr("aria-hidden") === "true" ? "false" : "true");
    });
});
