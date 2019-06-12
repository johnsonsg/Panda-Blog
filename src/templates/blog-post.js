import React from "react"
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
    const post = data.markdownRemark
    return (
      <Layout>

      <Helmet>
          <meta charSet="utf-8" />
          <meta name="author" content="Shawn Johnson" />
          <title>{post.frontmatter.title}</title>
          <meta name="description" content="A react Site using Gatsby and Graphql" />
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>


        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }

  export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;