import React from 'react';
import Card from "./Card";

function Content(props) {
    return (
        <div className="content">
            {props.products.map((item, id) => {
                    return <Card products={item} key={id} setBought={props.setBought}/>
                }
            )}
        </div>
    );
}

export default Content;