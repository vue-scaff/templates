import styles from '@/global.less'

export default (props) => {
  return <div className={styles.block}>{props.children}</div>
}
