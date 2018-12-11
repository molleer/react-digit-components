import React from "react";
import { DigitTimePicker } from "../../components";

class StoryDigitTimePicker extends React.Component {
    state = {
        date: null
    };

    onTimeChanged = newDate => {
        this.setState({
            date: newDate
        });
    };

    render() {
        const { date } = this.state;
        const {
            upperLabel,
            style,
            lowerLabel,
            error,
            errorMessage
        } = this.props;

        return (
            <DigitTimePicker
                lowerLabel={lowerLabel}
                error={error}
                errorMessage={errorMessage}
                outlined={style === "outlined"}
                filled={style === "filled"}
                upperLabel={upperLabel}
                value={date}
                onChange={this.onTimeChanged}
            />
        );
    }
}

export default StoryDigitTimePicker;
