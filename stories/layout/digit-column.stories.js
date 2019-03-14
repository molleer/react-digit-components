import React from "react";

import {
    withKnobs,
    select,
    text,
    boolean,
    number
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import DigitColumnReadme from "../../components/styles/digit-layout/column-readme.md";
import {
    Column,
    Size,
    Fill,
    Center
} from "../../components/styles/digit-layout/DigitLayout.styles";
import { Heading5 } from "../../components/styles/digit-text/DigitText.styles";
import styled from "styled-components";
import DigitProviders from "../../components/declaratives/digit-providers";
import DummyItem from "./DummyItem";
import BorderSize from "./BorderSize";

const DigitColumnStory = storiesOf("Layout", module);

DigitColumnStory.addDecorator(withKnobs);

const alignLabel = "Align";
const alignOptions = ["Top", "Bottom", "None"];
const alignDefaultValue = "None";

DigitColumnStory.add(
    "DigitColumn",
    () => {
        const align = select(alignLabel, alignOptions, alignDefaultValue);
        const reverse = boolean("Reverse", false);
        const center = boolean("Center", false);
        const centerHorizontal = boolean("Center Horizontal", false);
        const centerVertical = boolean("Center Vertical", false);
        const marginVertical = number("Margin vertical", 8, {
            range: true,
            min: 0,
            max: 50,
            step: 1
        });

        return (
            <DigitProviders>
                <BorderSize absWidth="500px" absHeight="500px">
                    <Column
                        topAlign={align === "Top"}
                        bottomAlign={align === "Bottom"}
                        reverse={reverse}
                        center={center}
                        centerHorizontal={centerHorizontal}
                        centerVertical={centerVertical}
                        fillElement
                        marginVertical={marginVertical + "px"}
                    >
                        <DummyItem text="1" color="blue" />
                        <DummyItem text="2" color="yellow" />
                        <DummyItem text="3" color="green" />
                        <DummyItem text="4" color="red" />
                    </Column>
                </BorderSize>
            </DigitProviders>
        );
    },
    {
        info: {
            text: DigitColumnReadme,
            propTables: [Column],
            propTablesExclude: [DigitProviders, DummyItem, BorderSize]
        }
    }
);
