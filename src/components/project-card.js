import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Tilt from 'react-tilt'
import Img from 'gatsby-image'

import PropTypes from 'prop-types'
import Truncate from 'react-truncate'
import Fade from 'react-reveal/Fade'

const ProjectCard = ( { edge, index } ) => {

    return (
        <Fade left={ index % 2 === 0 && true } right={ index % 2 === 1 && true }>
            <Tilt
                className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 project-card h-full"
                options={{
                    scale: 1,
                    speed: 3000,
                    axis: 'x',
                    reverse: true
                }}
                style={{ borderTop: `5px solid ${edge.node.color}` }}
            >
                {
                    edge.node.thumbnail &&
                    <Img sizes={edge.node.thumbnail.sizes} />
                }
                <div className="px-6 py-4">
                    <h3>
                        { edge.node.title }
                        <div className="dot" style={{ backgroundColor: edge.node.color }}></div>
                    </h3>
                    <Truncate
                        lines={1}
                        width={1000}
                        ellipsis='&hellip;'
                    >
                        { documentToReactComponents(edge.node.description.json) }
                    </Truncate>
                </div>
            </Tilt>
        </Fade>
    )
}

ProjectCard.propTypes = {
    edge: PropTypes.object,
    index: PropTypes.number
}

export default ProjectCard