import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    this.get.bind(this);
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      method: 'POST',
      url: '/repos',
      data: {username: `${term}`},
      success: data => {
        console.log(data);
        console.log(this)
        this.get();
      },
    })
  }

  get() {
    $.ajax({
      url: 'http://localhost:1128/repos',
      method: 'GET',
      contentType: 'text/plain',
      success: (data) => {
        let repos = JSON.parse(data);
        this.setState({
          repos: repos
        });
      }, 
      error: (error) => {console.log(error)}
    })
  }

  componentDidMount() {
    this.get();
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));