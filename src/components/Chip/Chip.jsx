import React from "react";
import MUIChip from "@material-ui/core/Chip";

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
        <>
            <MUIChip
                {...otherProps}
                label={label}
                aria-label={srText(otherProps, label)}
                color={color}
                variant={variant}
                size={size}
            />
        </>
    );
};
