import { Meta,StoryObj } from "@storybook/react"
import { Counter } from './Counter';

export default {
    title: 'Counter',
    component: Counter,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta<typeof Counter>;
  
type Story = StoryObj<typeof Counter>;

export const InitialValueZero: Story = {
 args:{
    initialValue : 0  
 }
}

export const InitialValueTen: Story = {
    args: {
        initialValue : 10  
    }
 }
