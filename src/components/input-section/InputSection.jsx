const InputSection = ({ values, handleChange }) => {
  return (
    <form>
      <div>
        <input
          name="num1"
          type="number"
          value={values.num1}
          onChange={handleChange}
        />
        <input
          name="num2"
          type="number"
          value={values.num2}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default InputSection;
