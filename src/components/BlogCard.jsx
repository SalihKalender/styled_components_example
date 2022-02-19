import styled from "styled-components";

import { FaInstagram } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

const Container = styled.div`
    margin: 25px 0;
    padding: 20px;
    background-color: ${props => props.theme.themeColor};
    transition: all .2s;
    border-radius: 10px;
`

const Title = styled.h3`
    font-size: 24px;
    color: ${props => props.theme.color};
    word-spacing: -2px;
    letter-spacing: -.5px;
`

const Date = styled.p`
    margin: 15px 0px 0px 0px;
    color: #8a8a8a;
    font-weight: 600;
`

const Content = styled.div`
    line-height: 1.7;
    color: ${props => props.theme.color};
`
const Important = styled.span`
    color: ${props => props.theme.color};
    font-weight: bold;
`
const IconContainer = styled.div`
    width: 20%;
    margin: 15px 0;
    display: flex;
    justify-content: space-around;
    & svg {
        color: ${props => props.theme.color};
        font-size: 25px;
    }

`

function BlogCard(props) {
    return (
        <Container>
            <Title> { props.name } </Title>
            <Date> {props.date} </Date>
            <Content>
                { props.description }
            </Content>
            <IconContainer>
                <FaInstagram />
                <AiOutlineTwitter />
                <BsGithub />
            </IconContainer>
        </Container>
    )
}

export default BlogCard