import { NextPage } from 'next'
import Link, { LinkProps } from 'next/link'
import React from 'react'
import styled from 'styled-components'

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string
  children: React.ReactNode
}

// Next.js のリンクにスタイルを適用するためのヘルパーコンポーネント
// このコンポーネントを styled-components で使用すると、
// 定義したスタイルに対応する className が props として渡される
const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props
  return (
    <Link {...rest}>
      <p className={className}>{children}</p>
    </Link>
  )
}

const StyledLink = styled(BaseLink)`
  color: #1e90ff;
  font-size: 2em;
`

const Text = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSize[3]};
  margin: ${(props) => props.theme.space[2]};
`

const StyledComponents: NextPage = () => {
  return (
    <div>
      <StyledLink href="/">Go to Index</StyledLink>
      <Text>Theme から参照した色を使用しています</Text>
    </div>
  )
}

export default StyledComponents