import PropTypes from "prop-types";
import React from "react";
import { TextField } from "@material-ui/core";

const DigitTextArea = ({
    value,
    onChange,
    onBlur,
    upperLabel,
    lowerLabel,
    name,
    error,
    errorMessage,
    disabled,
    rows,
    rowsMax,
    outlined,
    filled
}) => 
    <TextField
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        label={upperLabel}
        helperText={
            error 
                ? errorMessage 
                : lowerLabel
        }
        name={name}
        error={error}
        disabled={disabled}
        rows={rows}
        variant={
            outlined 
                ? "outlined" 
                : filled 
                ? "filled" 
                : "standard"
        }
        rowsMax={rowsMax}
        multiline
    />


DigitTextArea.displayName = "DigitTextArea";
DigitTextArea.propTypes = {
    /** The value of the text area. Note that this
     * element is uncontrolled, meaning you have to store
     * the value of the text area yourself. For updates of the value,
     * use the onChange function.
     */
    value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
    /** This function will be called when the input changes.
     * The first argument is the event. To get the new value,
     * use e.target.value.
     */
    onChange: PropTypes.func.isRequired,
    /** The onBlur event occurs when DigitTextArea loses focus. */
    onBlur: PropTypes.func,
    /** The text label over the DigitSelect */
    upperLabel: PropTypes.string,
    /** The text label under the DigitSelect */
    lowerLabel: PropTypes.string,
    /** A unique name relative to a form. e.g. pizzaTopping or attendanceYear.*/
    name: PropTypes.string,
    /** If true, then errorMessage will be shown instead of lowerLabel */
    error: PropTypes.bool,
    /** If error is true, then this errorMessage will be shown instead of lowerLabel */
    errorMessage: PropTypes.string,
    /** If true, then you can"t edit this text area. */
    disabled: PropTypes.bool,
    /** The least amount of rows for this text area. */
    rows: PropTypes.number,
    /** The max amount of rows for this text area. After
     * the text area has hit this amount of rows, it will begin to
     * scroll instead of expanding.
     */
    rowsMax: PropTypes.number,
    /**
     * Adds an outline around the text area in black color.
     */
    outlined: PropTypes.bool,
    /** Adds a grey isch background */
    filled: PropTypes.bool
};

DigitTextArea.defaultProps = {
    onBlur: () => {},
    upperLabel: "",
    lowerLabel: "",
    name: "",
    error: false,
    errorMessage: null,
    disabled: false,
    outlined: false,
    filled: false,
    rows: 3,
    rowsMax: 6
};

export default DigitTextArea;
