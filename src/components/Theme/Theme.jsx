import React from "react";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "./ThemeVariables";
export const App = (props) => {
    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={Theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </StylesProvider>
    );
};
