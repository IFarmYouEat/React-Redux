import { useState} from 'react';
import { useDispatch } from 'react-redux';


function ListName() {
const [newListName, setNewListName] = useState('')
// This is a commonly missed item.
const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New name:', newListName);
    const action = {type: 'SET_LIST_NAME', payload: newListName};
    dispatch(action);
    setNewListName('');
}

return(
    <div>
    <h4>Name your Book List.</h4>
    <form onSubmit={handleSubmit}>
        <input value = {newListName} onChange={(e) => setNewListName(e.target.value)} />
        <button type ="submit">Save</button>
    </form>
    </div>
)
}

export default ListName;