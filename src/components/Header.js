import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken, lighten } from 'polished'

const Wrapper = styled.header`
  background: linear-gradient(
    45deg,
    ${props => darken(0.1, props.theme.colors.primary)},
    ${props => lighten(0.1, props.theme.colors.primary)}
  );
  grid-column: 1 / -1;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 2rem 2rem 5rem 2rem;
  box-shadow: inset 0px -10px 30px 0px rgba(0, 0, 0, 0.1);
`

const Content = styled.div`
  max-width: 70%;
  margin-left: 6rem;
  margin-right: 1rem;
  text-align: left;

  a {
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fontFamily.serif};
    font-size: 1.5rem;
    &:hover {
      opacity: 0.85;
      color: ${props => props.theme.colors.white};
    }
  }
`

const Header = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
)

export default Header

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}
