import React from "react"
import { Link } from "gatsby"
import Imgage from "gatsby-image"
import { useProjectsListQuery } from "../hooks/useProjectsListQuery"

import { Tag } from "../tag"
import { ProjectPost, Category, Title, Text } from "../projectPosts"

const ProjectsCard = () => {
    const GetProjectsList = () => {
        const projectsList = [];
        const Projects = useProjectsListQuery();
        Projects.allMdx.edges.forEach((postEdge) => {
            projectsList.push({
                path: postEdge.node.fields.slug,
                tags: postEdge.node.frontmatter.tags,
                title: postEdge.node.frontmatter.title,
                excerpt: postEdge.node.excerpt,
                date: postEdge.node.frontmatter.date,
                description: postEdge.node.frontmatter.description,
                category: postEdge.node.frontmatter.category,
                image: postEdge.node.frontmatter.image.childImageSharp.fluid,
                repo: postEdge.node.frontmatter.repo,
            });
        });
        return projectsList;
    };

    const projectsList = GetProjectsList();

    return (
        <div>
        
        {projectsList.map((project) => (
            <>
            <ProjectPost key={project.path}>
            <div className="media">
              <div className="image-wrapper">
                <Link to={project.repo}>
                  <Imgage fluid={project.image} title="work title" />
                </Link>
              </div>
            </div>
            <div className="content">
              <header>
                <Category>{project.category}</Category>
                <Title>
                  <Link className="text-primary lined-link" style={{ boxShadow: `none` }} to={project.repo}>
                    {project.title}
                  </Link>
                </Title>
              </header>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: project.description || project.excerpt,
                  }}
                />
                <div>
                  {project.tags.map((tag, index) => (<Tag key={index}>{tag}</Tag>))}
                </div>
            </div>
          </ProjectPost>
            </>
        ))}
        
        </div>
    );
};
export default ProjectsCard;