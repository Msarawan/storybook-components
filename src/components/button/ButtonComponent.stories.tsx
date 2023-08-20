import { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from './ButtonComponent';

export default {
  title: 'Components/ButtonComponent',
  component: ButtonComponent,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof ButtonComponent>;

type Story = StoryObj<typeof ButtonComponent>;

export const PrimaryButton: Story = {
args:{
  label: 'Primary Button',
  variant: 'primary',
  onClick: () => {
    console.log('Primary Button clicked');
  },
  size: "medium",
  backgroundColor: '#0097ff',
 }
}

export const SecondaryButton: Story = {
args: {
  label: 'Secondary Button',
  variant: 'secondary',
  onClick: () => {
    console.log('Secondary Button clicked');
  },
  size: "medium",
  backgroundColor: "#7bff00",
}
}
