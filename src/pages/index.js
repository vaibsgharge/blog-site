import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, Wrapper, SectionTitle, PortfolioIcon } from '../components'

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 4rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p {
    font-size: 1.25rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
  }

  h5 {
    margin-bottom: -1.5rem;
    text-align: left;
    width: max-content;
    font-size: 1.1rem;
  }
`
const NavContainer = styled.header`
  padding: 0px 20px;
  width: 100%;
  position: absolute;
  width: 100%;
  float: left;
  left: 1300px;
  top: 20px;
  &:hover,
  &:focus {
    svg {
      transform: scale(1.2);
    }
  }
`

const SiteTitle = styled.h1`
  color: ${props => props.theme.colors.grey.dark};
  font-family: ${props => props.theme.fontFamily.serif};
`

const IndexPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <NavContainer>
      <PortfolioIcon />
    </NavContainer>
    <Wrapper>
      <Hero>
        <SiteTitle>Great Architectures, Stacks & Software Craftsmanship at Webscale.</SiteTitle>
      </Hero>
      <Content>
        <SectionTitle>What's New?</SectionTitle>
        {posts.map(post => (
          <Article
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
            timeToRead={post.timeToRead}
            slug={post.fields.slug}
            categories={post.frontmatter.categories}
            key={post.fields.slug}
          />
        ))}
      </Content>
    </Wrapper>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          categories
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`
