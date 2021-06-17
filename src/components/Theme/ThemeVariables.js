import { createMuiTheme } from "@material-ui/core/styles";
import { lightBlue, purple } from "@material-ui/core/colors";

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: lightBlue[500],
        },
        secondary: {
            main: purple[500],
        },
    },
});
