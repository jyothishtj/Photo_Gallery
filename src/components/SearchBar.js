import React from 'react';
import { get } from 'http';
class SearchBar extends React.Component{
    state={term:''};
    
    /*constructor() {
        super();
        this.onFormSubmit=this.onFormSubmit.bind(this);
    }
    */
onFormSubmit=(event) => {
event.preventDefault();
this.props.renderOnSubmit(this.state.term);

}
render() {
    return (
    <div className="ui segment"> 
        <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
                <label> Image Search</label>
            <input type="text" value={this.state.term} onChange={(e) => this.setState({term:e.target.value})}/>
            </div>
           </form>
        </div>
    );
};

};

export default SearchBar;

