import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const dev = process.env.NODE_ENV !== "production",
    sourcemap = dev ? "inline" : false,
    input = "./src/index.js";

console.log(`running in ${dev ? "development" : "production"} mode`);

export default [
    /* {
        input,
        plugins: [
            external(),
            resolve({ browser: true }),
            commonjs(),
            babel({
                exclude: "node_modules/**",
                presets: ["@babel/preset-react"],
                babelHelpers: "bundled",
            }),
        ],
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
                sourcemap,
                plugins: [
                    terser({
                        ecma: 2018,
                        mangle: { toplevel: true },
                        compress: {
                            module: true,
                            toplevel: true,
                            unsafe_arrows: true,
                            drop_console: !dev,
                            drop_debugger: !dev,
                        },
                    }),
                ],
            },
            {
                file: "dist/index.es.js",
                format: "es",
                exports: "named",
                sourcemap,
                plugins: [
                    terser({
                        ecma: 2018,
                        mangle: { toplevel: true },
                        compress: {
                            module: true,
                            toplevel: true,
                            unsafe_arrows: true,
                            drop_console: !dev,
                            drop_debugger: !dev,
                        },
                    }),
                ],
            },
        ],
    }, */
    {
        input: "./src/index.js",
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
            },
            /* {
                file: "dist/bundle.js",
                format: "iife",
                //sourcemap: true,
            }, */
            {
                file: "dist/index.es.js",
                format: "es",
                exports: "named",
            },
        ],
        plugins: [
            babel({
                exclude: "node_modules/**",
                presets: ["@babel/preset-react"],
                babelHelpers: "bundled",
            }),
            external(),
            resolve(),
            terser(),
        ],
    },
];
