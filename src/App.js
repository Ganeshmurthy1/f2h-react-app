import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>{
        // <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <h1 className="App-title">Welcome to React</h1>
        // </header>
        // <p className="App-intro">
        //   To get started, edit <code>src/App.js</code> and save to reload.
        // </p> 
      }
        <Header/>
       <Content/>
       <Footer/>

      </div>
    );
  }

}

class Header extends Component {
   render() {
      return (
         <div  className="divxHeader padding-LR-15px">
         <div className="row">
         <img src={logo} className="col-md-2 pull-left App-logo" alt="logo" />
            <ul className="col-md-10 Head-tab">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact US</li>
                <li>Terms</li>
            </ul>
            </div>
             
         </div>
      );
   }
}
class Content extends Component {
   
    constructor() {
         super();
        this.state = {
          fname: '',
          lname: '',
          email: '',
        };
      }

    onChange = (e) => {
      const state  = this.state;
      state[e.target.name] = e.target.value;
      this.setState(state);
   }

   onSubmit = (e) => {
      e.preventDefault();
      const{ fname, lname,email} = this.state;
      console.log("states",this.state);
   }

   render() {
     const { fname, lname, email } = this.state;
      return (
         <div className="backgroundImage padding-LR-15px">
           <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-4 formBorder">
               <form onSubmit={this.onSubmit}>
                <div className="col-md-12">
                  <label className="col-md-5 white-text">First Name</label>
                  <input type="text" className="col-md-7" name="fname" value={fname} onChange={this.onChange} />
                </div>
                <div className="col-md-12">
                  <label className="col-md-5 white-text">Last Name</label>                
                   <input type="text"  className="col-md-7"  name="lname" value={lname} onChange={this.onChange} />
                </div>
                <div className="col-md-12">
                  <label className="col-md-5 white-text">Email</label>                 
                  <input type="text" className="col-md-7"  name="email" value={email} onChange={this.onChange} />
                </div>
                <div className="col-md-12 ">
                  <button type="submit" className="btn btn-success btn-submit">Submit</button>
                </div>
              </form>
            </div>
           </div>
         </div>
         
      );
   }

}

class Footer extends Component {
   render() {
      return (
         <div className="padding-LR-15px footDiv">
            <h1>Footer</h1>
         </div>
      );
   }
}

export default App;
