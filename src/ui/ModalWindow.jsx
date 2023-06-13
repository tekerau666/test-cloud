import style from '../modules/ModuleWindow.module.css'
import btn from '../modules/Button.module.css'
import checkMark from '../assets/check-mark.svg'
import {useNavigate} from "react-router-dom";
export function ModalWindow({ setAgreeModal}) {
	const navigate = useNavigate();
	return (
		<>
			<div className={style.modalWrapper} onClick={() => setAgreeModal(false)}>
				<div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
					<h1 className={style.title}>Форма успешно отправлена</h1>
					<div className={style.shadow} style={{padding: '20px', backgroundColor:'#05AE7126 '}}>
						<img src={checkMark} alt="check" style={{width: '40px', height: '40px'}}/>
					</div>
					<button className={btn.button_blue} style={{width: '109px', height: '44px'} } onClick={() => navigate('/')}>На главную</button>
				</div>
			</div>
		</>
	)
}