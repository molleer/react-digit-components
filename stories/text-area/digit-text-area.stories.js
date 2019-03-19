import {
    boolean,
    number,
    select,
    text,
    withKnobs
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitLayout, DigitProviders, DigitTextArea } from "../../components";
import DigitTextAreaReadme from "../../components/elements/digit-text-area/readme.md";
import StoryDigitTextArea from "./StoryDigitTextArea";
import centered from "@storybook/addon-centered/react";
import { withInfo } from "@storybook/addon-info";
import DigitProvidersDecorator from "../../.storybook/DigitProvidersDecorator";

const styleLabel = "style";
const styleOptions = ["filled", "outlined", "standard"];
const styleDefaultValue = "standard";

storiesOf("Elements", module)
    .addDecorator(withInfo)
    .addDecorator(DigitProvidersDecorator)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add(
        "DigitTextArea",
        () => {
            const upperLabel = text("Upper label", "This is a upperLabel");
            const lowerLabel = text("Lower label", "This is a lowerLabel");
            const error = boolean("Error", false);
            const errorMessage = text(
                "Error message",
                "Buuuh, this is a error"
            );
            const disabled = boolean("disabled", false);
            const style = select(styleLabel, styleOptions, styleDefaultValue);
            const rows = number("Rows", 5, {
                range: true,
                min: 1,
                max: 20,
                step: 1
            });

            const rowsMax = number("Rows max", 10, {
                range: true,
                min: 1,
                max: 20,
                step: 1
            });

            return (
                <DigitLayout.Size width="300px">
                    <StoryDigitTextArea
                        upperLabel={upperLabel}
                        lowerLabel={lowerLabel}
                        error={error}
                        errorMessage={errorMessage}
                        disabled={disabled}
                        style={style}
                        rows={rows}
                        rowsMax={rowsMax}
                    />
                </DigitLayout.Size>
            );
        },
        {
            info: {
                text: DigitTextAreaReadme,
                propTables: [DigitTextArea],
                propTablesExclude: [
                    DigitProviders,
                    DigitLayout.Size,
                    StoryDigitTextArea
                ],
                header: false,
                source: false
            }
        }
    );
