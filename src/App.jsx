import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem } from './redux/actions';

const blankWish = {
    wishItem: '',
}



const App = (props) => {

    const [newWish, setWish] = useState(blankWish)

    const onChange = (event) => {
        setWish({
            ...newWish,
            [event.target.name]: event.target.value
        })
        console.log(newWish, 'newWish')
        console.log(props, 'props')

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
                {props.wishList.map((item) => {
            return <div key={item.id}>
                        <div onClick={() => props.deleteItem(item)}>{item.wishItem}</div>
                    </div>
                })}
            </div>

            <div>
                <form onSubmit={onAdd}>
                    <input type="text" name="wishItem" value={newWish.wishItem} onChange={onChange} />
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