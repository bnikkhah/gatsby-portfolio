import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

const Skills = () => {
    const data = useStaticQuery(graphql`
        query SkillQuery {
        allContentfulSkill {
            edges {
                node {
                    id
                    title
                    category {
                        id
                        slug
                    }
                }
            }
        }
        allContentfulSkillCategory {
                edges {
                    node {
                        id
                        title
                        slug
                    }
                }
            }
        }
    `)

    return (
        <section role="region" className="transition-shadow duration-300 shadow-lg hover:shadow-xl p-6">
            <h2 className="mt-10">Skills</h2>
            {
                data.allContentfulSkillCategory.edges.map((skill_cat) => (
                    <div
                        className="skill-block my-10"
                        key={skill_cat.node.id}
                    >
                        <h3>
                            {skill_cat.node.title}
                            <div className="dot"></div>
                        </h3>
                        <div className="flex flex-wrap">
                            {
                                data.allContentfulSkill.edges.map((skill) => (
                                    skill_cat.node.slug === skill.node.category.slug &&
                                    <div className="md:w-1/3 sm:w-1/2 w-full" key={skill.node.id}>
                                        <span className="font-bold">{skill.node.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default Skills