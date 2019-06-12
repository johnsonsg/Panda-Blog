import React from "react"
import { Helmet } from "react-helmet"
 // import { graphql } from "gatsby" No need for import. Now included in layout.js
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>

      <Helmet>
          <meta charSet="utf-8" />
          <meta name="author" content="Shawn Johnson" />
          <title>Home | React Website using Gatsby and Graphql | Shawn Johnson</title>
          <meta name="description" content="A react Site using Gatsby and Graphql" />
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

    <h1>About {data.site.siteMetadata.title}</h1> 
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`