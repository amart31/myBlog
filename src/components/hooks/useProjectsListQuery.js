import { useStaticQuery, graphql } from "gatsby"

export const useProjectsListQuery = () => {
    const projectsListData = useStaticQuery(graphql`
        query ProjectsQuery {
            site {
                siteMetadata {
                    title
                }
            }
            allMdx(filter: {fileAbsolutePath: {regex: "/(projects)/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
                edges {
                  node {
                    excerpt
                    fields {
                      slug
                    }
                    frontmatter {
                      date(formatString: "MMMM DD, YYYY")
                      title
                      image {
                        childImageSharp {
                          fluid(maxWidth: 600, quality: 100) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                      tags
                      category
                      description
                      repo
                    }
                  }
                }

        }
    }
    `);
    return projectsListData;
};