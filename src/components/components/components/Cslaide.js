import { useState } from 'react';

import { Badge, Col, Row } from "antd";
import { CheckCircleOutlined } from '@ant-design/icons';

const Cslade	 = () => {
const [show, setShow] = useState(1);

	return(
		<>
			<h2 style={{textAlign: "center"}}>Кухни и мебель на заказ в Волгограде</h2>
					<p style={{textAlign: "center"}}>Даем на выбор: скидку 15% на первый заказ, мойку в подарок или сертификат на 10000 рублей. Доставка по городу бесплатно. Получите каталог и рассчитайте стоимость мебели со скидкой</p>
					
					<form method='POST' action="https://formspree.io/f/xzzvalgj">
						<input className="ajsk" type="text" name="name" placeholder="Ваше имя" />	
						<input className="ajsk" type="text" name="phone" placeholder="Ваш email" />
						<input  className="ajsаk" type='submit' value="Отправить"/>
					</form>
					<p style={{textAlign: "center", fontSize: "10px"}}>Оставляя контактные данные Вы соглашаетесь с <a href="/policy">политикой конфиденциальности</a></p>
		</>
  );
};
export default Cslade;