import { useRef, useReducer, useCallback, useEffect, Reducer } from 'react';

enum Action {
  UpdateValue,
  CleanValue
};

type DictionaryAction<T, K extends keyof T> =
  | { type: Action.UpdateValue, key: K, value: T[K] }
  | { type: Action.CleanValue, key: K }

const reducer = <T, K extends keyof T>(
  state: T,
  action: DictionaryAction<T, K>
) => {
  switch (action.type) {
    case Action.UpdateValue:
      return { ...state, [action.key]: action.value };
    case Action.CleanValue:
      return { ...state, [action.key]: undefined };
    default:
      return state;
  }
}

export function useDictionary<T, K extends keyof T> (initialState: T) {
  const mounted = useRef(false);
  const [state, dispatch] = useReducer<Reducer<T, DictionaryAction<T, K>>>(reducer, initialState);

  useEffect(function() {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);

  const onUpdateValue = useCallback(function (
    key: K,
    value: T[K]
  ) {
    if (mounted.current)
      dispatch({ type: Action.UpdateValue, key, value });
  }, [mounted]);

  const onCleanValue = useCallback(function (
    key: K
  ) {
    if (mounted.current)
      dispatch({ type: Action.CleanValue, key });
  }, [mounted]);

  return {
    state,
    onUpdateValue,
    onCleanValue
  };
}
