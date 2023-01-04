import React from 'react';
import {Link} from 'react-router-dom'


function Main() {
    return (
      <>
       <div className='navigation-bar-container'>
        
        <ul className='navbar-names'>
           
            <li>Directory App </li>
        </ul>

    </div>
      <div className='buttons-div'>
          
      <button type="button" className='Header-button'><Link  style={{textDecoration: 'none', color:'white'}} to='/'>Add New User</Link></button>
      <button type="button" className='Header-button'><Link style={{textDecoration: 'none', color:'white'}} to='/RetrieveData'>Retrieve Information</Link></button>
  
      </div>
    
      </>
    );
  }
  
  export default Main;
  