import { Icon } from "@iconify/react";
import { useState } from "react";
import TaskForm from "./TaskForm";

export default function TaskItem({ nome, id, done, refresh }) {

    async function excluir() {
        console.log("excluir", id);
        let res = await fetch("http://localhost:3000/tasks/" + id,
            {
                method: "DELETE"
            }
        )
        let data = await res.json()
        console.log("resposta servidor", data);
        refresh()
    }

    return (
        <>
            <div className="bg-gray-200 p-2 rounded m-2 flex items-center justify-between md:w-140">
                <div>
                    {nome}
                </div>
                <div className="flex items-center gap-2">
                    {
                        done ?
                            <div className="border border-black rounded-2xl px-1.5 pt-1 bg-green-800 text-white">
                                <Icon icon="mdi:check" />
                            </div>
                            :
                            <div className="border border-black rounded-2xl px-1.5 pt-1 bg-gray-400 text-white">
                                <Icon icon="mdi:check" />
                            </div>
                    }
                    <div className="border border-black rounded-2xl px-1.5 pt-1 bg-gray-400 text-white">
                        <Icon icon="mdi:pencil" />
                    </div>
                    <div onClick={excluir} className="border border-black rounded-2xl px-1.5 pt-1 bg-red-800 text-white">
                        <Icon icon="mdi:delete" />
                    </div>
                </div>
            </div>
        </>
    )
}