import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import viteImagemin from "vite-plugin-imagemin";
import { resolve } from "path";

export default defineConfig({
    base: "/ichiyoan/",
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                sweets: resolve(__dirname, "sweets.html"),
                craftsmanship: resolve(__dirname, "craftsmanship.html"),
                shop: resolve(__dirname, "shop.html"),
                contact: resolve(__dirname, "contact.html"),
            },
        },
    },
    plugins: [
        handlebars({
            helpers: {
                eq: (a, b) => a === b, // 追加：activeクラス付与のための比較用
            },
            context(pagePath) {
                // 現在のページ識別子を取得
                let current = "";

                if (pagePath.includes("index.html")) current = "home";
                else if (pagePath.includes("sweets.html")) current = "sweets";
                else if (pagePath.includes("craftsmanship.html")) current = "craftsmanship";
                else if (pagePath.includes("shop.html")) current = "shop";
                else if (pagePath.includes("contact.html")) current = "contact";

                // 共通リンク定義
                const urls = {
                    homeUrl: current === "home" ? "#" : "index.html",
                    sweetsUrl: current === "sweets" ? "#" : "sweets.html",
                    craftsmanshipUrl: current === "craftsmanship" ? "#" : "craftsmanship.html",
                    shopUrl: current === "shop" ? "#" : "shop.html",
                    contactUrl: current === "contact" ? "#" : "contact.html",
                };

                // ページごとのタイトル・説明
                const pageMeta = {
                    home: {
                        pageTitle: "トップページ",
                        pageDesc: "京都・祇園にある小さな和菓子屋「一葉庵」です。伝統的な製法と、現代的な美意識を融合させた和菓子を手作りで提供しています。",
                    },
                    sweets: {
                        pageTitle: "和菓子一覧",
                        pageDesc: "京都・祇園にある小さな和菓子屋「一葉庵」の和菓子をご紹介いたします。",
                    },
                    craftsmanship: {
                        pageTitle: "こだわり",
                        pageDesc: "京都・祇園にある小さな和菓子屋「一葉庵」。そのこだわりをご紹介いたします。",
                    },
                    shop: {
                        pageTitle: "店舗情報・アクセス",
                        pageDesc: "京都・祇園にある小さな和菓子屋「一葉庵」の店舗情報・アクセス。",
                    },
                    contact: {
                        pageTitle: "お問い合わせ",
                        pageDesc: "京都・祇園にある小さな和菓子屋「一葉庵」へのお問い合わせはこちらから。",
                    },
                };

                return {
                    current,
                    ...urls,
                    pageTitle: pageMeta[current]?.pageTitle || "",
                    pageDesc: pageMeta[current]?.pageDesc || "",
                };
            },
            partialDirectory: "./partials",
        }),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 70,
            },
            pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: "removeViewBox",
                    },
                    {
                        name: "removeEmptyAttrs",
                        active: false,
                    },
                ],
            },
        }),
    ],
});
