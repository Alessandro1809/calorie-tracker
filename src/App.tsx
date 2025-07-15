import { Header } from "./components/Header"
import { FeaturesCard } from "./components/FeaturesCard"
import { features } from "./data/features"
import { Form } from "./components/Form"
import {useReducer} from 'react'
import {activityReducer, initialState} from './reducers/activityReducer'
import { ActivityList } from "./components/ActivityList"

function App() {
  const [state, dispatch] =useReducer(activityReducer, initialState)//state es el estado actual y dispatch es la funcion que se encarga de actualizar el estado

  return (
    
    <div className="min-h-screen w-ful relative">
    {/* Amber Glow Background */}
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: `
          radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ff5733 100%)
        `,
        backgroundSize: "100% 100%",
      }}
    />
    
    <Header />
      
        <main className="container mx-auto max-w-7xl pt-24 ">
          <div className="p-8">
            <h2 className="text-4xl font-bold mb-4 text-black/80">Welcome to <span className="bg-gradient-to-br from-orange-600 to-purple-700 text-transparent bg-clip-text">Calorie Tracker</span></h2>
            <p className="text-lg text-black/80 mb-8">
              Start your journey to a healthier lifestyle by tracking your daily calorie intake.
            </p>
            <FeaturesCard features={features}/>
          </div>
          <section className="p-8">
            <div >
              <Form 
              dispatch={dispatch}/>
            </div>
          </section>
  
         <section className='p-10 mx-auto max-w-7xl'>
          <ActivityList
          activities={state.activities}/>
         </section>
  
        </main>
  </div>
  
  )
}

export default App
