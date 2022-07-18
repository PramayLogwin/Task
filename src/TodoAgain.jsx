import React, { useState } from 'react';
import './todoagain.css';

export default function TodoAgain() {

    const [list, setList] = useState("");
    const [addList, setaddList] = useState([]);
    const [tooglebtn, settooglebtn] = useState(true);
    const [id, setId] = useState(null);

    const inputbar = (event) => {
        event.preventDefault();
        setList(event.target.value);
    };

    const addItems = () => {
        if (list === "") {
            alert("Pls Enter The Value");
        }
        else if (id) {
            setaddList(addList.map((item) => {
                if (item.id === id) {
                    return { ...item, value: list }
                }
                return item;
            }))
            setList('')
            settooglebtn(true)
            setId(null)
        }

        else {
            setaddList((prevState) => {
                return ([...prevState, { id: Date.now(), value: list }])
            });
            setList('');
        }
    }

    const removeItems = (id) => {
        setaddList((text) => {
            
            return text.filter((addList) => {
                return (addList.id !== id)
            })
        })
    };
    const updateItems = (id) => {
        let newEdit = addList.find((value) => {
            return value.id === id
        });
      
        settooglebtn(false)
        setList(newEdit.value);
        setId(id)
    }
    return (
        <>
            <h1>Add Your Item</h1>
            {
                tooglebtn ? <button onClick={addItems} className="addMorebtn">Add Items</button> :
                    <button onClick={addItems} className="addMorebtn">Edit</button>
            }
            <input type="text" placeholder="Enter a value" className='listitem' value={list} onChange={inputbar}></input>

            <div className='box'>
                {addList.map((item) => {
                  
                    return <div key={item.id}>
                        <h2>{item.value}</h2>
                        <button onClick={() => removeItems(item.id)} className="removebtn">Remove List</button>
                        <button onClick={() => updateItems(item.id)} className="editbtn">Update List</button>
                    </div>
                })}
            </div>
        </>
    )
}
