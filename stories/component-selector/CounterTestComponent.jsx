import React from "react";
import {
    Column,
    Center
} from "../../src/styles/digit-layout/DigitLayout.styles";
import { Text } from "../../src/styles/digit-text/DigitText.styles";
import { DigitButton } from "../../src";

class CounterTestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increaseCounter = () => {
        this.setState(state => ({
            counter: state.counter + 1
        }));
    };

    render() {
        return (
            <Column>
                <Text text={"" + this.state.counter} />
                <Center>
                    <DigitButton
                        raised
                        primary
                        text="Increase"
                        onClick={this.increaseCounter}
                    />
                </Center>
            </Column>
        );
    }
}

export default CounterTestComponent;