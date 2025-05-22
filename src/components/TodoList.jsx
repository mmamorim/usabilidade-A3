import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import DialogForm from "./DialogForm";

export default function TodoList() {
    const [tasks, setTasks] = useState([])

    async function load() {
        let res = await fetch("http://localhost:3000/tasks/")
        let data = await res.json()
        console.log("data", data);
        let vetData = []
        for (let key in data) {
            //console.log("item",data[key]);            
            vetData.push(data[key])
        }
        console.log("vetData", vetData);
        setTasks(vetData)
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <>
            <DialogForm refresh={load} />
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Adicionar Tarefa
            </button>
            {
                tasks.map((tarefa) => <TaskItem nome={tarefa.nome} key={tarefa.id} id={tarefa.id} done={tarefa.done} refresh={load} />)
            }
        </>
    )
}