import { IPin } from "@/interfaces";
import { addPin } from "@/store/actions";
 

function create(data:IPin) {
  return async (dispatch:any, getState:any, api:any) => {
    const pin = await api.pins.create(data);
    dispatch(addPin(pin));
  };
}

export default create;
