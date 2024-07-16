import React, { Component } from 'react';

import Context, { initialContext } from './context/index.js';

import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import Print from './components/Print.jsx';
import Footer from './components/Footer.jsx';

import "./index.css";

export default class App extends Component {
  state = { ...initialContext };

  setContext = (newContext, callback) => {
    this.setState({ ...this.state, ...newContext }, callback);
  };

  demoData = async () => {
    const response = await fetch('/demo.json');
    const data = await response.json();
    const foldersToPrint = data.folders.map(({ id }) => id);

    const file = {
      name: 'demo.json',
      lastModified: 1576401686010,
      size: 15941
    };

    this.setState({ data, file, foldersToPrint });
  };

  componentDidMount() {
    this.setState({ setContext: this.setContext });

    if (window.location.search.includes('demo')) {
      this.demoData();
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <main className="font-body leading-relaxed min-h-screen flex flex-col">
          <Header />
          <Intro />
          <Print />
          <Footer />
        </main>
      </Context.Provider>
    );
  }
}
