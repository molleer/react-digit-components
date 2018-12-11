import PropTypes from "prop-types";
import React from "react";
import {
    Card,
    CardBody,
    CardButtons,
    CardTitle
} from "../../styles/digit-design/DigitDesign.styles";
import DigitButton from "../digit-button";
import DigitForm from "../digit-form";
import DigitFormField from "../digit-form-field";
import DigitFormFieldArray from "../digit-form-field-array";
import { Column } from "../../styles/digit-layout/DigitLayout.styles";

const DigitEditData = ({
    initialValues,
    validationSchema,
    onSubmit,
    keysOrder,
    keysComponentData,
    titleText,
    submitText,
    marginVertical
}) => (
    <DigitForm
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ isSubmitting, isValid }) => (
            <Card minWidth="300px" maxWidth="600px">
                <CardTitle text={titleText} />
                <CardBody>
                    <Column marginVertical={marginVertical}>
                        {keysOrder.map(key => {
                            const keyComponentData = keysComponentData[key];
                            if (!keyComponentData.array) {
                                return (
                                    <DigitFormField
                                        key={key}
                                        name={key}
                                        component={keyComponentData.component}
                                        componentProps={
                                            keyComponentData.componentProps
                                        }
                                    />
                                );
                            } else {
                                return (
                                    <DigitFormFieldArray
                                        key={key}
                                        name={key}
                                        component={keyComponentData.component}
                                        componentProps={
                                            keyComponentData.componentProps
                                        }
                                    />
                                );
                            }
                        })}
                    </Column>
                </CardBody>
                <CardButtons reverseDirection>
                    <DigitButton
                        disabled={isSubmitting || !isValid}
                        submit
                        text={submitText}
                        raised
                        primary
                    />
                </CardButtons>
            </Card>
        )}
    />
);

DigitEditData.displayName = "DigitEditData";
DigitEditData.propTypes = {
    initialValues: PropTypes.object,
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    keysOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
    keysComponentData: PropTypes.objectOf(
        PropTypes.shape({
            component: PropTypes.func.isRequired,
            componentProps: PropTypes.object
        })
    ).isRequired,
    titleText: PropTypes.string,
    submitText: PropTypes.string,
    marginVertical: PropTypes.string
};

DigitEditData.defaultProps = {
    initialValues: {},
    validationSchema: {},
    titleText: "",
    submitText: "",
    marginVertical: "4px"
};

export default DigitEditData;
