import React from 'react';
import './SecondPage.css';
import Todo from './App.js';

class SecondPage extends React.Component{
    render(){
        return(
        <div>
          <textarea rows="4" cols="50" className='form'/>
          <button >Save</button>
        </div>
       );
    }
}

export default SecondPage;