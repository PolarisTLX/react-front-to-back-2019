import React, { Component } from 'react';
import './App.css';

class App extends Component {

  foo_end_class = () => 'Bar from class';

  render() {

    const name = "John Doe";

    const foo_end = () => 'Bar';

    const loading = false;

    // if(loading) {
    //   return <h3>Loading...</h3>
    // }

    const showName = true;

    return (
      <div className="App">
        <h1>My App</h1>
        {loading 
          ? <h3>Loading...</h3> 
          : <div>
              <h2>Hello {name} {1 + 3}</h2>
              <h2>Hello {name.toUpperCase()} </h2>
              <h2>Foo {foo_end()}</h2>
              <h2>Part of the class: Foo {this.foo_end_class()}</h2>
              <hr></hr>
              <h2>This name showing up is conditional made with double && instead of ternary: {showName && name}</h2>
            </div>
        }        
      </div>
    );
  }  
}

export default App;
