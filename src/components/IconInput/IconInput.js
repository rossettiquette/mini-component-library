import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
    small: {
        "--font-size": 1 + "rem",
        "--border-bottom": "1px solid black",
    },
    large: {
        "--font-size": 18 / 16 + "rem",
        "--border-bottom": "2px solid black",
    },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
    const styles = SIZES[size];
    return (
        <Wrapper width={width} style={styles}>
            <label for={label}>
                <Icon id={icon} />
                <VisuallyHidden>{label}</VisuallyHidden>
            </label>
            <StyledInput
                type="text"
                id={label}
                name={label}
                placeholder={placeholder}
            ></StyledInput>
            <InputFocusWrapper></InputFocusWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    width: ${(props) => props.width + "px"};
    border-bottom: var(--border-bottom);
`;

const StyledInput = styled.input`
    font-size: var(--font-size);
    font-weight: 600;
    width: 100%;
    padding-left: 0.5rem;
    border: none;
    outline: none;

    &::placeholder {
        font-weight: 400;
        color: ${COLORS.gray500};
    }
`;

const InputFocusWrapper = styled.div`
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    ${StyledInput}:focus + & {
        outline: 5px auto -webkit-focus-ring-color;
        outline-offset: 4px;
    }
`;

export default IconInput;
