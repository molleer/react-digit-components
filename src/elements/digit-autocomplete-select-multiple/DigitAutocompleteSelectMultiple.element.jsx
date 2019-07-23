import React, { useState } from "react";
import Select from "react-select";
import useTheme from "@material-ui/styles/useTheme";
import withStyles from "@material-ui/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import CancelIcon from "@material-ui/icons/Cancel";
import DigitChip from "../digit-chip";
import { Text } from "../../styles/digit-text/DigitText.styles";
import find from "lodash/find";

const styles = {
    container: {
        display: "flex",
        height: 250
    },
    input: {
        display: "flex",
        flex: "1 1 auto",
        height: "100%",
        minWidth: "250px"
    },
    valueContainer: {
        display: "flex",
        flexWrap: "wrap",
        flex: 1,
        alignItems: "center",
        overflow: "hidden"
    },
    noOptionsMessage: {
        padding: `4px 4px`
    },
    paper: {
        position: "absolute",
        zIndex: 1000,
        top: "66%",
        bottom: "auto"
    }
};

function NoOptionsMessage(props) {
    return <Text text={props.children} />;
}

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}

function Control(props) {
    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: props.selectProps.classes.input,
                    inputRef: props.innerRef,
                    children: props.children,
                    ...props.innerProps
                }
            }}
            {...props.selectProps.textFieldProps}
        />
    );
}

function Option(props) {
    return (
        <MenuItem
            buttonRef={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}

function SingleValue(props) {
    return <Text text={props.children} />;
}

function ValueContainer(props) {
    return (
        <div className={props.selectProps.classes.valueContainer}>
            {props.children}
        </div>
    );
}

function MultiValue(props) {
    return (
        <DigitChip
            label={props.children}
            onDelete={!props.isDisabled ? props.removeProps.onClick : null}
            deleteIcon={<CancelIcon {...props.removeProps} />}
        />
    );
}

function Menu(props) {
    return (
        <Paper
            square
            className={props.selectProps.classes.paper}
            {...props.innerProps}
        >
            {props.children}
        </Paper>
    );
}

const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    SingleValue,
    ValueContainer
};

const DigitAutocompleteSelectMultiple = ({
    classes,
    value,
    onChange,
    upperLabel,
    lowerLabel,
    error,
    errorMessage,
    name,
    selectableValues,
    disabled
}) => {
    const theme = useTheme();
    const [state, setState] = useState({
        menuIsOpen: false
    });

    function onMenuIsOpenChange(open) {
        setState({
            menuIsOpen: open
        });
    }

    const { menuIsOpen } = state;

    const selectStyles = {
        container: () => ({
            display: "flex",
            flex: 1
        }),
        input: base => ({
            ...base,
            color: theme.palette.text.primary
        })
    };

    const selectedValueObjects = value.map(value =>
        find(selectableValues, { value })
    );

    return (
        <Select
            name={name}
            classes={classes}
            styles={selectStyles}
            options={selectableValues}
            components={components}
            value={selectedValueObjects}
            onChange={e => {
                onChange({
                    target: {
                        value: e.map(value => value.value)
                    }
                });
            }}
            isMulti
            placeholder=""
            menuIsOpen={menuIsOpen}
            onMenuOpen={() => {
                onMenuIsOpenChange(true);
            }}
            onMenuClose={() => {
                onMenuIsOpenChange(false);
            }}
            isDisabled={disabled}
            textFieldProps={{
                label: upperLabel,
                error: error,
                disabled: disabled,
                helperText:
                    error && errorMessage != null ? errorMessage : lowerLabel,
                InputLabelProps: {
                    shrink:
                        (value != null && value.length > 0) ||
                        state.multipleOpen
                }
            }}
        />
    );
};

export default withStyles(styles)(DigitAutocompleteSelectMultiple);
