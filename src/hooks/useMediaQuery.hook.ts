import { useState } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect.hook';

const useMediaQuery = (query: string): [boolean, boolean] => {
  //Check if the window object exists and it has the matchMedia method on it
  const supportsMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  const [isComponentMounted, setIsComponentMounted] = useState<boolean>(false);
  //Get the mediaQueryList
  const mediaQueryList = supportsMatchMedia ? window.matchMedia(query) : null;

  const [match, setMatch] = useState(!!mediaQueryList?.matches);

  useIsomorphicLayoutEffect(() => {
    setIsComponentMounted(true);
    //Break out of the effect if supportsMatchMedia is false or mediaQueryList is null
    if (!supportsMatchMedia || !mediaQueryList) return;

    const handler = () => setMatch(!!mediaQueryList.matches);

    mediaQueryList.addEventListener('change', handler);

    return () => mediaQueryList.removeEventListener('change', handler);
  }, [mediaQueryList, supportsMatchMedia]);

  return [match, isComponentMounted];
};

export default useMediaQuery;
