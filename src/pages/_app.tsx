import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '@/core/application/common/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
