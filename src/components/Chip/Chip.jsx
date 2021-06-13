import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightBlue, purple } from "@material-ui/core/colors";
import MUIChip from "@material-ui/core/Chip";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: lightBlue[500],
        },
        secondary: {
            main: purple[500],
        },
    },
});

const srText = (props) => {
    if (props.sronly !== undefined) {
        return props.sronly;
    } else if (props.onClick && props.onDelete) {
        return `${label}.`;
    } else if (props.onDelete) {
        return `${label}. Press Delete key to remove chip`;
    }
    return null;
};

export const Chip = (props) => {
    const { label, color, variant, size, ...otherProps } = props;
    return (
        <ThemeProvider theme={theme}>
            <MUIChip
                {...otherProps}
                label={label}
                aria-label={srText(otherProps, label)}
                color={color}
                variant={variant}
                size={size}
            />
        </ThemeProvider>
    );
};

/* export const Chip = () => {
    return <>Hello</>;
}; */
