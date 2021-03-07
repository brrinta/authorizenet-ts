/*
 * Author S Brinta<brrinta@gmail.com>
 * Email: brrinta@gmail.com
 * Web: https://brinta.me
 * Created on : Saturday 06 Mar, 2021 11:55:11 BDT
 */


declare module "authorizenet" {
    import {constants} from "./constants";
    import * as APIControllers from "./apicontrollers";
    import * as APIContracts from "./apicontracts";
    export const Constants: typeof constants = constants
    export const APIContracts = APIContracts
    export const APIControllers = APIControllers
}
