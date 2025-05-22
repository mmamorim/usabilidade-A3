import { Icon } from "@iconify/react/dist/iconify.js";

export default function TopBar() {


    return (
        <>
            <div className="flex items-center gap-2 bg-blue-300 text-xl font-bold m-2 p-2 rounded md:w-140">
                <Icon icon="teenyicons:text-document-alt-outline" />
                <div>
                    Todo List App
                </div>
            </div>
        </>
    )
}