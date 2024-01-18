import { useState } from "react"

function newTodoForm(){

const [description, setDescription] = useState('');
const [assigned, setAssigned] = useState('');

const desciptionChange = (event) => {
    console.log('description', event.target.value)
    setDescription(event.target.value)
}

const assignedChange = (event) => {
    console.log('assigned', event.target.value)
    setAssigned(event.target.value)
}

    return(
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        required
                        onChange={assignedChange}
                        value={assigned}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea 
                        className='form-control' 
                        rows={3} 
                        required
                        onChange={desciptionChange}
                        value={description}
                    ></textarea>
                </div>
                <button type='button' className='btn btn-primary mt-3'>Add todo</button>
            </form>
        </div>
    )
}

export default newTodoForm