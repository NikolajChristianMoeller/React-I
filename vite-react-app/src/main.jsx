import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header name="Hans" />
        <Greeting />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Hej {this.props.name}!</p>
      </header>
    );
  }
}

class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    hours < 12
      ? (timeOfDay = "morgen")
      : hours >= 12 && hours < 17
        ? (timeOfDay = "eftermiddag")
        : (timeOfDay = "aften");

    return <h1>God{timeOfDay} og velkommen til 🎉</h1>;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
