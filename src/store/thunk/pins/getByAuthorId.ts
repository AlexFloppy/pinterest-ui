import { IPin } from "@/interfaces";
import { addPins } from "@/store/actions";
 

function getListByAuthorId(id?:string) {
  return async (dispatch:any, getState:any, api:any) => {
    const pins = await api.pins.getListByAuthorId(id||"787e1d38-5e9d-4bb9-bee6-f9294b730501");
    dispatch(addPins(pins));
  };
}

export default getListByAuthorId;