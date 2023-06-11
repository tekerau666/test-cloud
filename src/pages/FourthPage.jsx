import style from "../modules/FourthPage.module.css";
import page from "../modules/Page.module.css";
import btn from "../modules/Button.module.css"
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import {ModalWindow} from "./ModalWindow";
import check_mark from "../assets/check-mark-bar.svg";
import circle from "../assets/circle.svg";
import {useNavigate} from "react-router-dom";
export function FourthPage() {
	const navigate = useNavigate();
	const [agreeModal, setAgreeModal] = useState(false)
	const [disagreeModal, setDisagreeModal] = useState(false)
	return (
		<>
			<div className={page.page}>
				<div className={page.box} style={{height: '500px'}}>
					<div className={style.progress_bar}>
						<div className={style.progress_bar_inner_active}>
							<img src={check_mark} alt="galo4ka"/>
						</div>
						<div className={style.progress_bar_inner_active}>
							<img src={check_mark} alt="galo4ka"/>
						</div>
						<div className={style.progress_bar_inner_active}>
							<img src={circle} alt="circle"/>
						</div>
					</div>
					<div style={{display: 'grid', gridTemplateColumns:'auto 1fr auto', marginTop: '5px'}}>
						<span style={{color: 'blue'}}>1</span>
						<span style={{color: 'blue'}}>2</span>
						<span style={{color: 'blue'}}>3</span>
					</div>
					<Formik
						initialValues={{text: ''}}
					>
						<Form>
							<p style={{marginTop: '66px'}}>About</p>
							<Field as="textarea" name="text" placeholder="Placeholder" style={{width: '680px', height: '84px', padding: '12px 12px 52px 12px', borderRadius: '4px', marginTop:'8px'}}/>
						</Form>
					</Formik>
					<div className={btn.button_container} style={{marginTop: '66px'}}>
						<button className={btn.button_white} onClick={() => navigate(-1)}>Назад</button>
						<button className={btn.button_blue} onClick={() => setAgreeModal(true)}>Отправить</button>
					</div>
				</div>
				{
					agreeModal &&
					<ModalWindow setAgreeModal={setAgreeModal}/>
				}
			</div>

		</>
	)
}