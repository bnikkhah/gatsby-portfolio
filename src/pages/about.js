import React from "react";
import PropTypes from 'prop-types'

import Layout from "../components/layout";
import SEO from "../components/seo";
// import dogIllustration from "../images/dog-illustration.svg";

import { graphql, useStaticQuery } from 'gatsby'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Img from 'gatsby-image'
import Skills from '../components/skills'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allContentfulAuthor {
        edges {
          node {
            name
            id
            image {
              id
              sizes(quality: 100) {
                ...GatsbyContentfulSizes_withWebp
              }
            }
            bio {
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
        title="About"
      />

      <section>
        {
          data.allContentfulAuthor.edges.map((edge) => (
            <div key={edge.node.id}>
              <h1>About { edge.node.name }</h1>
              <div className="transition-shadow duration-300 shadow-lg hover:shadow-xl p-6 about-card">
                <div className="about-img">
                  <Img sizes={edge.node.image.sizes} className="rounded-full w-48 shadow-md transform duration-300 transition-transform hover:-translate-y-1" />
                </div>
                <div className="about-description">
                  { documentToReactComponents( edge.node.bio.json ) }
                </div>
              </div>
              <Skills />
            </div>
          ))
        }
      </section>
    </Layout>
  );
}

AboutPage.propTypes = {
  data: PropTypes.object
}

export default AboutPage;