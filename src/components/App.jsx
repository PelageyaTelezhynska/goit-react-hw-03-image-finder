import { Component } from 'react';
import { Container } from './Container';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {};
  render() {
    return (
      <Container>
        <GlobalStyle />
        <div>
          <p>hello</p>
        </div>
      </Container>
    );
  }
}
