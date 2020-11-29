import React from 'react';
import Button from "./Button";

function Card(props) {


    return (
        <div className="card">
            <div className="card-image">
                <img src={props.products.image} alt=""/>
            </div>
            <div className="card-info">
                <div className="card-name">{props.products.name} </div>
                <div className="rating">{'*'.repeat(props.products.rating)} </div>
                <div className="card-price">{props.products.price} ₽</div>
                <Button setBought={props.setBought}
                        bought={props.products.bought}
                        id={props.products.id}/>
            </div>
        </div>
    );
}

export default Card;