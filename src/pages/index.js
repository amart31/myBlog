import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import ProjectsCard from "../components/projectCard"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Andy Martinez PCSSA"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `Pega`, `PCSSA`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./homeScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey you{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my little corner of the internet.</p>
        <p>
          I am a Pega CSSA and work as Pega Architect. I have decided to begin blogging in my spare time as a way of honing my skills and practice my writing while at it. I figured maybe I can be of help to someone out there going through the same issues as me. 
        </p>
        <p>
        I intend to write about Pega, Front-End technologies such as React and Gatsby, and also anything I might find interesting at the moment. Be warned, my personal interest vary like the wind. Bare with me as I try to be more consistent with my publishing, also I might come back and update posts periodically if needed. 
        </p>
        {" "}
        <ProjectsCard />

        {" "}
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage

