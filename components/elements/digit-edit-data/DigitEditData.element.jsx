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
import { Column, Size } from "../../styles/digit-layout/DigitLayout.styles";

const DigitEditData = ({
    initialValues,
    validationSchema,
    onSubmit,
    keysOrder,
    keysComponentData,
    titleText,
    submitText,
    marginVertical,
    absWidth,
    absHeight,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    width,
    height
}) => (
    <Size
        minWidth={minWidth}
        maxWidth={maxWidth}
        minHeight={minHeight}
        maxHeight={maxHeight}
        absWidth={absWidth}
        absHeight={absHeight}
        width={width}
        height={height}
    >
        <DigitForm
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
            render={({ isSubmitting, isValid }) => (
                <Card
                    minWidth={minWidth}
                    maxWidth={maxWidth}
                    minHeight={minHeight}
                    maxHeight={maxHeight}
                    absWidth={absWidth}
                    absHeight={absHeight}
                    width={width}
                    height={height}
                >
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
                                            component={
                                                keyComponentData.component
                                            }
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
                                            component={
                                                keyComponentData.component
                                            }
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
    </Size>
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
    marginVertical: PropTypes.string,
    /** Sets minWidth, maxWidth and width to absWidth */
    absWidth: PropTypes.string,
    /** Sets minHeight, maxHeight and height to absHeight */
    absHeight: PropTypes.string,
    /** minWidth of the card */
    minWidth: PropTypes.string,
    /** minHeight of the card */
    minHeight: PropTypes.string,
    /** maxWidth of the card */
    maxWidth: PropTypes.string,
    /** maxHeight of the card */
    maxHeight: PropTypes.string,
    /** width of the card */
    width: PropTypes.string,
    /** height of the card */
    height: PropTypes.string
};

DigitEditData.defaultProps = {
    initialValues: {},
    validationSchema: {},
    titleText: "",
    submitText: "",
    marginVertical: "4px",
    absWidth: null,
    absHeight: null,
    minWidth: "300px",
    maxWidth: "300px"
};

export default DigitEditData;
