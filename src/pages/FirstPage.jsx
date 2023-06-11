import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Routes, Route}  from "react-router-dom";
import {SecondPage} from "./SecondPage";
import logo from '../assets/Screenshot_1.png'
import folder from '../assets/folder.svg'
import style from '../modules/FirstPage.module.css'
import btn from '../modules/Button.module.css'
import {useNavigate} from "react-router-dom";

export function FirstPage() {
    const navigate = useNavigate();
    const validateEmail = (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
    }

    const validatePhoneNumber = (values) => {
        const errors = {}
        if (!values.phone) {
            errors.phone = 'Required'
        } else if (values.length !== 11) {
            console.log(errors.phone = 'Invalid phone number')
        }
        return errors
    }

    return (
        <>
            <div className={style.page}>
                <div className={style.box}>
                    <div className={style.grid_container}>
                        <img className={style.image} src={logo} alt="avatar"/>
                        <div className={style.container_info}>
                            <h3>Pavel Lentsov</h3>
                            <div className={style.grid_container_links}>
                                {/*TODO: Убрать filter из стилей, заменить цвет в самой svg*/}
                                <img src={folder} alt="folder" style={{width: '15x', height: '15px', filter: 'invert(0.5)'}}/>
                                <a href="#" style={{marginLeft: '5px'}}>Telegram</a>
                                <img src={folder} alt="folder" style={{width: '15px', height: '15px', marginLeft: '18px', filter: 'invert(0.5)'}}/>
                                <a href="#" style={{marginLeft: '5px'}}>GitHub</a>
                                <img src={folder} alt="folder" style={{width: '15px', height: '15px', marginLeft: '18px', filter: 'invert(0.5)'}}/>
                                <a href="#" style={{marginLeft: '5px'}}>Resume</a>
                            </div>
                        </div>
                    </div>
                    <hr/>
                        <Formik
                            initialValues={{email: '', phone: '+7 '}}
                            onSubmit={values => console.log(values)}
                        >
                            {({isSubmitting}) => (
                                <Form>
                                    <div className={style.form_container}>
                                        <p>Номер телефона</p>
                                        <Field className={style.form} type="phone" name="phone" placeholder="+7 999 999-99-99" validate={validatePhoneNumber}/>
                                        <p>Email</p>
                                        <Field className={style.form} type="email" name="email" placeholder="tim.jennings@example.com" validate={validateEmail}/>
                                    </div>
                                    <button className={btn.button_blue} type="submit" disabled={isSubmitting} onClick={() => navigate('/second')}>
                                        Начать
                                    </button>
                                </Form>
                            )}
                        </Formik>
                </div>
            </div>
        </>
    )
}