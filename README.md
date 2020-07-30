# useDictionary
A React useReducer() hook to use dictionaries (keys and values) 🔑

## Getting started

```tsx
const App: React.FC = () => {

  const initialState = {
    id: '',
    name: '',
    password: '',
    termsAndConditions: false,
  };
  const {
    state,
    onUpdateValue
  } = useDictionary(initialState);

  const onSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    console.log('Create User!', state);
  }, [state]);
  
  return (
    <form onSubmit={onSubmit}>
      <label>
        Document:
        <input
          type="text"
          value={state.id}
          onChange={(e) => onUpdateValue('id', e.target?.value)}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          value={state.name}
          onChange={(e) => onUpdateValue('name', e.target?.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={state.password}
          onChange={(e) => onUpdateValue('password', e.target?.value)}
        />
      </label>
      <label>
        Accept terms and conditions:
        <input
          type="checkbox"
          checked={state.termsAndConditions}
          onChange={(e) => onUpdateValue('termsAndConditions', e.target?.checked)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```

## Supporting 🍻
I believe in Unicorns 🦄
Support [me](http://www.paypal.me/jdnichollsc/2), if you do too.

## Happy coding 💯
Made with ❤️

<img width="150px" src="https://avatars0.githubusercontent.com/u/28855608?s=200&v=4" align="right">
