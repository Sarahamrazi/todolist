import { useEffect } from "react";
import Select from "react-select";

const Filter = ({ onFilter, filterValue, setFilterValue }) => {
  const options = [
    { value: "", label: "All ..." },
    { value: "Completed", label: "Completed" },
    { value: "Not completed", label: "Not completed" },
  ];

  const changeHandler = (value) => {
    console.log(value);
    setFilterValue(value);
    onFilter(value);
  };
  return (
    <Select value={filterValue} onChange={changeHandler} options={options} />
  );
};

export default Filter;
