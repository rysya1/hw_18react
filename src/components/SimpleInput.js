import { useEffect, useRef, useState } from 'react'

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('')
	// const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
	const [enteredNameTouched, setEnteredNameTouched] = useState(false)
	// const [formIsValid, setFormIsValid] = useState(false)
	// const nameInputRef = useRef(null)
	const enteredNameIsValid = enteredName.trim() !== ''
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
  let formIsValid = false
  if (enteredNameIsValid) {
    formIsValid = true
  }
  // useEffect(() => {
	// 	if (enteredNameIsValid) {
	// 		setFormIsValid(true)
	// 	} else {
	// 		setFormIsValid(false)
	// 	}
	// }, [enteredNameIsValid])
	const nameInputBlurHandler = () => {
		setEnteredNameTouched(true)
		// if (enteredName.trim() === '') {
		// 	setEnteredNameIsValid(false)
		// 	return
		// }
		// setEnteredNameIsValid(true)
	}
	const nameInputHandler = (e) => {
		setEnteredName(e.target.value)

		// if (enteredName.trim() !== '') {
		// 	setEnteredNameIsValid(true)
		// }
	}

	const formSubmitHandler = (e) => {
		e.preventDefault()
		setEnteredNameTouched(true)
		// if (enteredName.trim() === '') {
		// 	setEnteredNameIsValid(false)
		// 	return
		// }
		// setEnteredNameIsValid(true)
		if (!enteredNameIsValid) return
		// let enteredValueRef = nameInputRef.current.value
		// console.log(enteredValueRef)
		setEnteredName('')
	}
	// const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
	const nameInputClasses = nameInputIsInvalid
		? 'form-control invalid'
		: 'form-control'
	return (
		<form onSubmit={formSubmitHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					value={enteredName}
					type='text'
					id='name'
					onBlur={nameInputBlurHandler}
					onChange={nameInputHandler}
					// ref={nameInputRef}
				/>
				{nameInputIsInvalid && <p>Name must not be empty</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
