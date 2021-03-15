import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem } from './redux/actions';

import styled from 'styled-components';

const blankWish = {
    wishItem: '',
}

const WishItem = styled.div`

margin: 10px;
padding: 10px;
border: 3px solid black;

`


const App = (props) => {

    const [newWish, setWish] = useState(blankWish)

    const onChange = (event) => {
        setWish({
            ...newWish,
            [event.target.name]: event.target.value
        })

    }

    const onAdd = (event) => {
        event.preventDefault()
        props.addItem(newWish)
    }

    const onSubmit = (event) => {
        event.preventDefault()

    }

    return (
        <div>
            <h1>My Wishlist</h1>

            <div>
                {props.wishList.map((item, index) => {
            return <div key={index}>
                        <WishItem onClick={() => props.deleteItem(item)}>{item.wishItem}</WishItem>
                    </div>
                })}
            </div>

            <div>
                <form onSubmit={onAdd}>
                    <input 
                    type="text" 
                    name="wishItem" 
                    value={newWish.wishItem} 
                    onChange={onChange} 
                    />
                    <button type="submit">Add</button>
                </form>

            </div>

            <div>
                <form onSubmit={onSubmit}>

                </form>
                <button type="submit">Submit</button>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        wishList: state.wishList
    }
}

export default connect(mapStateToProps, { addItem, deleteItem })(App);