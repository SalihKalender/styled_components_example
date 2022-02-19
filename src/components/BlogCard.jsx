import styled from "styled-components";

const Container = styled.div`
    margin: 25px 0;
    padding: 20px;
    background-color: #ddd;
    border-radius: 10px;
`

const Title = styled.h3`
    font-size: 24px;
    color: #E4A292;
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
`
const Important = styled.span`
    color: #E4A292;
    font-weight: bold;
`

function BlogCard(props) {
    return (
        <Container>
            <Title> { props.name } </Title>
            <Date> {props.date} </Date>
            <Content>
                { props.description }
            </Content>
        </Container>
    )
}

export default BlogCard