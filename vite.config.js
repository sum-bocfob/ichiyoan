import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
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
                };
                if (pagePath.includes("index.html")) {
                    urls.homeUrl = "#";
                } else if (pagePath.includes("sweets.html")) {
                    urls.sweetsUrl = "#";
                } else if (pagePath.includes("craftsmanship.html")) {
                    urls.craftsmanshipUrl = "#";
                } else if (pagePath.includes("shop.html")) {
                    urls.shopUrl = "#";
                } else if (pagePath.includes("contact.html")) {
                    urls.contactUrl = "#";
                }
                return urls;
            },
            partialDirectory: "./partials", // 共通パーツのディレクトリ
        }),
    ],
});
