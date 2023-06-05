import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Global, css } from '@emotion/react'

import { A } from './components/A'
import { Logo } from './components/Logo'
import { Button } from './components/Button'
import { Card } from './components/Card'

// This is default Vite + React Demo page, rewritten in Emotion JS.
// Demonstrated a few approaches to build a project styles: styled components, dynamic styles, global styles, classic selector

const globalStyles = css`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }
  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }
  .read-the-docs {
    color: #888;
  }
`

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Global styles={globalStyles} />
      <div>
        <A href='https://vitejs.dev' target='_blank'>
          <Logo src={viteLogo} alt='Vite logo' />
        </A>
        <A href='https://react.dev' target='_blank'>
          <Logo variant='react' src={reactLogo} alt='React logo' />
        </A>
      </div>
      <h1>Vite + React</h1>
      <Card>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
