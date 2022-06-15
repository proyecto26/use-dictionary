<p>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT license" />
  </a>
  <a href="https://npmjs.org/package/use-dictionary">
    <img src="http://img.shields.io/npm/v/use-dictionary.svg" alt="Current npm package version" />
  </a>
  <a href="https://github.com/proyecto26/use-dictionary/graphs/commit-activity">
    <img src="https://img.shields.io/badge/Maintained%3F-yes-brightgreen.svg" alt="Maintenance" />
  </a>
  <a href="https://opencollective.com/proyecto26" alt="Financial Contributors on Open Collective">
    <img src="https://opencollective.com/proyecto26/all/badge.svg?label=financial+contributors" />
  </a>
  <a href="https://npmjs.org/package/use-dictionary">
    <img src="http://img.shields.io/npm/dm/use-dictionary.svg" alt="Downloads" />
  </a>
  <a href="https://npmjs.org/package/use-dictionary">
    <img src="http://img.shields.io/npm/dt/use-dictionary.svg?label=total%20downloads" alt="Total downloads" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=jdnichollsc">
    <img src="https://img.shields.io/twitter/follow/jdnichollsc.svg?label=Follow%20@jdnichollsc" alt="Follow @jdnichollsc" />
  </a>
</p>

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

Donate **Ethereum**, **ADA**, **BNB**, **SHIBA**, **USDT**, **DOGE**:

![Wallet address](https://user-images.githubusercontent.com/2154886/123501719-84bf1900-d60c-11eb-882c-98a499cea323.png)

> Wallet address: 0x3F9fA8021B43ACe578C2352861Cf335449F33427

Please let us know your contributions! 🙏

## License ⚖️
This repository is available under the [MIT License](https://github.com/proyecto26/use-dictionary/blob/develop/LICENSE).

## Happy coding 💯
Made with ❤️

<img width="150px" src="https://avatars0.githubusercontent.com/u/28855608?s=200&v=4" align="right">
