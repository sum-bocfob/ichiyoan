import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";

export default defineConfig({
    base: "/ichiyoan/",
    // build: {
    //     rollupOptions: {
    //         input: {
    //             contact: resolve(__dirname, "")
    //         }
    //     }
    // }
    plugins: [
        handlebars({
            context(pagePath) {
                // HTMLファイルごとに切り替え可能
                let urls = {
                    homeUrl: "index.html",
                    sweetsUrl: "sweets.html",
                    craftsmanshipUrl: "craftsmanship.html",
                    shopUrl: "shop.html",
                    contactUrl: "contact.html",
                    pageTitle: "",
                    pageDesc: "",
                };
                if (pagePath.includes("index.html")) {
                    urls.homeUrl = "#";
                    urls.pageTitle = "トップページ";
                    urls.pageDesc = "京都・祇園にある小さな和菓子屋「一葉庵」です。伝統的な製法と、現代的な美意識を融合させた和菓子を手作りで提供しています。";
                } else if (pagePath.includes("sweets.html")) {
                    urls.sweetsUrl = "#";
                    urls.pageTitle = "和菓子一覧";
                    urls.pageDesc = "京都・祇園にある小さな和菓子屋「一葉庵」の和菓子をご紹介いたします。";
                } else if (pagePath.includes("craftsmanship.html")) {
                    urls.craftsmanshipUrl = "#";
                    urls.pageTitle = "こだわり";
                    urls.pageDesc = "京都・祇園にある小さな和菓子屋「一葉庵」。そのこだわりをご紹介いたします。";
                } else if (pagePath.includes("shop.html")) {
                    urls.shopUrl = "#";
                    urls.pageTitle = "店舗情報・アクセス";
                    urls.pageDesc = "京都・祇園にある小さな和菓子屋「一葉庵」の店舗情報・アクセス。";
                } else if (pagePath.includes("contact.html")) {
                    urls.contactUrl = "#";
                    urls.pageTitle = "お問い合わせ";
                    urls.pageDesc = "京都・祇園にある小さな和菓子屋「一葉庵」へのお問い合わせはこちらから。";
                }
                return urls;
            },
            partialDirectory: "./partials", // 共通パーツのディレクトリ
        }),
    ],
});
