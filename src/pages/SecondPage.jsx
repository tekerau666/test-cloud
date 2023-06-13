import style from "../modules/SecondPage.module.css";
import btn from "../modules/Button.module.css";
import form from "../modules/Form.module.css";
import page from "../modules/Page.module.css";
import circle from '../assets/circle.svg'
import {ErrorMessage, Field, FieldArray, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {Select} from "../ui/Select/Select";

export function SecondPage() {
	const options = [
		{value: 'man', label: 'man'},
		{value: 'woman', label: 'woman'},
	];
	function handleSelectChange(value) {
		console.log(`Selected value is ${value}`);
	}
	const navigate = useNavigate();
	return (
		<>
			<div className={page.page}>
				<div className={page.box}>
					<div className={style.progress_bar}>
						{/*TODO: Убрать повторяющиеся стили для прогресс бара*/}
						<div className={style.progress_bar_inner_active}>
							<img src={circle} alt="circle"/>
						</div>
						<div className={style.progress_bar_inner}></div>
						<div className={style.progress_bar_inner}></div>
					</div>
					<div style={{display: 'grid', gridTemplateColumns:'auto 1fr auto', marginTop: '5px', color: '#666666'}}>
						<span style={{color: 'blue'}}>1</span>
						<span>2</span>
						<span>3</span>
					</div>
					<div>
						<Formik
							initialValues={{nickname: '', name: '', surname:'', sex: '',}}
							onSubmit={values => console.log(values)}
						>
								<Form>
									<div className={style.form_container}>
										<p>NickName</p>
										<Field className={style.form} type="text" name="nickname" placeholder="Введите никнейм"/>
										<ErrorMessage name={'nickname'} component={'div'}/>
										<p>Name</p>
										<Field className={style.form} type="text" name="name" placeholder="Введите имя"/>
										<p>Surname</p>
										<Field className={style.form} type="text" name="surname" placeholder="Введите фамилию"/>
										<p>Sex</p>
										<Select onChange={handleSelectChange} options={options}/>
									</div>
								</Form>
						</Formik>
						<div className={btn.button_container}>
							<button className={btn.button_white} type="button" onClick={() => navigate(-1)}>Назад</button>
							<button className={btn.button_blue} type="submit" onClick={() => navigate('/third')}>Далее</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}