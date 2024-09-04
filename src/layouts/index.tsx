import { Outlet, useLocation } from 'umi'
import { Badge, TabBar } from 'antd-mobile'
import { AppOutline, MessageOutline, MessageFill, UnorderedListOutline, UserOutline } from 'antd-mobile-icons'

import styles from './index.less'

export default () => {
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: 'todo',
      title: '待办',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: 'message',
      title: '消息',
      icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
      badge: '99+',
    },
    {
      key: 'personalCenter',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  return (
    <div className={styles.wrapper}>
      <main>
        <Outlet />
      </main>

      <TabBar className="wrapper-bar">
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} badge={item.badge} />
        ))}
      </TabBar>
    </div>
  )
}
