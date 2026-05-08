import 'tailwindcss'
import { Search , Moon , Sun , Check , Plus} from 'lucide-react'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { markCompletedTask, type todos } from './todo/todoSlice'
import AddTaskModal from './components/AddTaskModal'
const Page = () => {
    const [filter , setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [mode , setMode] = useState<'light' | 'dark'>('light');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const todos = useSelector((state : todos) => state.todos);
    const dispatch = useDispatch();
    const markCompleted = (id: string) => {
        console.log(id);
        dispatch(markCompletedTask(id));
    };
    const filteredData = useMemo(() => {
        let result = todos;
        if (filter === 'completed') result = result.filter(i => i.completed);
        if (filter === 'uncompleted') result = result.filter(i => !i.completed);
        if (searchTerm) result = result.filter(i => i.title.toLowerCase().includes(searchTerm.toLowerCase()));
        return result;
    }, [filter, todos, searchTerm]);


    return (
        <div className={`flex justify-center items-center min-h-screen ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className={`flex flex-col items-center h-screen w-3xl mx-auto relative `}>
                <div className='text-2xl font-medium font-kanit mt-6'>TODO LIST</div>
                <div className='flex justify-between'>
                    <div className='relative'>
                        <Search className='absolute top-1/2 right-6 -translate-y-1.5 text-violet-500' />
                        <input type="text" className='border-2 border-violet-500 rounded-md px-3 mt-3 h-9 w-148.75 font-inter' placeholder='search note....' onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                    <select name="status" id="status" className='border-2 border-violet-500 text-white bg-violet-500  hover:bg-violet-700 rounded-md px-3 mt-3 mx-3 h-9 w-21' onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                    <button 
                        className='border-2 border-violet-500 text-white bg-violet-500  hover:bg-violet-700 rounded-md px-3 mt-3 h-9'
                        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    >
                        {mode === 'light' ? <Moon /> : <Sun />}
                    </button>
                </div>
                <div className = 'mt-6 w-130 overflow-auto h-136 flex flex-col items-center'>
                    {filteredData?.map((item) => (
                        <div key={item.id} className={` border-b border-violet-500 shadow-sm px-3 py-2 mb-3 w-130 flex justify-start`}>
                            <label className='flex items-center cursor-pointer'>
                                <input type="checkbox" className="peer sr-only" checked={item.completed} onChange={() => markCompleted(item.id)}/>
                                    <span className="w-7 h-7 mr-3 rounded border border-violet-500  hover:bg-violet-700
                                                    peer-checked:bg-violet-500 peer-checked:border-violet-500
                                                    flex items-center justify-center" >
                                        {item.completed && <Check className=' w-4 h-4 text-white'/>}
                                    </span>
                            </label>
                            <div className='font-medium font-kanit text-xl'>{item.completed ? <s className='text-gray-400'>{`${item.title} #${item.id}`}</s> : `${item.title} #${item.id}`}</div>
                        </div>
                    ))}
                </div>
                <div className='absolute bottom-20 right-2'>
                    <button className='border-2 border-violet-500 text-white bg-violet-500 hover:bg-violet-700 rounded-full h-12 w-12 ' onClick={() => setIsModalOpen(true)}>
                        <Plus className='w-4 h-4 mx-auto' />
                    </button>
                </div>
            </div>
            <AddTaskModal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} mode={mode} />
        </div>
    )
}

export default Page;