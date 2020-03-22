const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve('./src/templates/project.js')
    const res = await graphql(`
        query ProjectQuery {
          allContentfulProject {
            edges {
              node {
                slug
              }
            }
          }
        }
      `
    )

    res.data.allContentfulProject.edges.forEach((edge) => {
        const slug = edge.node.slug
        createPage({
            component: projectTemplate,
            path: `/project/${edge.node.slug}`,
            context: {
                slug
            }
        })
    })
}