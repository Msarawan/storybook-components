import { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from './ButtonComponent';
import { Primary, Secondary } from '../../stories/Button.stories';

export default {
  title: 'Components/ButtonComponent',
  component: ButtonComponent,
} as Meta<typeof ButtonComponent>;

type Story = StoryObj<typeof ButtonComponent>;

export const PrimaryButton: Story = {
args:{
  label: 'Primary Button',
  onClick: () => {
    console.log('Primary Button clicked');
  },
  size: "medium",
  backgroundColor: "blue"
 }
}

export const SecondaryButton: Story = {
args: {
  label: 'Secondary Button',
  onClick: () => {
    console.log('Secondary Button clicked');
  },
  size: "medium",
}
}
