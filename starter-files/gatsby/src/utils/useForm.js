import { useState } from 'react';

export const useForm = (defaults) => {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    const value = e.type.number ? parseInt(e.target.value) : e.target.value;

    setValues({
      ...values,
      [e.target.name]: value,
    });
  }
  return { values, updateValue };
};
