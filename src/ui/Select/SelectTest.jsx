import React, {useState} from 'react';
import {Select} from "./Select";

const options = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3' }
];

function handleSelectChange(value) {
	console.log(`Selected value is ${value}`);
}

export function SelectTest() {
	return (
		<div>
			<Select options={options} onChange={handleSelectChange} placeholder={'hello'}/>
		</div>
	);
}