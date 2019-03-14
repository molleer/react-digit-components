import { action } from "@storybook/addon-actions";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitCheckbox, DigitProviders } from "../../components";
import DigitCheckboxReadme from "../../components/elements/digit-checkbox/readme.md";
import StoryDigitCheckbox from "./StoryDigitCheckbox";
import centered from "@storybook/addon-centered/react";

const colorLabel = "color";
const colorOptions = ["primary", "secondary", "none"];
const colorDefaultValue = "none";

const DigitCheckboxStory = storiesOf("Elements", module);

DigitCheckboxStory.addDecorator(centered);
DigitCheckboxStory.addDecorator(withKnobs);

DigitCheckboxStory.add(
    "DigitCheckbox",
    () => {
        const color = select(colorLabel, colorOptions, colorDefaultValue);
        const label = text("Label", "This is a label");
        const disabled = boolean("Disabled", false);
        const error = boolean("Error", false);
        const errorMessage = text("Error message", "Something went wrong");

        return (
            <DigitProviders>
                <StoryDigitCheckbox
                    color={color}
                    label={label}
                    disabled={disabled}
                    error={error}
                    errorMessage={errorMessage}
                    onChange={e => {
                        action("toggled")(e);
                    }}
                    onBlur={e => {
                        action("blur")(e);
                    }}
                />
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitCheckboxReadme,
            propTables: [DigitCheckbox],
            propTablesExclude: [DigitProviders, StoryDigitCheckbox]
        }
    }
);
