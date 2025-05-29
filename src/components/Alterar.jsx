import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Icon } from "@iconify/react";

export default function Alterar({ refresh, task }) {
    const [show, setShow] = useState(false);
    const [taskName, setTaskName] = useState(task.nome)
    const [taskDate, setTaskDate] = useState(task.data)
    const [taskDone, setTaskDone] = useState(task.done)

    async function alterar() {
        let elem = {
            nome: taskName,
            data: taskDate,
            done: taskDone
        }
        console.log("alterer", elem);
        let res = await fetch("http://localhost:3000/tasks/"+task.id, {
            method: "PUT",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(elem)
        })
        let data = await res.json()
        console.log("resposta servidor", data);
        refresh()
        setShow(false)
    }
    return (
        <>
            <div onClick={() => setShow(true)} className="border border-black rounded-2xl px-1.5 pt-1 bg-gray-400 text-white cursor-pointer">
                <Icon icon="mdi:pencil" />
            </div>

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Alterar Tarefa
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-2">
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
                            <input checked={taskDone} onClick={() => { setTaskDone(!taskDone) }} type="checkbox" className="border border-black" />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={alterar}>
                        Alterar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}