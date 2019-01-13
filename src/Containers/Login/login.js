import React from 'react';
import {connect} from 'react-redux';
import Layout from '../../Components/Layout/layout';
import Loginform from '../../Components/Loginform/loginform';
import {validateUser} from '../../Actions/actions';
import {_setCookies, _readCookie} from '../../Helper/functions';

class Login extends React.Component{

   constructor(props){
       super(props);
       this.state = {
           username: undefined,
           password: undefined
       }
       this.loginHandler = this.loginHandler.bind(this);
       this.updateUsernameHandler = this.updateUsernameHandler.bind(this);
       this.updatePasswordHandler = this.updatePasswordHandler.bind(this);
   }
   componentDidMount(){
      const isLoggedIn = _readCookie('Logged_in_user') || false;
      if(isLoggedIn){
        this.props.history.push("/planet-search");
      }
   }
   updateUsernameHandler = (val)=>{       
     this.setState({username:val});
   }
   updatePasswordHandler = (val)=>{    
    this.setState({password:val});
  }
   loginHandler = ()=>{
       console.log(this.state);
       this.props.dispatch(validateUser(this.state.username,this.state.password))
       .then( ()=>{
            //if user is valid then logged him and redirect            
            if(this.props.loggedinUser){
               this.loginSuccessAction();
            }
            
       });
   }

   loginSuccessAction(isLoggedIn){
    _setCookies('Logged_in_user',this.props.loggedinUser.name,1);
    this.props.history.push("/planet-search");
   }
   




    render(){
  
        return(
            <Layout>
                <Loginform  username={this.state.username} 
                            password={this.state.password}
                            loginHandler={this.loginHandler}
                            updateUsernameHandler={this.updateUsernameHandler}
                            updatePasswordHandler={this.updatePasswordHandler}
                            loggedinUser={this.props.loggedinUser}
                            />
            </Layout>
        );
    }
}
function mapStateToProps(state){
    return {
        loggedinUser : state.main.loggedinUser,                     
        }
}

export default connect (mapStateToProps,null)(Login);