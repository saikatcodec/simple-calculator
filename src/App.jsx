import { useState } from "react";
import shortid from "shortid";

import InputSection from "./components/input-section/InputSection";
import OperatorSection from "./components/operator-section/OperatorSection";
import HistorySection from "./components/history-section/HistorySection";

const initialInputValues = {
  num1: 0,
  num2: 0,
};

const App = () => {
  const [inputValues, setInputValues] = useState({ ...initialInputValues });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const createHistory = (num1, num2, result, operator) => {
    const historyItem = {
      _id: shortid.generate(),
      num1,
      num2,
      result,
      operator,
      createdAt: new Date(),
    };

    setHistories([historyItem, ...histories]);
  };

  const handleArithmaticOperation = (operator) => {
    const doOps = new Function(
      "operator",
      `return ${inputValues.num1} ${operator} ${inputValues.num2}`
    );

    const calculatedResult = doOps(operator);
    setResult(calculatedResult);

    createHistory(
      inputValues.num1,
      inputValues.num2,
      calculatedResult,
      operator
    );
  };

  const handleClearBtn = (e) => {
    setInputValues({ ...initialInputValues });
    setResult(0);
  };

  const handleRestoreBtn = (num1, num2, result) => {
    setInputValues({ ...inputValues, num1, num2 });
    setResult(result);
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
      <br />
      <HistorySection
        histories={histories}
        handleRestoreBtn={handleRestoreBtn}
      />
    </>
  );
};

export default App;
