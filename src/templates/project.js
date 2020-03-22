import React from 'react'
import Layout from '../components/layout'
import PropTypes from 'prop-types'
import SEO from "../components/seo";

import { graphql } from 'gatsby'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Project = ({ data }) => {

    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title={data.contentfulProject.title}
            />
            <section>
                <h1 className="text-4xl">{ data.contentfulProject.title }</h1>
                { documentToReactComponents( data.contentfulProject.description.json ) }
                <div className="border border-teal-700 btn-wrapper mt-10 p-4 text-center">
                    <a
                        href={data.contentfulProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-teal inline-block"
                    >
                        {`Visit ${data.contentfulProject.title}`}
                    </a>
                </div>
            </section>
        </Layout>
    )
}

Project.propTypes = {
    data: PropTypes.object
}

export default Project

export const query = graphql`
    query SingleProjectQuery($slug: String!) {
        contentfulProject(slug: { eq: $slug }) {
            id
            link
            title
            description {
                json
            }
        }
    } 
`