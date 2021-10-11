import { useState } from 'react';
import styled from 'styled-components';
import FormStep1 from './components/form/formStep1/FormStep1';
import FormStep2 from './components/form/FormStep2';

const AppContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const AppHeader = styled.div`
  font-size: calc(10px + 2vmin);
`;

const App = () => {
  const [step, setStep] = useState<number>(1);
  const [formValues, setFormValues] = useState([]);
  return (
    <AppContainer>
      <AppHeader>
        <h1>Dummy JSON Generator</h1>
      </AppHeader>
      {step === 1 && (
        <FormStep1
          setStep={setStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )}
      {step === 2 && (
        <FormStep2
          setStep={setStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )}
    </AppContainer>
  );
};

export default App;
