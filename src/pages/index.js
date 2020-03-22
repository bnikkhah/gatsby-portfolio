import React from "react";

import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout";
import SEO from "../components/seo";

import AniLink from "gatsby-plugin-transition-link/AniLink"
import ProjectCard from '../components/project-card'

function IndexPage() {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      allContentfulProject {
        edges {
          node {
            id
            title
            link
            slug
            color
            thumbnail {
              id
              sizes(quality: 100) {
                ...GatsbyContentfulSizes_withWebp
              }
            }
            description {
              json
            }
          }
        }
      }
    }  
  `)
  
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="flex flex-wrap">
        <div className="w-full">
          <h1>Projects</h1>
        </div>
        <div className="projects-list flex flex-wrap">
          {
            data.allContentfulProject.edges.map((edge, index) => (
              <div className="sm:w-1/2 p-3" key={edge.node.id}>
                <AniLink
                  paintDrip
                  direction="left"
                  to={`/project/${edge.node.slug}`}
                  hex={edge.node.color}
                  duration={0.7}
                  className="font-normal"
                >
                  <ProjectCard edge={edge} index={index} />
                </AniLink>
              </div>
            ))
          }
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
