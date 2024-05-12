import { IPin }  from "../../interfaces"
import * as types from "./types"

export const addPin = (payload:IPin) => ({type: types.ADD_PIN, payload});
export const addPins = (payload:IPin[]) => ({type: types.ADD_PINS, payload});