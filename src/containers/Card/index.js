import React, {Component} from 'react';
import CardFunc from './Card';
import CardClass from './CardClass';
import styled from 'styled-components';

const Wrapper = styled.div`
margin: 5vh 10vw;
padding: 1vh;
background-color: #61DAFB;
`;

class Card extends Component{
    state = {
        classType: false,
        cardComponent: CardFunc,
    }

    componentDidMount() {
    }
    componentDidUpdate(){
    }

    switchCard = () => {
        const newClassType = !this.state.classType;
        this.setState(()=>{
            return {
                classType: newClassType,
                cardComponent: [CardFunc,CardClass][Number(newClassType)]
            }
        });
    }

    render(){
        return(
            <Wrapper>
                <button onClick={this.switchCard}>Switch Card</button>
                <this.state.cardComponent />
            </Wrapper>
        );
    }

};

export default Card;