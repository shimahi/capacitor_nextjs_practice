import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

import { pagesPath } from '../../lib/$path'

const Company: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>about</h1>

        <div>
          <Link href={pagesPath.$url()}>
            <a>Indexページへ移動！”</a>
          </Link>
        </div>
        <div>
          <Link href={pagesPath.company.$url()}>
            <a>companyページへ移動</a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Company
