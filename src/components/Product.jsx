import React, { Component } from "react";
import Description from "./Description";
import Name from "./Name";
import Price from "./Price";

class Product extends Component {
    render() {
        return (
            <div className="product">
                <Price price={this.props.price} />
                <Name name={this.props.name} />
                <Description description={this.props.description} />
            </div>
            
        );
    }
        
}

export default Product