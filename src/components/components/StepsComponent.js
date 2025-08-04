import React, { useState } from 'react';
import { Button, ConfigProvider, Steps, theme } from 'antd';
import Aslide from './components/Aslide';
import './StepsComponent.css';
import Cslade from './components/Cslaide';
import Bslade from './components/Bslade';


const steps = [
  {
    title: 'Форма',
    content: <Aslide />,
  },
  {
    title: 'Материал',
    content: <Bslade />,
  },
  {
    title: 'Отправка',
    content: <Cslade />,
  },
];
const StepsComponent	 = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map(item => ({ key: item.title, title: item.title }));
  const contentStyle = {
//     lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
//     backgroundColor: token.colorFillAlter,
//     borderRadius: token.borderRadiusLG,
//     border: `1px dashed ${token.colorBorder}`,
    marginTop: 26,
  };
  return (
    <>

    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#a9a400ff',

        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
    }}
  >
				<Steps current={current} items={items} />
				<div style={contentStyle}>{steps[current].content}</div>
				<div style={{ marginTop: 24 }}>
				{current < steps.length - 1 && (
					<Button type="primary" onClick={() => next()}>
					Вперед
					</Button>
				)}
				{/* {current === steps.length - 1 && (
					<Button type="primary" onClick={() => message.success('Processing complete!')}>
					Отправить
					</Button>
				)} */}
				{current > 0 && (
					<Button style={{ margin: '0 8px' }} onClick={() => prev()}>
					Назад
					</Button>
				)}
				</div>
	 </ConfigProvider>
    </>
  );
};
export default StepsComponent;