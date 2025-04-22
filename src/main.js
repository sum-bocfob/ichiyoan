import "./style.css";
import $ from "jquery";
import { animate, delay, inView, stagger } from "motion";

$(function () {
    // ハンバーガーメニュー
    const ham = $(".l-header__hamburger");
    const gnav = $(".l-header__gnav");
    const menu_bg = $(".l-header__menu-bg");
    const anim_dur = 0.3;
    ham.on("click", function () {
        $(this).toggleClass("js-open-menu");
        gnav.toggleClass("js-open-menu");
        menu_bg.toggleClass("js-open-menu");
        ham.attr("aria-expanded", ham.attr("aria-expanded") === "true" ? "false" : "true");
        gnav.attr("aria-hidden", gnav.attr("aria-hidden") === "true" ? "false" : "true");
    });
    menu_bg.on("click", function () {
        console.log("tes");
        ham.removeClass("js-open-menu");
        gnav.removeClass("js-open-menu");
        $(this).removeClass("js-open-menu");
    });

    // メニューからページ遷移
    $(".l-header__link").on("click", function () {
        ham.css("transitionDuration", "0s").removeClass("js-open-menu").css(`transitionDuration, ${anim_dur}`);
        gnav.css("transitionDuration", "0").removeClass("js-open-menu").css(`transitionDuration, ${anim_dur}`);
        menu_bg.css("transitionDuration", "0").removeClass("js-open-menu").css(`transitionDuration, ${anim_dur}`);
    });

    //* inView
    // ちらつき防止のため先にopacity0にしておく
    $(".js-inview").css("opacity", "0");

    const option = {
        duration: 1.2,
    };

    inView(".js-inview", (target) => {
        animate(target, { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] }, option);
    });
});
