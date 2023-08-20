import { FC,useState} from 'react';
import { Button, TextContent,Text,TextVariants, } from '@patternfly/react-core';

interface CounterProps {
  initialValue: number
 }

export const Counter: FC<CounterProps> = ({initialValue}) => {
  const [count , setCount] = useState<number>(initialValue);
  const incrementCount = () =>{
    setCount (count  + 1)
  }

  const decrementCount = () =>{
    setCount ( count - 1)
  }

  const resetCount = () =>{
    setCount (initialValue)
  }

  return (
    <div className='counter'>
      <TextContent>
        <Text component={TextVariants.h1}>
           Count - {count}
        </Text>
      </TextContent>
      <br/>
      <Button variant="primary" onClick={incrementCount}>Increment</Button>{' '}
      <Button variant="primary" onClick={decrementCount}>Decrement</Button>{' '}
      <Button variant="primary" onClick={resetCount}>Reset</Button>
    </div>
  )
}