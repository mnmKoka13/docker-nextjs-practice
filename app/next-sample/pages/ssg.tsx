// 型のために導入
import { GetStaticProps, NextPage, NextPageContext } from 'next'
// Next.jsの組み込みコンポーネント
import Head from 'next/head'

// ページコンポーネントのpropsの型定義
type SSGProps = {
  message: string
}

// SSG 向けのページを実装
// NextPage は Next.js の Page 向けの型
// NextPage<props> で props が入る Page であることを明示

// SSG は getStaticProps が返した props　を受け取ることができる
const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props
  
  return (
    <div>
      {/* Head コンポーネントで包むと、その要素は<head>タグに配置される */}
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページは静的サイト生成によってビルド時に生成されたページです
        </p>
        <p>{message}</p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp} に getStaticProps が実行されました`
  console.log(message)
  return {
    props: {
      message,
    }
  }
}

export default SSG