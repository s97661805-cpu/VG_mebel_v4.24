
import StepsComponent from "./components/StepsComponent";
import "./Gx.css"

function Gx() {

	return (


		<div id="rec1075324371" className="r t-rec t-rec_pt_90 t-rec_pb_135"
			style={{paddingTop:"90px",paddingBottom:"135px"}} data-record-type="835">
			<div id="popup" className="t835">
				<div className="t-container">
					<div className="t835__col t-col t-col_12 ">
						<div className="t835__quiz t835__quiz_inner-space t835__quiz-preview"
							style={{backgroundColor: "#ffffff"}}>
							<div className="t835__quiz-wrapper t835__quiz-published">
								<div className="t835__quiz-description-wrapper" >
									<div className="t-descr t-descr_xxs t835__quiz-description">
										<div className="t835__quiz-description-title"> <svg role="presentation"
												version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg"
												xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
												viewBox="0 0 100 100"
												style={{enableBackground:"new 0 0 100 100"}}
												xmlSpace="preserve">
												<rect x="27.5" y="4.1" className="st61" width="56.5"
													height="73.5"></rect>
												<line className="st61" x1="41.5" y1="22.1" x2="70.6" y2="22.1">
												</line>
												<line className="st61" x1="41.5" y1="38.8" x2="70.6" y2="38.8">
												</line>
												<line className="st61" x1="41.5" y1="55.5" x2="70.6" y2="55.5">
												</line>
												<polyline className="st61"
													points="66.4,77.6 66.4,95.6 9.8,95.6 9.8,22.1 27.5,22.1 ">
												</polyline>
											</svg> <span className="t835__quiz-description-text"
												field="descr">Рассчитайте стоимость кухни и забронируйте 1
												из 3 подарков на выбор:</span> </div>
										<div className="t835__quiz-description-counter"></div>
									</div>
									<div className="t835__progressbar">
										<div className="t835__progress" style={{backgroundColor:"#efce5a"}}></div>
									</div>
								</div>
								<div className="t835__quiz-nofixedheight">
									<div
										className="t835__quiz-form-wrapper t835__quiz-form-wrapper_withcheckbox t835__quiz-form-wrapper_newcapturecondition">
										



										<StepsComponent />



									</div>
								</div>
								{/* <div className="t835__btn-wrapper"> <button className="t-btn t-btn_sm t835__btn_prev"
										type="button"
										style={{borderRadius:"5px",fontWeight:"700"}}>
										<table role="presentation" style={{width:"100%", height:"100%"}}>
											<tbody>
												<tr>
													<td>Назад</td>
												</tr>
											</tbody>
										</table>
									</button> <button className="t-btn t-btn_sm t835__btn_next" type="button"
										data-btneffects-first="btneffects-flash"
										style={{color:"#1a1a1a",backgroundColor:"#efce5a",borderRadius:"5px",fontWeight:"700"}}>
										<table role="presentation" style={{width:"100%", height:"100%"}}>
											<tbody>
												<tr>
													<td>Далее</td>
												</tr>
											</tbody>
										</table>
									</button> <button className="t-btn t-btn_sm t835__btn_result" type="button"
										data-btneffects-first="btneffects-flash"
										style={{color:"#1a1a1a",backgroundColor:"#efce5a",borderRadius:"5px", fontFamily:"Montserrat",fontWeight:"700"}}>
										<table role="presentation" style={{width:"100%", height:"100%"}}>
											<tbody>
												<tr>
													<td>Последний вопрос</td>
												</tr>
											</tbody>
										</table>
									</button>
									</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>




		</div>
	);
}

export default Gx;