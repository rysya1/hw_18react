import { useState } from 'react'
const BasicForm = (props) => {
	const [enteredFirst, setEnteredFirst] = useState('')
	const [enteredList, setEnteredList] = useState('')
	const [enteredEmail, setEnteredEmail] = useState('')
	const [enteredNameTouched, setEnteredNameTouched] = useState(false)
	const [enteredNameTouched2, setEnteredNameTouched2] = useState(false)
	const [enteredNameTouched3, setEnteredNameTouched3] = useState(false)
	const firstNameHandler = (e) => {
		setEnteredFirst(e.target.value)
	}
	const listNameHandler = (e) => {
		setEnteredList(e.target.value)
	}
	const emailAddressHandler = (e) => {
		setEnteredEmail(e.target.value)
	}
	const nameInputBlurHandler = () => {
		setEnteredNameTouched(true)
	}
	const listInputBlurHandler = () => {
		setEnteredNameTouched2(true)
	}
	const emailInputBlurHandler = () => {
		setEnteredNameTouched3(true)
	}
	const enteredNameIsValid = enteredFirst.trim() !== ''
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
	let formIsValid = false
	if (enteredNameIsValid) {
		formIsValid = true
	}
	const enteredNameIsValid2 = enteredList.trim() !== ''
	const nameInputIsInvalid2 = !enteredNameIsValid2 && enteredNameTouched2
  let formIsValid2 = false
	if (enteredNameIsValid2) {
		formIsValid2 = true
	}
	const enteredNameIsValid3 = enteredEmail.trim() !== ''
	const nameInputIsInvalid3 = !enteredNameIsValid3 && enteredNameTouched3
  let formIsValid3 = false
	if (enteredNameIsValid3) {
		formIsValid3 = true
	}
	const formSubmitHandler = (e) => {
		e.preventDefault()
		setEnteredNameTouched(true)
		setEnteredNameTouched2(true)
		setEnteredNameTouched3(true)
		setEnteredFirst('')
		setEnteredList('')
		setEnteredEmail('')
    setEnteredNameTouched(false)
		setEnteredNameTouched2(false)
		setEnteredNameTouched3(false)
	}
	const nameInputClasses = nameInputIsInvalid
		? 'form-control invalid'
		: 'form-control'
	const nameInputClasses2 = nameInputIsInvalid2
		? 'form-control invalid'
		: 'form-control'
	const nameInputClasses3 = nameInputIsInvalid3
		? 'form-control invalid'
		: 'form-control'
	return (
		<form onSubmit={formSubmitHandler}>
			<div className='control-group'>
				<div className={nameInputClasses}>
					<label htmlFor='name'>First Name</label>
					<input
						value={enteredFirst}
						type='text'
						id='name'
						onChange={firstNameHandler}
						onBlur={nameInputBlurHandler}
					/>
					{nameInputIsInvalid && <p>Name must not be empty</p>}
				</div>
				<div className={nameInputClasses2}>
					<label htmlFor='name'>Last Name</label>
					<input
						value={enteredList}
						type='text'
						id='name'
						onChange={listNameHandler}
						onBlur={listInputBlurHandler}
					/>
					{nameInputIsInvalid2 && <p>Name must not be empty</p>}
				</div>
				<div className={nameInputClasses3}>
					<label htmlFor='name'>E-Mail Address</label>
					<input
            value={enteredEmail}
						type='text'
						id='name'
						onChange={emailAddressHandler}
						onBlur={emailInputBlurHandler}
					/>
					{nameInputIsInvalid3 && <p>Name must not be empty</p>}
				</div>
			</div>

			<div className='form-actions'>
				<button disabled={!formIsValid} disabled={!formIsValid2} disabled={!formIsValid3}>Submit</button>
			</div>
		</form>
	)
}
export default BasicForm