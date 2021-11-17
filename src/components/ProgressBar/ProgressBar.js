/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
    small: {
        "--height": 8 + "px",
        "--borderRadius": 4 + "px",
        "--border": "none",
    },
    medium: {
        "--height": 12 + "px",
        "--borderRadius": 4 + "px",
        "--border": "none",
    },
    large: {
        "--height": 24 + "px",
        "--borderRadius": 8 + "px",
        "--border": "4px solid transparent",
    },
};

const ProgressBar = ({ value, size }) => {
    const styles = SIZES[size];
    return (
        <Wrapper
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
        >
            <ProgressBackground style={styles}>
                <ProgressFill value={value} />
            </ProgressBackground>
            <VisuallyHidden>{value}</VisuallyHidden>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 370px;
`;

const ProgressBackground = styled.div`
    position: relative;
    width: 100%;
    height: var(--height);
    border: var(--border);
    background-color: ${COLORS.gray50};
    border-radius: var(--borderRadius);
    box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
    overflow: hidden;
`;

const ProgressFill = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${COLORS.primary};
    width: ${(props) => props.value + "%"};
    height: 100%;
`;
export default ProgressBar;
