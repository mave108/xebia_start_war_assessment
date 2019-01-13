import React from 'react';
import {connect} from 'react-redux';
import Layout from '../../Components/Layout/layout';
import Nav from '../../Components/Nav/Nav';
import {_setCookies, _readCookie} from '../../Helper/functions';
import {getUserByName,searchPlanet} from '../../Actions/actions';
import Searchform from '../../Components/Search/searchform';
import Planetlist from '../../Components/Planetlist/Planetlist';
import Errorcomponent from '../../Components/Error/Errorcomponent/Errorcomponent';

class Login extends React.Component{

   constructor(props){
       super(props);
       this.state = {
           searchCounter: 0
       }
       this.searchPlanets = this.searchPlanets.bind(this);     
       this.searchInitiator = null;
       this.LoggedInUserName = _readCookie("Logged_in_user") || false
       //set to zero so user start search again
       setInterval(()=>{
        this.setState({searchCounter:0});        
        },10000);
   }
   componentDidMount(){
       if(this.props.loggedinUser === undefined || this.props.loggedinUser === false){         
         if(this.LoggedInUserName){
            this.props.dispatch(getUserByName(this.LoggedInUserName));
         }else{
            this.makeLogout();
         }
       }
   }
   searchPlanets = (search) =>{   
    //clear earlier search to reduce api hit 
    clearTimeout(this.searchInitiator);    
    this.searchInitiator = setTimeout(()=>{
    this.setState( state => {searchCounter: ++state.searchCounter});
    this.props.dispatch(searchPlanet(search));
    },100);  
   }
   
   renderSearch(){
       console.log("search",this.props)
       //extra privilege for Luke Skywalker
       if(this.LoggedInUserName === 'Luke Skywalker'){           
        return <Searchform searchHandler={this.searchPlanets}/>;
       }else{
        if(this.state.searchCounter <= 15){
          return <Searchform searchHandler={this.searchPlanets} />;
        }else{
          return <Errorcomponent>Can't search more than 15 times in a minute</Errorcomponent>;
        }
        
       }
       
   }
   makeLogout = ()=>{
    _setCookies("Logged_in_user",'',0);
    this.props.history.push("/login");
   }
    render(){
  
        return(
            <Layout>
                <Nav logout={this.makeLogout} userName={this.props.loggedinUser?this.props.loggedinUser.name:null}/>
                <br />
            {this.renderSearch()}
                {this.props.planetSearchResult?<Planetlist ref={this.showDetail} 
                  planets={this.props.planetSearchResult}                  
                  />:null}
            </Layout>
        );
    }
}
function mapStateToProps(state){
    return {
        loggedinUser : state.main.loggedinUser,   
        planetSearchResult : state.main.planetSearchResult,                         
        }
}

export default connect (mapStateToProps,null)(Login);