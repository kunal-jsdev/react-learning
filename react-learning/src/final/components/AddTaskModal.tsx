import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

const AddTaskModal = ({ isModalOpen, onClose, mode }: { isModalOpen: boolean; onClose: () => void; mode: 'light' | 'dark' }) => {
    const [title , setTitle] = useState('');
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleAddTodo = () => {
        if (!title.trim()) return;
        addTodo({ id: Math.floor(Math.random() * 1000), todo: title, completed: false, userId: Math.floor(Math.random() * 1000) });
        onClose();
    }
    return (
        isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
            <div className={` ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} flex flex-col items-center rounded-xl shadow-xl w-125 h-72 mx-4 z-50 py-2.5 relative `}>
                <div className="font-kanit font-medium text-2xl">New Note</div>
                <input
                    type="text"
                    className='border-2 border-violet-500 rounded-md mt-8 h-9 w-110 p-3 font-inter'
                    placeholder='input your note....'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className='border-2 border-violet-500  bg-violet-500 hover:bg-violet-700 hover:cursor-pointer disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed rounded-md px-auto w-24 h-9 absolute bottom-2.5 right-2.5 font-kanit' onClick={handleAddTodo} disabled={!title.trim()}>Apply</button>
                <button className='border-2 border-violet-500 text-violet-500 hover:bg-violet-700 hover:cursor-pointer rounded-md px-auto w-24 h-9 absolute bottom-2.5 left-2.5 font-kanit' onClick={onClose}>cancel</button>
            </div>
        </div>
        )
    )
}

export default AddTaskModal;