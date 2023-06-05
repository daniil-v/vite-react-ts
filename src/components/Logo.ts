import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
// import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

interface LogoProps {
  variant?: 'default' | 'react'
}

const logoSpin = keyframes`
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
  `

const dynamicStyle = ({ variant }: LogoProps) => {
  if (variant === 'react')
    return css`
      animation: ${logoSpin} infinite 20s linear;
      :hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
      }
    `
  return css`
    :hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
  `
}

export const Logo = styled.img<LogoProps>`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  ${dynamicStyle}
`
