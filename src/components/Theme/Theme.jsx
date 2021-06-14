import React from "react";
import {
    createMuiTheme,
    ThemeProvider,
    StylesProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { lightBlue, purple } from "@material-ui/core/colors";

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: lightBlue[500],
        },
        secondary: {
            main: purple[500],
        },
    },
});

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
