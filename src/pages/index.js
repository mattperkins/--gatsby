import React from 'react'
import Link from 'gatsby-link'
import Container from '../Container'
import avi from '../images/favicon.png'
 
const Header = () => (
<Container>
<h1 style={{ margin: 0 }}>
<Link to="/">
Link</Link></h1>
<img src={avi} />
</Container>
)

const H1 = {
backgroundColor: "pink"
}

const IndexPage = () => (
<Container>
<Header />
<h1 style={H1}>Projects</h1>
<Link to="#">Link2</Link>
</Container>
)

export default IndexPage

