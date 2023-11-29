import restSlice from "./restSlice";

const { configureStore } = require("@reduxjs/toolkit");



const store = configureStore({
    reducer:{
        restSlice
    }
})

export default store