import * as React from 'react';
import logo from './logo.svg';
import './App.css';

const appName = 'My Coin';
const appDesc = 'All your financial information in one app';

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
  ];

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }
  const searchStories = stories.filter(function (story) {
    return story.title.includes(searchTerm);
  })
  const [clickCount, setClickCount] = React.useState(1);

  const handleClick = () =>{
    setClickCount(clickCount + 1);
  }
  return (
    <div>
      <h1>{appName}</h1>
      <h3>{appDesc}</h3>
      <Search onSearch={handleSearch}/>
      <hr/>
      <Authors list={searchStories}/>
      <button onClick={handleClick}>Click Count: {clickCount}</button>
    </div>
  );
}

const Authors = (props) => {
  return(
    <ul>
      {props.list.map((item) => (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
             <span>{item.author} </span>
             <span>{item.num_comments} </span>
             <span>{item.points} </span>
          </li>
        )
      )}
    </ul>
  );
}

const Search = (props) => {

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch}/>
    </div>
    
  );
}

class Developer{
  constructor(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName(){
    return this.firstname + ' ' + this.lastname;
  }
}

export default App;

/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */
