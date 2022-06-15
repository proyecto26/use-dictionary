/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useRef, useReducer, useCallback, useEffect, Reducer } from 'react';

enum Action {
  UpdateValue,
  ClearValue,
  Clear,
};

type DictionaryAction<T, K extends keyof T> =
  | { type: Action.UpdateValue; key: K; value: T[K] }
  | { type: Action.ClearValue; key: K }
  | { type: Action.Clear }

const reducer = <T, K extends keyof T>(
  state: T,
  action: DictionaryAction<T, K>
): T => {
  switch (action.type) {
    case Action.UpdateValue:
      return { ...state, [action.key]: action.value };
    case Action.ClearValue:
      return { ...state, [action.key]: undefined };
    case Action.Clear:
      return {} as T;
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

  const dispatchOnMounted: typeof dispatch = useCallback((action) => {
    if (mounted.current) dispatch(action);
  }, [mounted]);

  const onUpdateValue = useCallback(function (
    key: K,
    value: T[K]
  ) {
    dispatchOnMounted({ type: Action.UpdateValue, key, value });
  }, []);

  const onClearValue = useCallback(function (key: K) {
    dispatchOnMounted({ type: Action.ClearValue, key });
  }, []);

  const onClear = useCallback(function () {
    dispatchOnMounted({ type: Action.Clear });
  }, []);

  return {
    state,
    onUpdateValue,
    onClearValue,
    onClear,
  };
}
