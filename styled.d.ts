import 'styled-components'

import { ThemeModel } from '@/styles/models'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeModel {}
}
