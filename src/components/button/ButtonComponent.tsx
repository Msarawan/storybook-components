import {FC} from 'react';
import { Button } from '@patternfly/react-core';
import './ButtonComponent.css';

interface ButtonComponentProps {
  label: string;
  variant: 'primary' | 'secondary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
}

export const ButtonComponent:FC<ButtonComponentProps> = ({ label,variant,backgroundColor,size,onClick }) => {
    const buttonClasses = `custom-button ${size ? `custom-button-${size}` : ''}`;
    const buttonStyle = backgroundColor ? { backgroundColor } : {};

  return (
   <div className='button'>
    <Button  variant={variant === 'secondary' ? 'secondary' : 'primary'} onClick={onClick} className={buttonClasses} style={buttonStyle}>
      {label}
    </Button>
   </div>
  );
};

