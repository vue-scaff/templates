import React, { useState } from 'react'
import { SafeArea, NavBar, Space, Popup, Collapse, List, Ellipsis } from 'antd-mobile'
import { UnorderedListOutline, BellOutline } from 'antd-mobile-icons'

import styles from '@/global.less'

export default (props: any) => {
  const [visible, setVisible] = useState(false)

  const openDrawer = () => {
    setVisible(true)
  }

  const closeDrawer = () => {
    setVisible(false)
  }

  const right = (
    <Space className={styles.font_24}>
      <BellOutline />
    </Space>
  )

  const back = (
    <Space className={styles.font_24}>
      <UnorderedListOutline />
    </Space>
  )

  return (
    <div className={styles.page}>
      <Popup visible={visible} onMaskClick={closeDrawer} position="left" bodyStyle={{ width: '75vw' }}>
        <Collapse accordion defaultActiveKey="1">
          <Collapse.Panel key="1" title="最新消息">
            <List header="本周热点">
              <List.Item>
                <Ellipsis className={styles.font_14} direction="end" content="热烈庆祝《CFI 移动开发平台》正式上线！" />
              </List.Item>
              <List.Item>
                <Ellipsis className={styles.font_14} direction="end" content="兴业银行召开36周年表彰会" />
              </List.Item>
              <List.Item>
                <Ellipsis className={styles.font_14} direction="end" content="兴业银行2024年半年报： 持续打造价值银行 营收利润增速回正" />
              </List.Item>
            </List>
          </Collapse.Panel>
          <Collapse.Panel key="2" title="常用功能">
            常用功能
          </Collapse.Panel>
          <Collapse.Panel key="3" title="应用状态">
            应用状态
          </Collapse.Panel>
        </Collapse>
      </Popup>

      <NavBar className={styles.nav} right={right} backIcon={back} onBack={openDrawer}>
        {props.title}
      </NavBar>
      <SafeArea position="top" />
      <Space direction="vertical" style={{ '--gap': '16px' }}>
        {props.children}
      </Space>
      <SafeArea position="bottom" />
    </div>
  )
}
