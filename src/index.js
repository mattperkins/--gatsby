import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Container from './Container'
import './style.css'
import avi from './images/favicon.png'

const Header = () => <Container>

<Link to="/" style={{color: 'white', textDecoration: 'none',}}>
A link</Link></h1>

<img src={avi} />
</Container>



const TemplateWrapper = ({children}) => (
<Container>
<Helmet title="Blog" meta={[
{ name: 'description', content: 'Sample' },
{ name: 'keywords', content: 'sample, something' },]}/>

<Header />
    
{children()}

</Container>

)

TemplateWrapper.propTypes = {
children: PropTypes.func,
}

export default TemplateWrapper
