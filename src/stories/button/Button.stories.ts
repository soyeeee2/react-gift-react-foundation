import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
    title: "COMMON/Button",
    component: Button,
    tags: ["autodocs"],
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "버튼",
        onClick: () => {
            alert("버튼 클릭!");
        },
        theme: "kakao",
        size: "large",
    },
};
