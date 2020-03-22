import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { FaCodepen, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Social = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulSocial {
            edges {
                node {
                title
                icon
                id
                link
                }
            }
            }
        }
    `)

    const displaySocial = (edge) => {
        switch(edge.node.icon) {
            case 'FaCodepen':
                return (
                    <FaCodepen />
                )
            case 'FaLinkedinIn':
                return (
                    <FaLinkedinIn />
                )
            case 'FaGithub':
                return (
                    <FaGithub />
                )
        }
    }

    return (
        <ul className="flex">
            {
                data.allContentfulSocial.edges.map((edge) => (
                    <li key={edge.node.id} className="flex items-center social-item text-white">
                        <a className="hover:text-teal-300" title={edge.node.title} href={edge.node.link} target="_blank" rel="noopener noreferrer">
                            { displaySocial(edge) }
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Social