import { useState } from 'react';

import { Badge, Col, Row } from "antd";
import { CheckCircleOutlined } from '@ant-design/icons';

const Bslade	 = () => {
const [show, setShow] = useState(1);

	return(
		<>
			<Row  gutter={[8, 8]}>
				<Col className="gutter-row" xs={12} md={6}>
					<Badge count={show === 1? <CheckCircleOutlined style={{ color: '#bd1900ff' }} /> : 0} size='default' >
						<div style={{ border: '1px solid #878787ff', backgroundColor: '#f0f0f0ff'}} onClick={() => setShow(1)}>
							<img src="/images/1/11.png.webp" alt="dsf" />
						</div>
					</Badge>
				</Col>
				<Col className="gutter-row" xs={12} md={6}>
					<Badge count={show === 2? <CheckCircleOutlined style={{ color: '#bd1900ff' }} /> : 0} size='default' >
						<div style={{ border: '1px solid #878787ff', backgroundColor: '#f0f0f0ff'}} onClick={() => setShow(2)}>
							<img src="/images/1/12.png.webp" alt="dsf" />
						</div>
					</Badge>
				</Col>
				<Col className="gutter-row" xs={12} md={6}>
					<Badge count={show === 3? <CheckCircleOutlined style={{ color: '#bd1900ff' }} /> : 0} size='default' >
						<div style={{ border: '1px solid #878787ff', backgroundColor: '#f0f0f0ff'}} onClick={() => setShow(3)}>
							<img src="/images/1/13.png.webp" alt="dsf" />
						</div>
					</Badge>
				</Col>
				<Col className="gutter-row" xs={12} md={6}>
					<Badge count={show === 4? <CheckCircleOutlined style={{ color: '#bd1900ff' }} /> : 0} size='default' >
						<div style={{ border: '1px solid #878787ff', backgroundColor: '#f0f0f0ff'}} onClick={() => setShow(4)}>
							<img src="/images/1/14.png.webp" alt="dsf" />
						</div>
					</Badge>
				</Col>

			</Row>
		</>
  );
};
export default Bslade;