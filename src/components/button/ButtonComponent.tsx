import {FC} from 'react';
import { Button } from '@patternfly/react-core';
import './ButtonComponent.css';

interface ButtonComponentProps {
  label: string;
  variant: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
}

export const ButtonComponent:FC<ButtonComponentProps> = ({ label,variant,size,onClick }) => {
    const buttonClasses = `custom-button ${size ? `custom-button-${size}` : ''}`;
    const buttonStyles = {
      backgroundColor: variant === 'primary' ? '#0097ff' : '#7bff00',
    };
  
  return (
   <div className='button'>
    <Button style={buttonStyles} className={buttonClasses} onClick={onClick}>
      {label}
    </Button>
   </div>
  );
};

