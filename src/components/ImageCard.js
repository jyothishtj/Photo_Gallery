import React from 'react';

class ImageCard extends React.Component{

    constructor(props) {

        super(props);
        this.imageRef=React.createRef();
        this.state={spans:null};
    }

              setSpans = (e) => {
                const height = e.target.clientHeight;
                const spans = Math.ceil(height / 10);
                this.setState({spans});
             };
              
             render() {
                const {description, urls} = this.props.image;
                return (
                    <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                      <img
                         onLoad={e => this.setSpans(e)}
                         ref={this.imageRef}
                         alt={description}
                         src={urls.regular}
                      />
                   </div>
                )
             }

}

export default ImageCard;