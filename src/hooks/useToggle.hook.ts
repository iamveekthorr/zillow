import { useState, useCallback } from 'react';

const useToggle = (initialState = false): [boolean, () => void] => {
  const [toggle, setToggle] = useState<boolean>(initialState);

  const doToggle = useCallback((): void => setToggle((prev) => !prev), []);

  return [toggle, doToggle];
};
export default useToggle;
