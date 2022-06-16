import axios from 'axios'
import {LOADDING_DATA , SUCCESS_DATA , ERROR_DATA} from '../action/type'


export const GetAppAction =  () => async dispatch => {

  try {
    dispatch({
        type : LOADDING_DATA
    })
    const {data} = await axios.get('data.json') 
    console.log(data)
    dispatch({
        type : SUCCESS_DATA ,
        payload : data
    })
  } catch (error) {
    dispatch({
        type : ERROR_DATA ,
        payload : "somthing error here /!!"
    })
  }

} 