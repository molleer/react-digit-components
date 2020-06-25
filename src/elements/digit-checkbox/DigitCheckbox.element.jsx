import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";
import React from "react";
import DigitControlLabelWithError from "../utils/digit-control-label-with-error";
import useLayoutMaterialUi from "../../styles/material-ui/use-layout-material-ui";

const DigitCheckbox = ({
    name,
    value,
    onChange,
    onBlur,
    primary,
    secondary,
    disabled,
    label,
    error,
    errorMessage,
    flex,
    alignSelf,
    justifySelf,
    size,
    padding,
    margin
}) => {
    const classes = useLayoutMaterialUi({
        flex,
        alignSelf,
        justifySelf,
        size,
        padding,
        margin
    });

    return (
        <DigitControlLabelWithError
            classes={classes}
            error={error}
            label={error ? errorMessage : label}
            disabled={disabled}
            control={
                <Checkbox
                    color={
                        primary
                            ? "primary"
                            : secondary
                            ? "secondary"
                            : "default"
                    }
                    checked={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                />
            }
        />
    );
};

DigitCheckbox.displayName = "DigitCheckbox";
DigitCheckbox.propTypes = {
    /** A unique name relative to a form. e.g. acceptedTerms or pizza.*/
    name: PropTypes.string,
    /** Fires on input change. Note that this component is uncontrolled, and that
     * you have to save value by yourself. Only argument is the event object. If you want
     * the new text value, use `e.target.value`.
     */
    onChange: PropTypes.func.isRequired,
    /** The onBlur event occurs when an object loses focus. */
    onBlur: PropTypes.func,
    /** A label that is to the right of the checkbox. */
    label: PropTypes.string,
    /** The checked value of the checkbox. Note that this component is uncontrolled, and that you have to
     * save your value of yourself.
     */
    value: PropTypes.bool.isRequired,
    /** Sets the color to the primary one. This has predence precedence over secondary. */
    primary: PropTypes.bool,
    /** Sets the color to the secondary one. This has precedence over the normal button. */
    secondary: PropTypes.bool,
    /** If true, then the user can't changed the value of the checkbox.
     * The value is persisted though when disabled.
     */
    disabled: PropTypes.bool,
    /** If true, then the text will be red and errorMessage will be replaced with errorMessage */
    error: PropTypes.bool,
    /** Will be shown instead of label if error is true. */
    errorMessage: PropTypes.string,
    /** Controls the flex property for the most outer element in this component.*/
    flex: PropTypes.string,

    /** Controls the alignSelf property for the most outer element in this component.*/
    alignSelf: PropTypes.oneOf([
        "auto",
        "stretch",
        "center",
        "flex-start",
        "flex-end",
        "baseline",
        "initial",
        "inherit"
    ]),
    /** Controls the justifySelf property for the most outer element in this component. */
    justifySelf: PropTypes.oneOf([
        "enter",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "left",
        "right",
        "baseline",
        "inherit",
        "initial"
    ]),
    /** Controls the size for the most outer element in this component. You can set minWidth/Height, maxWidth/Height
     * and width/height via an object
     */
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        minWidth: PropTypes.string,
        minHeight: PropTypes.string,
        maxWidth: PropTypes.string,
        maxHeight: PropTypes.string
    }),
    /** Padding property for the most outer element in this component.
     * It can either be a string, using the padding shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    padding: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ]),
    /** Margin property for the most outer element in this component.
     * It can either be a string, using the margin shorthand, or it can be an
     * object to control top/right/bottom/left
     */
    margin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            top: PropTypes.string,
            right: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string
        })
    ])
};

DigitCheckbox.defaultProps = {
    name: "",
    onBlur: () => {},
    label: "",
    primary: false,
    secondary: false,
    disabled: false,
    error: false,
    errorMessage: null,
    size: { width: "224px" }
};

export default DigitCheckbox;
