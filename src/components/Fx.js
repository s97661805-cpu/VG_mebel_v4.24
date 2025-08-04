import { Col, Row } from "antd";


import "./Fx.css"

function Fx() {

	return (
			<>
				<div className="wrapper-r">
						<Row  gutter={[8, 8]}>
							<Col className="gutter-row" xs={24} md={12}>
								<img src="/images/banner.webp" alt="dsf" style={{width: "100%"}}/>
							</Col>
							<Col className="gutter-row" xs={24} md={12}>
								<div className="text-r"> 
									<h2 style={{textAlign: "center", fontSize: "23px", marginBottom: "7px"}}>Бесплатно пришлем</h2>
									<p style={{textAlign: "center", marginBottom: "7px"}}>Расчет, каталог и гайд с советами по заказу мебели</p>
									
									<form method='POST'  action="https://formspree.io/f/xzzvalgj">
										{/* <label className="rtyhf">Ваше имя</label> */}
										<input className="rtyh" type="text" name="name" 
										placeholder="Ваше имя" style={{marginBottom: "10px"}}
										/>	
										<input className="rtyh" type="text" name="phone" placeholder="Ваш телефон"  style={{marginBottom: "10px"}}/>
										<input  className="dsfsfw" type='submit' value="Отправить"  style={{marginBottom: "10px"}}/>
									</form>
									<p style={{textAlign: "center", fontSize: "10px"}}>Оставляя контактные данные Вы соглашаетесь с <a href="/policy">политикой конфиденциальности</a></p>
								</div>
							</Col>
						</Row>

				</div>
			
			</>
	);
}

export default Fx;