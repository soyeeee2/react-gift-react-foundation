import React from "react";
import "modern-normalize/modern-normalize.css"; // Example import for normalize.css
import "./App.css"; // Example import for custom CSS styles
import Button, { ButtonProps } from "@stories/button/Button";
import Input, { InputProps } from "@stories/input/Input";

function App() {
    // Define button props
    const kakaoSmall: ButtonProps = {
        theme: "kakao",
        size: "small",
        label: "Click me",
        onClick: () => {
            alert("kakaoSmall clicked");
        },
    };

    const kakaoLarge: ButtonProps = {
        theme: "kakao",
        size: "large",
        label: "Click me",
        onClick: () => {
            alert("kakaoLarge clicked");
        },
    };

    const outlineSmall: ButtonProps = {
        theme: "outline",
        size: "small",
        label: "Click me",
        onClick: () => {
            alert("outlineSmall clicked");
        },
    };

    const outlineLarge: ButtonProps = {
        theme: "outline",
        size: "large",
        label: "Click me",
        onClick: () => {
            alert("outlineLarge clicked");
        },
    };

    const blackSmall: ButtonProps = {
        theme: "black",
        size: "small",
        label: "Click me",
        onClick: () => {
            alert("blackSmall clicked");
        },
    };

    const blackLarge: ButtonProps = {
        theme: "black",
        size: "large",
        label: "Click me",
        onClick: () => {
            alert("blackLarge clicked");
        },
    };

    const lightGraySmall: ButtonProps = {
        theme: "lightGray",
        size: "small",
        label: "Click me",
        onClick: () => {
            alert("lightGraySmall clicked");
        },
    };

    const lightGrayLarge: ButtonProps = {
        theme: "lightGray",
        size: "large",
        label: "Click me",
        onClick: () => {
            alert("lightGrayLarge clicked");
        },
    };

    // Define input props
    const inputOutlineSmall: InputProps = {
        theme: "outline",
        size: "small",
        label: "Username ",
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target.value); // Example onChange handler
        },
    };

    const inputOutlineLarge: InputProps = {
        theme: "outline",
        size: "large",
        label: "Username ",
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target.value); // Example onChange handler
        },
    };

    const inputBlackSmall: InputProps = {
        theme: "black",
        size: "small",
        label: "Username ",
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target.value); // Example onChange handler
        },
    };

    const inputBlackLarge: InputProps = {
        theme: "black",
        size: "large",
        label: "Username ",
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target.value); // Example onChange handler
        },
    };

    const inputLightGraySmall: InputProps = {
        theme: "lightGray",
        size: "small",
        label: "Username ",
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target.value); // Example onChange handler
        },
    };

    const inputLightGrayLarge: InputProps = {
        theme: "lightGray",
        size: "large",
        label: "Username ",
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target.value); // Example onChange handler
        },
    };

    return (
        <div className="App">
            <div className="btnWrapS">
                <Button {...kakaoSmall} />
                <Button {...outlineSmall} />
                <Button {...blackSmall} />
                <Button {...lightGraySmall} />
            </div>
            <div className="btnWrapL">
                <Button {...kakaoLarge} />
                <Button {...outlineLarge} />
                <Button {...blackLarge} />
                <Button {...lightGrayLarge} />
            </div>
            <div className="inputWrap">
                <Input {...inputOutlineSmall} />
                <Input {...inputOutlineLarge} />
                <Input {...inputBlackSmall} />
                <Input {...inputBlackLarge} />
                <Input {...inputLightGraySmall} />
                <Input {...inputLightGrayLarge} />
            </div>
        </div>
    );
}

export default App;
