import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: solid 1px ${(props) => props.theme.colors.primary};;
    & h2{
        color: green;
        & span{
            color: purple;
        }
    }   
`;

const Avatar = styled.div`

`;

class Author extends Component {

    render(){

        return(
            <Wrapper>
                <Avatar>
                    <img src="" alt=""/>
                </Avatar>
                <h2>Author: <span>Span</span></h2>
            </Wrapper> 
        );
    }
};

export default Author;