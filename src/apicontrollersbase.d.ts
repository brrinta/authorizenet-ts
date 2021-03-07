/*
 * Author S Brinta<brrinta@gmail.com>
 * Email: brrinta@gmail.com
 * Web: https://brinta.me
 * Created on : Saturday 06 Mar, 2021 02:45:36 BDT
 */

import {APIContracts} from "authorizenet";
import {ANetApiRequest, ANetApiResponse, MessageTypeEnum} from "./apicontracts";


export class APIOperationBase {
	constructor(apiRequest: ANetApiRequest)

	validateRequest()

	validate()

	getResponse(): ANetApiResponse

	getResultcode(): MessageTypeEnum

	getMessagetype(): string

	beforeExecute()

	setClientId()

	setEnvironment(env: string)

	execute(callback:Function)

	getRequestType(): string
}


