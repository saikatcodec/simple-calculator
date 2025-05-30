import { useState } from "react";
import InputSection from "./components/input-section/InputSection";
import OperatorSection from "./components/operator-section/OperatorSection";

const initialInputValues = {
  num1: 0,
  num2: 0,
};

const App = () => {
  const [inputValues, setInputValues] = useState({ ...initialInputValues });
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleArithmaticOperation = (operator) => {
    const doOps = new Function(
      "operator",
      `return ${inputValues.num1} ${operator} ${inputValues.num2}`
    );

    const calculatedResult = doOps(operator);
    setResult(calculatedResult);
  };

  const handleClearBtn = (e) => {
    setInputValues({ ...initialInputValues });
    setResult(0);
  };

  return (
    <>
      <h2>Calculator</h2>
      <h3>Result: {result}</h3>
      <InputSection values={inputValues} handleChange={handleInputChange} />
      <br />
      <OperatorSection
        handleArithmaticOperation={handleArithmaticOperation}
        handleClearBtn={handleClearBtn}
      />
    </>
  );
};

export default App;
