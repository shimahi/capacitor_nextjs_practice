import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

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
          <Link href='/about'>
            <a>Aboutページへ移動</a>
          </Link>
        </div>
      </main>
    </div>
  )
}

// ネイティブではgetStaticProps or getServerSidePropsを行わない
const IS_NATIVE = true

export const getStaticProps = IS_NATIVE
  ? undefined
  : () => {
      return {
        props: {
          text: `これはgetStaticPropsのデータです。`,
        },
        revalidate: 600,
      }
    }

export default Home
