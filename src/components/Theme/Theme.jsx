import React from "react";
import { createMuiTheme, StylesProvider } from "@material-ui/core/styles";
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
            <MuiThemeProvider theme={Theme}>
                <CssBaseline />
                {props.children}
            </MuiThemeProvider>
        </StylesProvider>
    );
};
