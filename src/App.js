import React, { useState } from 'react';
import { Button, Modal, Drawer } from 'antd';

import './App.css';
import Ax from './components/Ax';
import Bx from './components/Bx';
import Cx from './components/Cx';
import Dx from './components/Dx';
import Ex from './components/Ex';
import Fx from './components/Fx';
import Gx from './components/Gx';
import Hx from './components/Hx';

function App() {

	 const [isModalOpen, setIsModalOpen] = useState(false);
	 const [open, setOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const showDrawer = () => {
    setOpen(true);
  };

  const onCloseDrawer = () => {
    setOpen(false);
  };


  return (
		<div id="allrecords" className="t-records" data-hook="blocks-collection-content-node" data-tilda-project-id="12565811"
				data-tilda-page-id="69137529" data-tilda-formskey="febaf4d883d4cc3fbafcfe9812565811" data-tilda-cookie="no"
				data-tilda-lazy="yes" data-tilda-root-zone="com" data-tilda-project-country="RU">
				<div id="rec1037149006" class="r t-rec"  data-record-type="215"> 
					<a name="mainscreen" style={{fontSize: "0px"}}></a> </div>


				<Ax  openDrawer={showDrawer}/>

				<Bx />

				<Cx />

				<Dx />

				<Ex showModal={showModal}/>

				<Fx />

				<Gx />

				<Hx />


				<Modal
					// title="Basic Modal"
					closable={{ 'aria-label': 'Custom Close Button' }}
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
					footer={null}
					>
					<h2 style={{textAlign: "center"}}>Кухни и мебель на заказ в Волгограде</h2>
					<p style={{textAlign: "center"}}>Даем на выбор: скидку 15% на первый заказ, мойку в подарок или сертификат на 10000 рублей. Доставка по городу бесплатно. Получите каталог и рассчитайте стоимость мебели со скидкой</p>
					
					<form method='POST' action="https://formspree.io/f/xzzvalgj">
						<input className="ajsk" type="text" name="name" placeholder="Ваше имя" />	
						<input className="ajsk" type="text" name="phone" placeholder="Ваш email" />
						<input  className="ajsаk" type='submit' value="Отправить"/>
					</form>
					<p style={{textAlign: "center", fontSize: "10px"}}>Оставляя контактные данные Вы соглашаетесь с <a href="/policy">политикой конфиденциальности</a></p>
				</Modal>


				  <Drawer
					title="Меню"
					closable={{ 'aria-label': 'Close Button' }}
					onClose={onCloseDrawer}
					open={open}
					>
					<a  href="#rec1037149021"><p style={{marginBottom: "6px"}} onClick={() => onCloseDrawer()}>О нас</p></a>
					<a  href="#rec1037149041"><p style={{marginBottom: "6px"}} onClick={() => onCloseDrawer()}>Решения</p></a>
					<a  href="#rec1037420071"><p style={{marginBottom: "6px"}} onClick={() => onCloseDrawer()}>Качество</p></a>
					<a  href="#rec1037420071"><p style={{marginBottom: "6px"}} onClick={() => onCloseDrawer()}>Акции</p></a>
				</Drawer>

			</div> 
  );
}

export default App;
