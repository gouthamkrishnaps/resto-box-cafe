import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// 'thunk'  -> accept an action type string and a function that returns a promise and generates a thunk that disptches pending/fullfiled/rejected action type based that promise
//thunk is not part of slice , its an seperate method in toolkit
// 'createAsyncThunk()' function used to create thunk

//api call using thunk
export const fetchRestaurent = createAsyncThunk("restaurentList/fetchRestaurent",()=>{
    const result = axios.get('/restaurant.json').then(response=>response.data)
    console.log(result);
    return result
})  


// 'extraReducers' used instead of reducers for the use of api call
// "builder" - builder holds the value / response from the thunk
// "addCase" - used to change value of state
const restSlice = createSlice({
    name:'restaurentList',
    initialState:{//when we create api call in slice the data will be in promise based
        loading:false,//pending state
        allRestaurent:[],//resolve state
        error:""//reject state
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurent.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchRestaurent.fulfilled,(state,action)=>{
            state.loading = false,
            state.allRestaurent = action.payload,
            state.error = ""
        })
        builder.addCase(fetchRestaurent.rejected,(state,action)=>{
            state.loading = false,
            state.allRestaurent = "",
            state.error = action.error.message
        })
    }
})

export default restSlice.reducer