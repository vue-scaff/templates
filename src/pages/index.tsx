import yayJpg from '../assets/yay.jpg';

import { Button, Space } from 'antd-mobile'

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>

      <Space wrap>
        <Button color='primary' fill='solid'>
          Solid
        </Button>
        <Button color='primary' fill='outline'>
          Outline
        </Button>
        <Button color='primary' fill='none'>
          None
        </Button>
      </Space>
    </div>
  );
}
