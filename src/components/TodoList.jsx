import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import { Button } from "react-bootstrap";
import Cadastro from "./Cadastro";

export default function TodoList() {
    const [tasks, setTasks] = useState([])
    const [cadastroShow, setCadastroShow] = useState(false)

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

    function handleClose() {

    }

    return (
        <>

            <div className="w-120">
                <div className="flex justify-start mx-2">
                    <Cadastro refresh={load} />
                </div>
                {
                    tasks.map((tarefa) => <TaskItem nome={tarefa.nome} key={tarefa.id} id={tarefa.id} done={tarefa.done} refresh={load} />)
                }
            </div>
        </>
    )
}