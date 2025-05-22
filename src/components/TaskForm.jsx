import { useState } from "react";

export default function TaskForm({ refresh }) {
    const [taskName, setTaskName] = useState("Um exemplo de tarefa")
    const [taskDate, setTaskDate] = useState("2025-01-01")
    const [taskDone, setTaskDone] = useState(false)

    async function adicionar() {
        let elem = {
            nome: taskName,
            data: taskDate,
            done: taskDone
        }
        console.log("adicionar", elem);
        let res = await fetch("http://localhost:3000/tasks/", {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(elem)
        })
        let data = await res.json()
        console.log("resposta servidor", data);
        refresh()
    }

    return (
        <>
            <div className="border border-black p-2 rounded m-2 md:w-140">
                <div>
                    Digite o nome da tarefa
                </div>
                <hr className="my-1" />
                <div className="flex items-center gap-2 my-2">
                    <div>
                        Tarefa:
                    </div>
                    <input value={taskName} onChange={(e) => { setTaskName(e.target.value) }} type="text" className="border border-black p-1 w-45" />
                </div>
                <div className="flex items-center gap-2 my-2">
                    <div>
                        Data:
                    </div>
                    <input value={taskDate} onChange={(e) => { setTaskDate(e.target.value) }} type="date" className="border border-black" />
                </div>
                <div className="flex items-center gap-2 my-2">
                    <div>
                        Done:
                    </div>
                    <input value={taskDone} onClick={() => { setTaskDone(!taskDone) }} type="checkbox" className="border border-black" />
                </div>
                <button onClick={adicionar} className="border border-black px-1 rounded">
                    Adicionar
                </button>


            </div>
        </>
    )
}