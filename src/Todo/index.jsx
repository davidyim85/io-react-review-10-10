import { useState } from "react";

const initial = [
    { name: 'drink water', isComplete: false },
    { name: 'less stress', isComplete: false },
    { name: 'exercise', isComplete: false }
]

const Todo = () => {
    const [todos, setTodos] = useState(initial)


    const handleSubmit = (e) => {
        e.preventDefault() //prevents the reloading of the page. 
        //if we reload all the state will be blasted away and go back to its initial setting

        const info = new FormData(e.target) //get the form object

        // From the form object, we can get the data from the todo input
        // by using the .get method and passing in the NAME of the input
        console.log(info.get('todo')) //whatever we put into our input
        console.log(info.get('isComplete')) // 'on' or null
        //now that i know this is going to work lets add to the state
        setTodos([
            ...todos, //preserve the existing elements
            {  
                name: info.get('todo'),
                isComplete: info.get('isComplete') ? true : false  
            }
        ])

        //reset the form
        // data.set('todo', '') //this will not work because this is react
        // data.set('isComplete', null) //this will not work because this is react
        e.target.reset() // reset the form. will everywhere (react, vanilla html/js, etc)
    }

    return (
        <>
            <h1>Todos</h1>
            {/* an input where i can add todos */}
            <form onSubmit={handleSubmit}>
                Enter Todo: <input name='todo'/>
                Is Complete: <input type="checkbox" name="isComplete"/>
                <button type="submit">Submit</button>
            </form>


            {/* list my todos here */}
            <ul>
                {todos.map((el, index) => {
                    return (
                        <li key={index}>{`${el.name} - ${el.isComplete}`}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default Todo;