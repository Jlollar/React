import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
<header>
  <div className="mylogo">
  logo
   </div>
   <h1 class="gittitle">Search Github</h1>
   <nav>
     <ul>
      <li>
         <a href="/">Home</a>
      </li>
      <li>
          <a href="/search">Search</a>
      </li>
      <li>
          <a href="/mine">Mine</a>
      </li>
      </ul>
      </nav>    
  
</header>  
);
    }}
export default Header;