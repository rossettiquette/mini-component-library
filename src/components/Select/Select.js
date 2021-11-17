import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            <MySelect value={value} onChange={onChange}>
                {children}
            </MySelect>
            <SelectHeader>
                {displayedValue}
                <MyIcon id="chevron-down" />
            </SelectHeader>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: max-content;
`;

const MySelect = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
`;

const SelectHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${COLORS.gray50};
    color: ${COLORS.gray700};
    padding: 12px 16px;
    border-radius: 8px;
    ${MySelect}:hover + & {
        color: ${COLORS.black};
    }

    ${MySelect}:focus + & {
        -webkit-appearance: none;
        outline: 5px auto -webkit-focus-ring-color;
    } ;
`;

const MyIcon = styled(Icon)`
    height: 100%;
    margin-left: 24px;
`;

export default Select;
