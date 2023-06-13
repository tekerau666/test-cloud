import {Field, Formik} from "formik";
import style from './Select.module.scss';
import arrow_up from './arrow-up.svg';
import arrow_down from './arrow-down.svg';
import {useState} from "react";
export function Select({options, onChange, placeholder}) {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedValue, setSelectedValue] = useState(options[0].value);

    const toggleOptions = () => setShowOptions(!showOptions);

    const handleOptionClick = (value) => {
        setSelectedValue(value);
        onChange(value);
        setShowOptions(false);
    }
    return (
        <>
            <div className={style.select}>
                <div className={style.selectContainer} onClick={toggleOptions}>
                    {showOptions ? (
                            <div className={style.placeholder}>{placeholder}</div>
                        ):(
                            <div>{selectedValue}</div>
                        )}
                    <div></div>
                    <div>{showOptions ? <img src={arrow_down} alt=""/> : <img src={arrow_up} alt=""/>}</div>
                </div>
                {showOptions &&
                    <ul className={style.optionsContainer}>
                        {options.map(option => (
                            <li style={{cursor: 'pointer', paddingTop: '16px'}} key={option.value} onClick={() => handleOptionClick(option.value)}>{option.label}</li>
                        ))}
                    </ul>
                }
            </div>
        </>
    );
}