import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { pagesPath } from '../lib/$path'
type PropsType = InferGetStaticPropsType<typeof getStaticProps>

const Home = (props: PropsType) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js!!</h1>

        <p style={{ color: '#f0f' }}>
          {props.text ?? 'これはクライアントサイドレンダリングでのデータです。'}
        </p>

        <div>
          <Link href={pagesPath.about.$url()}>
            <a>Aboutページへ移動</a>
          </Link>
        </div>
        <div>
          <Link href={pagesPath.company.$url()}>
            <a>Companyページへ移動</a>
          </Link>
        </div>
      </main>
    </div>
  )
}

// ネイティブではgetStaticProps or getServerSidePropsを行わない
// #!if isWeb
export const getStaticProps = () => {
  return {
    props: {
      text: `これはgetStaticPropsのデータです。`,
    },
    revalidate: 600,
  }
}
// #!endif

export default Home
