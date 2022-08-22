import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capacitor_practice',
  webDir: 'out',
  bundledWebRuntime: true,
  /**
   * @description
   * ローカル環境でネイティブの検証を行う際は、live reloadをするために、自分の環境でのIPアドレス・ポートを server に設定しコメントアウトを解除すること
   * この差分はgitに残さないこと
   * https://capacitorjs.com/docs/guides/live-reload
   *
   * 環境変数参照できるようにしたい
   * https://github.com/ionic-team/capacitor/discussions/5204
   */
  // server: {
  //   url: 'http://[あなたのネット環境のIPアドレス]:[webアプリのローカルサーバーのポート(Next.jsのデフォルトでは3000)]',
  //   cleartext: true,
  // },
}

export default config
