import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'
import API from '@/services'


export default configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: API
      }
    })
})