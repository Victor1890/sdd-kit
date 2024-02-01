import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "../components/select";

const meta = {
  title: "Example/Select",
  tags: ["autodocs"],
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  {
    label: "Opción 1",
    value: "option1",
  },
  {
    label: "Opción 2",
    value: "option2",
  },
  {
    label: "Opción 3",
    value: "option3",
  },
  {
    label: "Opción 4",
    value: "option4",
  },
];

export const playground: Story = {
  args: {
    options: options,
    label: "Seleccione una opción",
    value: "option1",
    onChange: (v) => {
      console.log(v);
    },
  },
};
