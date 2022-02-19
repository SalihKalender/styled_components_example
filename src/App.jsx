import { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import BlogCard from './components/BlogCard'
import themeContext from './context/themeContext'

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
    background-color: ${props => props.theme.background};
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
const ThemeButton = styled.button.attrs({
  type: 'button'
})`
  padding: 10px 20px;
  background: transparent;
  color: ${props => props.theme.themeColor};
  border: 2px solid ${props => props.theme.themeColor};
  font-size: 20px;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
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

  const Themes = [
    { color: '#333',  background: '#fff', themeColor: '#b8b8b8' },
    { color: '#fff',  background: '#333', themeColor: '#914381' },
  ] 

  const [ SelectedTeheme, setSelectedTheme ] = useState(Themes[1])
  
  const changeTheme = () => {
    const is_dark = SelectedTeheme.color == '#fff';
    let NonSelected = null
    if(is_dark) {
      NonSelected = Themes.find(theme => (
        theme.color != '#fff'
      ))
    }
    else {
      NonSelected = Themes.find(theme => (
        theme.color == '#fff'
      ))
    }
    setSelectedTheme(prevState => {
      return NonSelected
    })
  }

  return (
    <themeContext.Provider value={setSelectedTheme}>
      <ThemeProvider theme={SelectedTeheme}>
        <Title>Salih Kalender</Title>
        <GlobalStyle />
        { Blogs.map((blog, index) => (
          <BlogCard name={blog.name} description={blog.description} date={blog.date} key={index} />
        )) }
        <ThemeButton onClick={changeTheme}>
          ChangeTheme
        </ThemeButton>
      </ThemeProvider>
    </themeContext.Provider>
  )
}

export default App
