import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem } from './redux/actions';

import styled from 'styled-components';

const blankWish = {
    wishItem: '',
}

const WishItem = styled.div`
margin: 3px;
padding: 10px;
`

const WishContainer = styled.div`
border: 1px solid black;
background-color: white;
width: 75%;
height: 40%;
display: flex;
flex-direction: column;
`

const Title = styled.h1`
margin-top: 10px;
`

const Container = styled.div`
background-color: lightcoral;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 540px;
width: 400px;
border-radius: 10px;
margin-top: 20%;
text-align: center;
`

const Input = styled.input`
width: 300px;
height: 25px;
border-radius: 10px;
margin-top: 20px;
`

const AddButton = styled.button`
background-color: lightgreen;
padding: 10px;
width: 100px;
border-radius: 10px;
margin-top: 20px;
`

const SubmitButton = styled.button`
background-color: lightgreen;
width: 300px;
padding: 10px;
border-radius: 10px;
margin-top: 20px;
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
        alert('Wish list submitted to Santa!')

    }

    return (
        <Container>
            <Title>My Wishlist</Title>

            <WishContainer>
                {props.wishList.map((item, index) => {
            return <div key={index}>
                        <WishItem onClick={() => props.deleteItem(item)}>{item.wishItem}</WishItem>
                    </div>
                })}
            </WishContainer>

            <div>
                <form onSubmit={onAdd}>
                    <Input 
                    type="text" 
                    name="wishItem" 
                    value={newWish.wishItem} 
                    onChange={onChange}
                    required 
                    />
                    <AddButton type="submit">Add</AddButton>
                </form>

            </div>

            <div>
                <form onSubmit={onSubmit}>
                <SubmitButton type="submit">Submit</SubmitButton>
                </form>
               
            </div>

        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        wishList: state.wishList
    }
}

export default connect(mapStateToProps, { addItem, deleteItem })(App);