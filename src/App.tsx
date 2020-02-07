import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);
library.add(faStar);
library.add(faTimes);

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  render(): React.ReactElement {
    return <p>Test</p>;
  }
}

export default App;
