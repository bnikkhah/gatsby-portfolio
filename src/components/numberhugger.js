import React, { useState } from 'react'

import { FaPhone } from 'react-icons/fa'

import { graphql, useStaticQuery } from 'gatsby'

const NumberHugger = () => {
    const [isOpen, setIsOpen] = useState(true)

    const data = useStaticQuery(graphql`
        query CellphoneQuery {
            allContentfulAuthor {
                edges {
                    node {
                        cellphone
                        id
                    }
                }
            }
        }
    `)

    return (
        <div id="number-hugger">
            <div id="phone-icon" className="text-4xl text-teal-700 cursor-pointer p-2 bg-teal-700" onClick={() => setIsOpen(!isOpen)}>
                <FaPhone className="text-white" />
            </div>
            <div className={`phone p-3 bg-teal-700 text-white ${isOpen ? 'hidden sm:block' : 'block sm:hidden'}`}>
                {
                    data.allContentfulAuthor.edges.map((edge) => (
                        <div key={edge.node.id} className="contact-wrapper text-right">
                            <div className="border border-white p-3">
                                <h3 className="text-xl font-bold">Give me a call!</h3>
                                <a className="text-teal-300 text-2xl hover:text-teal-200" href={`tel:${edge.node.cellphone}`}>
                                    { edge.node.cellphone }
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NumberHugger