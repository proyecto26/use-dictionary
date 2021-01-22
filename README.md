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
    onUpdateValue, // Update a value from the dictionary
    onClearValue   // Remove a value from the dictionary
    onClear        // Remove all values from the dictionary
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

## Contributing ✨
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.  
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated** ❤️.  
You can learn more about how you can contribute to this project in the [contribution guide](https://github.com/proyecto26/use-dictionary/blob/develop/CONTRIBUTING.md).

## Supporting 🍻
I believe in Unicorns 🦄
Support [me](http://www.paypal.me/jdnichollsc/2), if you do too.

## License ⚖️
This repository is available under the [MIT License](https://github.com/proyecto26/use-dictionary/blob/develop/LICENSE).

## Happy coding 💯
Made with ❤️

<img width="150px" src="https://avatars0.githubusercontent.com/u/28855608?s=200&v=4" align="right">
