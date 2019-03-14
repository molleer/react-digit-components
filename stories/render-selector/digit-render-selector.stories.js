import { number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DigitProviders, DigitRenderSelector } from "../../components";
import DigitRenderSelectorReadme from "../../components/declaratives/digit-render-selector/readme.md";
import { Column } from "../../components/styles/digit-layout/DigitLayout.styles";
import {
    Text,
    Title
} from "../../components/styles/digit-text/DigitText.styles";
import centered from "@storybook/addon-centered/react";

const DigitRenderSelectorStory = storiesOf("Declaratives", module);

DigitRenderSelectorStory.addDecorator(centered);
DigitRenderSelectorStory.addDecorator(withKnobs);

DigitRenderSelectorStory.add(
    "DigitRenderSelector",
    () => {
        const activeRender = number("What render", 0, {
            range: false,
            min: 0,
            max: 2,
            step: 1
        });

        return (
            <Column>
                <DigitRenderSelector
                    activeRender={activeRender}
                    renders={[
                        () => <Text text="Hej" />,
                        () => <Title text="Lol" />,
                        () => (
                            <Column>
                                <Text text="Hej" />
                                <Title text="Lol" />
                            </Column>
                        )
                    ]}
                />
            </Column>
        );
    },
    {
        info: {
            text: DigitRenderSelectorReadme,
            propTables: [DigitRenderSelector],
            propTablesExclude: [DigitProviders]
        }
    }
);
