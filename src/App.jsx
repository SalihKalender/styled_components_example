import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import BlogCard from './components/BlogCard'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 60%;
    margin: auto;
    padding: 25px;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`

const Title = styled.h2`
  font-size: 35px;
  color: #914381;
  font-weight: 800;
`

function App() {

  const [Blogs, updateBlogs] = useState([
    {
      name: 'Eren Ersoy',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa blanditiis ex adipisci dolorem, quae officiis eos est quis deleniti eaque?',
      date: `${new Date().getDate() + 9}.${new Date().getMonth() + 1}  .${new Date().getFullYear()}`
    },
    {
      name: 'Ayhan Akgun',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa blanditiis ex adipisci dolorem, quae officiis eos est quis deleniti eaque?',
      date: `${new Date().getDate()}.${new Date().getMonth() + 1}  .${new Date().getFullYear() - 2}`
    },
    {
      name: 'Yusuf Altınısık',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa blanditiis ex adipisci dolorem, quae officiis eos est quis deleniti eaque?',
      date: `${new Date().getDate() + 5}.${new Date().getMonth() + 7}  .${new Date().getFullYear()}`
    },
  ])

  return (
    <>
      <Title>Salih Kalender</Title>
      <GlobalStyle />
      { Blogs.map((blog, index) => (
        <BlogCard name={blog.name} description={blog.description} date={blog.date} key={index} />
      )) }
    </>
  )
}

export default App
