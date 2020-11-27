import '../styles.css'
import { ThemeProvider } from 'styled-components'
import { globalStyle as GlobalStyle, theme } from '../globalStyles'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
