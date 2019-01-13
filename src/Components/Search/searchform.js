import React from 'react';

const Searchform =(props) =>{
    
    return(
        <div className="jumbotron">
        <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
            <form className="card card-sm">
                <div className="card-body row no-gutters align-items-center">
                    <div className="col-auto">
                        <i className="fas fa-search h4 text-body"></i>
                    </div>
                    <div className="col" style={{position:"relative"}}>
                        <input className="form-control form-control-lg form-control-borderless" 
                               type="search" 
                               placeholder="Search planets" 
                               onChange={(e) => props.searchHandler(e.target.value) }
                               />
                               {/* {props.loading && <div className="loader"></div>} */}
                    </div>                
                </div>
            </form>
        </div>
    </div>
    </div>
    );
}

export default Searchform;