import {combineReducers} from 'redux'

export const rootReducer = combineReducers({test})

export type RootState = ReturnType<typeof rootReducer>
