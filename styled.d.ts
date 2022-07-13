import 'styled-components'

import { ThemeModel } from './src/styles/models'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeModel {}
}
