import type { Activity } from "../types";
import {categories} from "../data/category";
import { useMemo } from "react";
import {PencilSquareIcon,TrashIcon} from '@heroicons/react/24/outline'
type ActivityListProps = {
    activities: Activity[];
}

export const ActivityList = ({activities}: ActivityListProps) => {

    const categoryName = useMemo(() => 
        ( category : Activity['category'])=> categories.map((cat) => cat.id === category ? cat.name : '')
    ,[activities])
    
       
  return (
    <>
    
    <h2 className='text-4xl font-bold mb-4 text-black/80'>Activities and Food</h2>
    
    {activities.map((activity) => (
        <div key={activity.id} className="px-5 py-10 rounded-lg bg-gray-100 mt-5 flex justify-between">
            <div    className="space-y-2 relative">
                <p className={`absolute text-xl -top-8 -left-8 px-10 py-1 uppercase font-medium ${activity.category === 1 ? 'text-orange-500 bg-orange-200/80 rounded-r-md' : 'text-blue-500 bg-blue-200/80 rounded-r-md'}`}>
                    {categoryName(+activity.category)}
                </p>
                <p className=" text-2xl mt-4">{activity.name}</p>
                <p className={`text-4xl font-black ${activity.category === 1 ? 'text-orange-400 bg' : 'text-blue-400'}`}>{activity.calories}
                    <span> Calories</span>
                </p>

            </div>
            <div className="flex items-center gap-2">
              
                  <button className="px-2 py-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out hover:cursor-pointer">
                  <PencilSquareIcon className="w-6 h-6"/>
                  </button>
                  <button className="px-2 py-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out hover:cursor-pointer">
                  <TrashIcon className="w-6 h-6"/>
                  </button>
               

            </div>
        </div>
    ))}
    </>
  )
}
