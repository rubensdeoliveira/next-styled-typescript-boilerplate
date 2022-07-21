import { ButtonContainer } from '@/core/application/common/components/button/styles'
import { ButtonModel } from '@/core/application/common/components/button/models'

export function Button({ label, buttonType }: ButtonModel) {
  return <ButtonContainer buttonType={buttonType}>{label}</ButtonContainer>
}
