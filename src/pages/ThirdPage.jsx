import style from "../modules/ThirdPage.module.css"
import btn from "../modules/Button.module.css";
import page from "../modules/Page.module.css";
import trash from '../assets/trash.svg'
import check_mark from '../assets/check-mark-bar.svg'
import circle from "../assets/circle.svg";
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
export function ThirdPage() {
    const navigate = useNavigate();
    const [fields, setFields] = useState([{id: 0}])
    const newField = () => {
        setFields([...fields, {id: fields.length}])
    }
    const deleteField = (id) => {
        setFields(fields.filter(field => field.id !== id))
    }
    return (
        <>
            <div className={page.page}>
                <div className={page.box}>
                    <div className={style.progress_bar}>
                        {/*TODO: Убрать повторяющиеся стили для прогресс бара*/}
                        <div className={style.progress_bar_inner_active}>
                            <img src={check_mark} alt="galo4ka"/>
                        </div>
                        <div className={style.progress_bar_inner_active}>
                            <img src={circle} alt="circle"/>
                        </div>
                        <div className={style.progress_bar_inner}></div>
                    </div>
                    <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr auto', marginTop: '5px', color: '#666666'}}>
                        <span style={{color: 'blue'}}>1</span>
                        <span style={{color: 'blue'}}>2</span>
                        <span>3</span>
                    </div>
                    <Formik
                        initialValues={{advantages: '', checkbox: '', radio: '',}}
                    >
                        {/*TODO: Удалить ненужные стили из PAGE и сделать так, чтобы стили работали из корневого модуля*/}
                        <Form>
                            <div className={style.form_container}>
                                <p style={{marginBottom: '8 px'}}>Advantages</p>
                                {fields.map(fields => (
                                    <div key={fields.id}>
                                        {/*TODO: для этого Field сделать отдельный Компонент*/}
                                        <div>
                                            <Field className={style.form} type="text" name={`advantages[${fields.id}]`}
                                                   placeholder="Placeholder"/>
                                            <button className={style.button_trash}
                                                    onClick={() => deleteField(fields.id)}>
                                                <img src={trash} alt="musorka" style={{width: '15px', height: '15px'}}/>
                                            </button>
                                        </div>
                                    </div>))}
                            </div>
                            <button className={btn.button} onClick={newField} type="button">
                                <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5" width="2" height="12" fill="#5558FA"/>
                                    <rect y="5" width="12" height="2" fill="#5558FA"/>
                                </svg>
                            </button>
                            <p style={{marginTop: '24px'}}>Check box group</p>
                            <div className={style.checkbox}>
                                <Field type="checkbox" name="checkbox" value="1"/>
                                <span style={{paddingLeft: '8px'}}>1</span>
                                <Field type="checkbox" name="checkbox" value="2"/>
                                <span style={{paddingLeft: '8px'}}>2</span>
                                <Field type="checkbox" name="checkbox" value="3"/>
                                <span style={{paddingLeft: '8px'}}>3</span>
                            </div>
                            <p style={{marginTop: '24px'}}>Radio group</p>
                            <div className={style.checkbox}>
                                <Field type="radio" name="radio" value="1"/><span style={{paddingLeft: '8px'}}>1</span>
                                <Field type="radio" name="radio" value="2"/><span style={{paddingLeft: '8px'}}>2</span>
                                <Field type="radio" name="radio" value="3"/><span style={{paddingLeft: '8px'}}>3</span>
                            </div>
                        </Form>
                    </Formik>
                    <div className={btn.button_container}>
                        <button className={btn.button_white} onClick={() => navigate(-1)}>Back</button>
                        <button className={btn.button_blue} onClick={() => navigate('/fourth')}>Далее</button>
                    </div>
                </div>
            </div>
        </>
    )
}