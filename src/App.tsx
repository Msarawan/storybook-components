import {Route,Routes } from "react-router-dom";
import "@patternfly/react-core/dist/styles/base.css";
import { Counter } from './components/counter/Counter';
import { ButtonComponent } from "./components/button/ButtonComponent";
import './App.css';
import {
  Breadcrumb,
  BreadcrumbItem
} from "@patternfly/react-core";


function App() {
  const buttonClick = () =>{
    alert('Button Clicked');
  }

return (
<>
  <Breadcrumb>
    <BreadcrumbItem to="/">Counter Page</BreadcrumbItem>
    <BreadcrumbItem to="/button">Button Page</BreadcrumbItem>
    <BreadcrumbItem to="#" isActive>
      Section landing
    </BreadcrumbItem>
  </Breadcrumb>
     <Routes>
       <Route path="/" element={<Counter initialValue={0} />} />
       <Route path="/button" element={<ButtonComponent label="Click me" variant='primary' size="medium" onClick={buttonClick} />} />
    </Routes>
</>
  );
 
}

export default App;