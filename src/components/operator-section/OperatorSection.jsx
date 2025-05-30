import shortid from "shortid";

function OperatorSection({ handleArithmaticOperation, handleClearBtn }) {
  const operators = [
    {
      _id: shortid.generate(),
      text: "+",
      onclick: () => handleArithmaticOperation("+"),
    },
    {
      _id: shortid.generate(),
      text: "-",
      onclick: () => handleArithmaticOperation("-"),
    },
    {
      _id: shortid.generate(),
      text: "*",
      onclick: () => handleArithmaticOperation("*"),
    },
    {
      _id: shortid.generate(),
      text: "/",
      onclick: () => handleArithmaticOperation("/"),
    },
    {
      _id: shortid.generate(),
      text: "%",
      onclick: () => handleArithmaticOperation("%"),
    },
    {
      _id: shortid.generate(),
      text: "Clear",
      onclick: handleClearBtn,
    },
  ];

  return (
    <div>
      {operators.map((operator) => (
        <button key={operator._id} onClick={operator.onclick}>
          {operator.text}
        </button>
      ))}
    </div>
  );
}

export default OperatorSection;
