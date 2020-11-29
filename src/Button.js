import React from 'react';

function Button(props) {
    return (
        <div className="card-button">
            <button onClick={() => props.setBought(props.id)} disabled={props.bought}  className="btn">
                {props.bought?"Добавлено в корзину":"Добавить в корзину"}
            </button>
        </div>
    );
}

export default Button;