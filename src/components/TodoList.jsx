import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

export default function TodoList() {
    const [tasks, setTasks] = useState([])

    async function load() {
        let res = await fetch("http://localhost:3000/tasks/")
        let data = await res.json()
        console.log("data", data);
        let vetData = []
        for(let key in data) {
            console.log("item",data[key]);            
            vetData.push(data[key])
        }
        console.log("vetData", vetData);
        setTasks(vetData)
    }

    useEffect(() => {
        load()
    },[])

    return (
        <>
            <TaskForm />
            {
                tasks.map((tarefa) => <TaskItem nome={tarefa.nome} key={tarefa.id} done={tarefa.done} />)
            }
        </>
    )
}