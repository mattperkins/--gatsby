import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Container from './container'
import './style.css'
import avi from './images/favicon.png'

const Header = () => (
<div>
<Container>
<div style={{margin: '0 auto', maxWidth: 960, padding: '1.45rem 1.0875rem',}}>
<h1 style={{ margin: 0 }}>
<Link to="/" style={{color: 'white', textDecoration: 'none',}}>
Matt Perkins</Link></h1>
<img src={avi} />
</Container>
</div>
)

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
