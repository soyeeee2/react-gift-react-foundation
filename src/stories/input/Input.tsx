// Input.tsx

import React, { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";

type InputSize = "large" | "small" | "responsive";

interface InputStyledProps {
    theme: "outline" | "black" | "lightGray" | "darkGray";
    inputSize: InputSize;
}

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    theme: "outline" | "black" | "lightGray" | "darkGray";
    size: InputSize;
    label?: string;
}

const InputStyled = styled.input<InputStyledProps>`
    background-color: ${(props) =>
        props.theme === "outline"
            ? "transparent"
            : props.theme === "black"
              ? "black"
              : props.theme === "lightGray"
                ? "lightgray"
                : props.theme === "darkGray"
                  ? "darkgray"
                  : "yellow"};
    outline: ${(props) =>
        props.theme === "outline" ? "1px solid lightGray" : "none"};
    color: ${(props) => (props.theme === "black" ? "white" : "black")};
    width: ${(props) => (props.inputSize === "small" ? "100px" : "160px")};
    height: 30px;
    border: none;
    font-size: 16px;
    border-radius: 5px;
    @media (max-width: 400px) {
        height: 40px;
    }
`;

const InputComponent = ({ theme, size, label, ...rest }: InputProps) => (
    <div>
        {label && <label>{label}</label>}
        <InputStyled theme={theme} inputSize={size} {...rest} />
    </div>
);

export default InputComponent;
