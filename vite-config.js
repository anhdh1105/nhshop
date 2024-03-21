// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                shop: resolve(__dirname, "./Shop.html"),
                detail: resolve(__dirname, "./ProductDetail.html"),
                cart: resolve(__dirname, "./cart.html"),
                checkout: resolve(__dirname, "./checkout.html"),
                login: resolve(__dirname, "./login.html"),
            },
        },
    },
});