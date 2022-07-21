import { HTMLAttributes } from 'react'

import { ButtonType } from '@/core/application/common/components/button/constants'

export type ButtonModel = HTMLAttributes<HTMLButtonElement> & {
  label: string
  buttonType: ButtonType
}
