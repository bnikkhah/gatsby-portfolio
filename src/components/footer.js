import React from 'react'
import Social from '../components/social'

const Footer = () => (
    <footer className="bg-blue-700">
        <nav className="flex flex-wrap justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
            <span className="text-white">
            Website made in <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">GatsbyJS</a>, <a href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">Contentful</a>, and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">TailwindCSS</a>. Behnam Nikkhah { new Date().getFullYear() }
            </span>

            <Social />
        </nav>
    </footer>
)

export default Footer