import { useState } from "react";
import { categories } from "../data/category";
import type { Activity } from "../types";
import type { activityActions } from "../reducers/activityReducer";
import { v4 as uuidv4 } from 'uuid';
type FormProps = {
    dispatch: React.Dispatch<activityActions>;
}

const INITIAL_STATE: Activity = {
    id: uuidv4(),
    category: 1,
    name: '',
    calories: 0
}

export const Form = ({dispatch}: FormProps) => {
    const [activity, setActivity] = useState<Activity>(INITIAL_STATE);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        
        const { id, value } = e.target;

        const isNumberField = ['category', 'calories'].includes(id);
        setActivity({
            ...activity,
            [id]: isNumberField ? +value : value
        });
    }

    const isValidActivity = () => {
        const {name,calories} = activity;
        return name.trim() !== '' && calories > 0;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type:'save-activity',payload:{newActivity: activity}});
        setActivity({
            ...INITIAL_STATE,
            id: uuidv4(),
        });
    }
  
   
  return (
    <form
    className="bg-gradient-to-br from-white to-purple-200/50 p-6 rounded-lg shadow-lg shadow-purple-300/40 z-[10]"
    onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-3 mb-3">
            <label className="font-semibold text-xl text-purple-900" htmlFor="category">Category</label>
            <select 
            className="border-2 border-purple-300 rounded-lg p-2" 
            name="category" 
            id="category"
            value={activity.category}
            onChange={handleInputChange}
            >
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}

            </select>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-3">
            <label className="font-semibold text-xl text-purple-900" htmlFor="activity">Activity</label>
            <input 
            type="text" 
            id="name" 
            name="name"
            className="border-2 border-purple-300 rounded-lg p-2 bg-transparent text-purple-900"
            placeholder="Ex: exercise, running, etc." 
            value={activity.name}
            onChange={handleInputChange}/>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-3">
            <label className="font-semibold text-xl text-purple-900" htmlFor="calories">Calories</label>
            <input 
            type="number" 
            id="calories" 
            name="calories"
            className="border-2 border-purple-300 rounded-lg p-2"
            placeholder="Ex: 100, 200, etc." 
            value={activity.calories}
            onChange={handleInputChange}/>
        </div>

        <input 
        type="submit"
        value={activity.category === 1 ? "Save Food" : "Save Exercise"}    
        className="border-2 bg-gradient-to-br from-orange-700 to-purple-700 font-semibold text-xl text-purple-100 px-4 py-4 rounded-full hover:bg-purple-60 transition-colors duration-300 ease-in-out hover:cursor-pointer w-full disabled:opacity-50"
        disabled={!isValidActivity()}
        >
        
        </input>
    </form>
  )
}
