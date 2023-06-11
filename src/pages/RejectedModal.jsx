import style from '../modules/ModuleWindow.module.css'
import btn from '../modules/Button.module.css'
import reject_cross from '../assets/reject-cross.svg'
import checkMark from '../assets/check-mark.svg'
import {useNavigate} from "react-router-dom";
export function RejectedModal({ setRejectModal}) {
	return (
		<>
			<div className={style.modalWrapper} onClick={() => setRejectModal(false)}>
				<div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
					<div style={{display: 'grid', gridTemplateColumns: 'auto 1fr auto', width: '100%'}}>
						<h1>Ошибка</h1>
						<div></div>
						<button onClick={() => setRejectModal(false)} style={{ width: '28px', height: '28px', borderRadius: '100px', backgroundColor: '#0000000A', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
							<img src={reject_cross} alt="krestik"/>
						</button>
					</div>
					<div className={style.shadow} style={{padding: '20px', backgroundColor:'#E84E5826'}}>
						{/*TODO: Сделать крест цветом тени*/}
						<svg width="40" height="40">
							<circle cx="20" cy="20" r="18" fill="#E84E58" />
							<line x1="12" y1="12" x2="28" y2="28" stroke="#fff" stroke-width="3" />
							<line x1="12" y1="28" x2="28" y2="12" stroke="#fff" stroke-width="3" />
						</svg>
					</div>
					<div style={{display: 'grid', justifyContent: 'end', width: '100%'}}>
						<button className={btn.button_blue} style={{width: '88px', height: '44px'}} onClick={() => setRejectModal(false)}>Закрыть</button>
					</div>
				</div>
			</div>
		</>
	)
}