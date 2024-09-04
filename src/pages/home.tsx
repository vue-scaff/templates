import { Divider, Space, Swiper, Avatar, Card, Grid, List, ProgressBar } from 'antd-mobile'
import { BillOutline, ContentOutline, EnvironmentOutline, AntOutline } from 'antd-mobile-icons'

import Page from '@/components/page'
import Block from '@/components/block'

import styles from '@/global.less'

export default function HomePage() {
  const card_1 = [
    {
      icon: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      title: 'Internet Plus 20 GB',
      subTitle: 'Expo on Sep 13, 2024',
      process: 0.6,
      info: '24 min',
      time: '2024-09-13',
    },
    {
      icon: 'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      title: 'Internet Plus 20 GB',
      subTitle: 'Expo on Sep 13, 2024',
      process: 0.4,
      info: '49 min',
      time: '2024-09-13',
    },
    {
      icon: '',
      title: 'Internet Plus 20 GB',
      subTitle: 'Expo on Sep 13, 2024',
      process: 0.7,
      info: '1 hour',
      time: '2024-09-13',
    },
  ]

  const swipers = card_1.map((item, index) => (
    <Swiper.Item key={index}>
      <Card className={styles.card}>
        <Avatar src={item.icon} style={{ '--border-radius': '10rem', '--size': '3.6rem' }} />
        <h4>{item.title}</h4>
        <sub>{item.subTitle}</sub>
        <ProgressBar percent={item.process * 100} style={{ '--track-width': '4px' }} />
        <Space block justify="between" style={{ padding: '1rem 0' }}>
          <span>{item.info}</span>
          <span>{item.time}</span>
        </Space>
      </Card>
    </Swiper.Item>
  ))

  const recommendations = card_1.map((item, index) => (
    <List.Item key={index}>
      <Space block style={{ '--gap': '2rem' }} align="center" justify="between">
        <div className={styles.bash}>
          <Avatar src={item.icon} style={{ '--border-radius': '.5rem', '--size': '3.6rem' }} />
          <div className={styles.item}>
            <strong>{item.title}</strong>
            <sub>{item.subTitle}</sub>
          </div>
        </div>
        <div className={styles.affix}>{item.info}</div>
      </Space>
    </List.Item>
  ))

  return (
    <Page title="CFI Mobile">
      <Block>
        <h1 style={{ color: 'white' }}>你好, CFI Mobile !!</h1>
      </Block>

      <Block>
        <Swiper
          trackOffset={0}
          slideSize={80}
          indicator={false}
          style={{
            '--border-radius': '8px',
          }}
          defaultIndex={0}
        >
          {swipers}
        </Swiper>
      </Block>

      <Block>
        <Card className={styles.grid}>
          <Grid columns={4} gap={8}>
            <Grid.Item>
              <div className={styles.icon}>
                <BillOutline style={{ color: 'var(--adm-color-success)' }} />
              </div>
            </Grid.Item>
            <Grid.Item>
              <div className={styles.icon}>
                <ContentOutline style={{ color: 'var(--adm-color-danger)' }} />
              </div>
            </Grid.Item>
            <Grid.Item>
              <div className={styles.icon}>
                <EnvironmentOutline style={{ color: 'var(--adm-color-orange)' }} />
              </div>
            </Grid.Item>
            <Grid.Item>
              <div className={styles.icon}>
                <AntOutline style={{ color: 'var(--adm-color-primary)' }} />
              </div>
            </Grid.Item>
          </Grid>

          <Divider contentPosition="left">今日推荐</Divider>

          <List style={{ '--font-size': '1.2rem', '--border-inner': 'none', '--border-top': 'none', '--border-bottom': 'none' }}>{recommendations}</List>
        </Card>
      </Block>
    </Page>
  )
}
