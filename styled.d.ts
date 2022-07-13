import 'styled-components'

import { ThemeModel } from '@/core/application/common/styles/models'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeModel {}
}
