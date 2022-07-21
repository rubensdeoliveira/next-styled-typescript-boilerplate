import styled, { css } from 'styled-components'

import { ButtonType } from '@/core/application/common/components'

type ButtonContainerProps = {
  buttonType: ButtonType
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.6rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1rem;

  ${({ buttonType, theme }) =>
    buttonType === ButtonType.Primary
      ? css`
          border: none;
          background: ${theme.colors.blue500};
        `
      : css`
          border: 1px solid ${theme.colors.white};
          background: transparent;
        `}
`
