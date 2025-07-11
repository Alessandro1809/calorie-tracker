import type { Activity } from "../types"

//primero creamos el tipo de accion
//consta de dos partes: type y payload, el primero es la descripcion de la accion y el segundo es el valor a modificar
export type activityActions =
    {type: 'save-activity',payload: {newActivity: Activity}; }//esto es una accio que se encarga de guardar una actividad
//definimos el tipo de estado
 type ActivityState = {
    activities: Activity[]
}

//definimos el estado inicial
export const initialState:ActivityState = {
    activities: []
}
//definimos el reducer
export const  activityReducer = (
    state:ActivityState = initialState,
    action:activityActions) =>{

    if(action.type === 'save-activity') {
        //En esta parte del codigo se maneja la logica para actualizar el state
        return {//retorna el nuevo estado y esta presente en cada accion 
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }
    return state;
}