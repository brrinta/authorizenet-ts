/*
 * Author S Brinta<brrinta@gmail.com>
 * Email: brrinta@gmail.com
 * Web: https://brinta.me
 * Created on : Friday 05 Mar,
 2021 09:28:18 BDT
 */


export class ANetApiRequest {
	constructor(obj?: {
		merchantAuthentication: MerchantAuthenticationType,
		clientId: string,
		refId: string
	})

	getMerchantAuthentication(): MerchantAuthenticationType

	setMerchantAuthentication(merchantAuthentication: MerchantAuthenticationType): void

	getClientId(): string

	setClientId(clientId: string): void

	getRefId(): string

	setRefId(refId: string): void

	getJSON(): any
}

export class ANetApiResponse {
	constructor(obj?: {
		refId: string,
		messages: MessagesType,
		sessionToken: string
	})

	getRefId(): string

	setRefId(refId: string): void ;

	getMessages(): MessagesType ;

	setMessages(messages: MessagesType): void ;

	getSessionToken(): string ;

	setSessionToken(sessionToken: string): void ;

}

export class ARBGetSubscriptionListSorting {
	constructor(obj?: {
		orderBy: ARBGetSubscriptionListOrderFieldEnum,
		orderDescending: boolean
	})

	getOrderBy(): ARBGetSubscriptionListOrderFieldEnum ;

	setOrderBy(orderBy: ARBGetSubscriptionListOrderFieldEnum): void ;

	isOrderDescending(): boolean ;

	setOrderDescending(orderDescending: boolean): void ;

}

export class ARBSubscriptionMaskedType {
	constructor(obj?: {
		name: string,
		paymentSchedule: PaymentScheduleType,
		amount: number,
		trialAmount: number,
		status: ARBSubscriptionStatusEnum,
		profile: SubscriptionCustomerProfileType,
		order: OrderType,
		arbTransactions: Array<ArbTransaction>
	})

	getName(): string ;

	setName(name: string): void ;

	getPaymentSchedule(): PaymentScheduleType ;

	setPaymentSchedule(paymentSchedule: PaymentScheduleType): void ;

	getAmount(): number ;

	setAmount(amount: number): void ;

	getTrialAmount(): number ;

	setTrialAmount(trialAmount: number): void ;

	getStatus(): ARBSubscriptionStatusEnum ;

	setStatus(status: ARBSubscriptionStatusEnum): void ;

	getProfile(): SubscriptionCustomerProfileType ;

	setProfile(profile: SubscriptionCustomerProfileType): void ;

	getOrder(): OrderType ;

	setOrder(order: OrderType): void ;

	getArbTransactions(): Array<ArbTransaction> ;

	setArbTransactions(arbTransactions: Array<ArbTransaction>): void ;

}

export class ARBSubscriptionType {
	constructor(obj?: {
		name: string,
		paymentSchedule: PaymentScheduleType,
		amount: number,
		trialAmount: number,
		payment: PaymentType,
		order: OrderType,
		customer: CustomerType,
		billTo: NameAndAddressType,
		shipTo: NameAndAddressType,
		profile: CustomerProfileIdType
	})

	getName(): string ;

	setName(name: string): void ;

	getPaymentSchedule(): PaymentScheduleType ;

	setPaymentSchedule(paymentSchedule: PaymentScheduleType): void ;

	getAmount(): number ;

	setAmount(amount: number): void ;

	getTrialAmount(): number ;

	setTrialAmount(trialAmount: number): void ;

	getPayment(): PaymentType ;

	setPayment(payment: PaymentType): void ;

	getOrder(): OrderType ;

	setOrder(order: OrderType): void ;

	getCustomer(): CustomerType ;

	setCustomer(customer: CustomerType): void ;

	getBillTo(): NameAndAddressType ;

	setBillTo(billTo: NameAndAddressType): void ;

	getShipTo(): NameAndAddressType ;

	setShipTo(shipTo: NameAndAddressType): void ;

	getProfile(): CustomerProfileIdType ;

	setProfile(profile: CustomerProfileIdType): void ;

}

export class ArbTransaction {
	constructor(obj?: {
		transId: string,
		response: string,
		submitTimeUTC: Date,
		payNum: number,
		attemptNum: number
	})

	getTransId(): string ;

	setTransId(transId: string): void ;

	getResponse(): string ;

	setResponse(response: string): void ;

	getSubmitTimeUTC(): Date ;

	setSubmitTimeUTC(submitTimeUTC: Date): void ;

	getPayNum(): number ;

	setPayNum(payNum: number): void ;

	getAttemptNum(): number ;

	setAttemptNum(attemptNum: number): void ;


}

export class AuDetailsType {
	constructor(obj?: {
		customerProfileID: number,
		customerPaymentProfileID: number,
		firstName: string,
		lastName: string,
		updateTimeUTC: string,
		auReasonCode: string,
		reasonDescription: string
	})


	getCustomerProfileID(): number ;

	setCustomerProfileID(customerProfileID: number): void ;

	getCustomerPaymentProfileID(): number ;

	setCustomerPaymentProfileID(customerPaymentProfileID: number): void ;

	getFirstName(): string ;

	setFirstName(firstName: string): void ;

	getLastName(): string ;

	setLastName(lastName: string): void ;

	getUpdateTimeUTC(): string ;

	setUpdateTimeUTC(updateTimeUTC: string): void ;

	getAuReasonCode(): string ;

	setAuReasonCode(auReasonCode: string): void ;

	getReasonDescription(): string ;

	setReasonDescription(reasonDescription: string): void ;

}

export class AuResponseType {
	constructor(obj?: {
		auReasonCode: string,
		profileCount: number,
		reasonDescription: string
	})


	getAuReasonCode(): string ;

	setAuReasonCode(auReasonCode: string): void ;

	getProfileCount(): number ;

	setProfileCount(profileCount: number): void ;

	getReasonDescription(): string ;

	setReasonDescription(reasonDescription: string): void ;

}

export class BankAccountMaskedType {
	constructor(obj?: {
		accountType: BankAccountTypeEnum,
		routingNumber: string,
		accountNumber: string,
		nameOnAccount: string,
		echeckType: EcheckTypeEnum,
		bankName: string
	})


	getAccountType(): BankAccountTypeEnum ;

	setAccountType(accountType: BankAccountTypeEnum): void ;

	getRoutingNumber(): string ;

	setRoutingNumber(routingNumber: string): void ;

	getAccountNumber(): string ;

	setAccountNumber(accountNumber: string): void ;

	getNameOnAccount(): string ;

	setNameOnAccount(nameOnAccount: string): void ;

	getEcheckType(): EcheckTypeEnum ;

	setEcheckType(echeckType: EcheckTypeEnum): void ;

	getBankName(): string ;

	setBankName(bankName: string): void ;


}

export class BankAccountType {
	constructor(obj?: {
		accountType: BankAccountTypeEnum,
		routingNumber: string,
		accountNumber: string,
		nameOnAccount: string,
		echeckType: EcheckTypeEnum,
		bankName: string,
		checkNumber: string
	})


	getAccountType(): BankAccountTypeEnum ;

	setAccountType(accountType: BankAccountTypeEnum): void ;

	getRoutingNumber(): string ;

	setRoutingNumber(routingNumber: string): void ;

	getAccountNumber(): string ;

	setAccountNumber(accountNumber: string): void ;

	getNameOnAccount(): string ;

	setNameOnAccount(nameOnAccount: string): void ;

	getEcheckType(): EcheckTypeEnum ;

	setEcheckType(echeckType: EcheckTypeEnum): void ;

	getBankName(): string ;

	setBankName(bankName: string): void ;

	getCheckNumber(): string ;

	setCheckNumber(checkNumber: string): void ;

}

export class BatchDetailsType {
	constructor(obj?: {
		batchId: string,
		settlementTimeUTC: Date,
		settlementTimeLocal: Date,
		settlementState: string,
		paymentMethod: string,
		marketType: string,
		product: string,
		statistics: Array<BatchStatisticType>
	})

	getBatchId(): string ;

	setBatchId(batchId: string): void ;

	getSettlementTimeUTC(): Date ;

	setSettlementTimeUTC(settlementTimeUTC: Date): void ;

	getSettlementTimeLocal(): Date ;

	setSettlementTimeLocal(settlementTimeLocal: Date): void ;

	getSettlementState(): string ;

	setSettlementState(settlementState: string): void ;

	getPaymentMethod(): string ;

	setPaymentMethod(paymentMethod: string): void ;

	getMarketType(): string ;

	setMarketType(marketType: string): void ;

	getProduct(): string ;

	setProduct(product: string): void ;

	getStatistics(): Array<BatchStatisticType> ;

	setStatistics(statistics: Array<BatchStatisticType>): void ;

}

export class BatchStatisticType {
	constructor(obj?: {
		accountType: string,
		chargeAmount: number,
		chargeCount: number,
		refundAmount: number,
		refundCount: number,
		voidCount: number,
		declineCount: number,
		errorCount: number,
		returnedItemAmount: number,
		returnedItemCount: number,
		chargebackAmount: number,
		chargebackCount: number,
		correctionNoticeCount: number,
		chargeChargeBackAmount: number,
		chargeChargeBackCount: number,
		refundChargeBackAmount: number,
		refundChargeBackCount: number,
		chargeReturnedItemsAmount: number,
		chargeReturnedItemsCount: number,
		refundReturnedItemsAmount: number,
		refundReturnedItemsCount: number
	})

	getAccountType(): string ;

	setAccountType(accountType: string): void ;

	getChargeAmount(): number ;

	setChargeAmount(chargeAmount: number): void ;

	getChargeCount(): number ;

	setChargeCount(chargeCount: number): void ;

	getRefundAmount(): number ;

	setRefundAmount(refundAmount: number): void ;

	getRefundCount(): number ;

	setRefundCount(refundCount: number): void ;

	getVoidCount(): number ;

	setVoidCount(voidCount: number): void ;

	getDeclineCount(): number ;

	setDeclineCount(declineCount: number): void ;

	getErrorCount(): number ;

	setErrorCount(errorCount: number): void ;

	getReturnedItemAmount(): number ;

	setReturnedItemAmount(returnedItemAmount: number): void ;

	getReturnedItemCount(): number ;

	setReturnedItemCount(returnedItemCount: number): void ;

	getChargebackAmount(): number ;

	setChargebackAmount(chargebackAmount: number): void ;

	getChargebackCount(): number ;

	setChargebackCount(chargebackCount: number): void ;

	getCorrectionNoticeCount(): number ;

	setCorrectionNoticeCount(correctionNoticeCount: number): void ;

	getChargeChargeBackAmount(): number ;

	setChargeChargeBackAmount(chargeChargeBackAmount: number): void ;

	getChargeChargeBackCount(): number ;

	setChargeChargeBackCount(chargeChargeBackCount: number): void ;

	getRefundChargeBackAmount(): number ;

	setRefundChargeBackAmount(refundChargeBackAmount: number): void ;

	getRefundChargeBackCount(): number ;

	setRefundChargeBackCount(refundChargeBackCount: number): void ;

	getChargeReturnedItemsAmount(): number ;

	setChargeReturnedItemsAmount(chargeReturnedItemsAmount: number): void ;

	getChargeReturnedItemsCount(): number ;

	setChargeReturnedItemsCount(chargeReturnedItemsCount: number): void ;

	getRefundReturnedItemsAmount(): number ;

	setRefundReturnedItemsAmount(refundReturnedItemsAmount: number): void ;

	getRefundReturnedItemsCount(): number ;

	setRefundReturnedItemsCount(refundReturnedItemsCount: number): void ;

}

export class CardArt {
	constructor(obj?: {
		cardBrand: string,
		cardImageHeight: string,
		cardImageUrl: string,
		cardImageWidth: string,
		cardType: string
	})

	getCardBrand(): string ;

	setCardBrand(cardBrand: string): void ;

	getCardImageHeight(): string ;

	setCardImageHeight(cardImageHeight: string): void ;

	getCardImageUrl(): string ;

	setCardImageUrl(cardImageUrl: string): void ;

	getCardImageWidth(): string ;

	setCardImageWidth(cardImageWidth: string): void ;

	getCardType(): string ;

	setCardType(cardType: string): void ;

}

export class CcAuthenticationType {
	constructor(obj?: {
		authenticationIndicator: string,
		cardholderAuthenticationValue: string
	})

	getAuthenticationIndicator(): string ;

	setAuthenticationIndicator(authenticationIndicator: string): void ;

	getCardholderAuthenticationValue(): string ;

	setCardholderAuthenticationValue(cardholderAuthenticationValue: string): void ;

}

export class ContactDetailType {
	constructor(obj?: {
		email: string,
		firstName: string,
		lastName: string
	})

	getEmail(): string ;

	setEmail(email: string): void ;

	getFirstName(): string ;

	setFirstName(firstName: string): void ;

	getLastName(): string ;

	setLastName(lastName: string): void ;

}

export class CreateProfileResponse {
	constructor(obj?: {
		messages: MessagesType,
		customerProfileId: string,
		customerPaymentProfileIdList: Array<String>,
		customerShippingAddressIdList: Array<String>
	})

	getMessages(): MessagesType ;

	setMessages(messages: MessagesType): void ;

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerPaymentProfileIdList(): Array<String> ;

	setCustomerPaymentProfileIdList(customerPaymentProfileIdList: Array<String>): void ;

	getCustomerShippingAddressIdList(): Array<String> ;

	setCustomerShippingAddressIdList(customerShippingAddressIdList: Array<String>): void ;

}

export class CreditCardMaskedType {
	constructor(obj?: {
		cardNumber: string,
		expirationDate: string,
		cardType: string,
		cardArt: CardArt,
		issuerNumber: string,
		isPaymentToken: boolean
	})

	getCardNumber(): string ;

	setCardNumber(cardNumber: string): void ;

	getExpirationDate(): string ;

	setExpirationDate(expirationDate: string): void ;

	getCardType(): string ;

	setCardType(cardType: string): void ;

	getCardArt(): CardArt ;

	setCardArt(cardArt: CardArt): void ;

	getIssuerNumber(): string ;

	setIssuerNumber(issuerNumber: string): void ;

	isIsPaymentToken(): boolean ;

	setIsPaymentToken(isPaymentToken: boolean): void ;

}

export class CreditCardSimpleType {
	constructor(obj?: {
		cardNumber: string,
		expirationDate: string
	})

	getCardNumber(): string ;

	setCardNumber(cardNumber: string): void ;

	getExpirationDate(): string ;

	setExpirationDate(expirationDate: string): void ;

}

export class CreditCardTrackType {
	constructor(obj?: {
		track1: string,
		track2: string
	})

	getTrack1(): string ;

	setTrack1(track1: string): void ;

	getTrack2(): string ;

	setTrack2(track2: string): void ;

}

export class CustomerDataType {
	constructor(obj?: {
		type: CustomerTypeEnum,
		id: string,
		email: string,
		driversLicense: DriversLicenseType,
		taxId: string
	})

	getType(): CustomerTypeEnum ;

	setType(type: CustomerTypeEnum): void ;

	getId(): string ;

	setId(id: string): void ;

	getEmail(): string ;

	setEmail(email: string): void ;

	getDriversLicense(): DriversLicenseType ;

	setDriversLicense(driversLicense: DriversLicenseType): void ;

	getTaxId(): string ;

	setTaxId(taxId: string): void ;

}

export class CustomerPaymentProfileBaseType {
	constructor(obj?: {
		customerType: CustomerTypeEnum,
		billTo: CustomerAddressType
	})

	getCustomerType(): CustomerTypeEnum ;

	setCustomerType(customerType: CustomerTypeEnum): void ;

	getBillTo(): CustomerAddressType ;

	setBillTo(billTo: CustomerAddressType): void ;

}

export class CustomerPaymentProfileListItemType {
	constructor(obj?: {
		defaultPaymentProfile: boolean,
		customerPaymentProfileId: number,
		customerProfileId: number,
		billTo: CustomerAddressType,
		payment: PaymentMaskedType
	})

	isDefaultPaymentProfile(): boolean ;

	setDefaultPaymentProfile(defaultPaymentProfile: boolean): void ;

	getCustomerPaymentProfileId(): number ;

	setCustomerPaymentProfileId(customerPaymentProfileId: number): void ;

	getCustomerProfileId(): number ;

	setCustomerProfileId(customerProfileId: number): void ;

	getBillTo(): CustomerAddressType ;

	setBillTo(billTo: CustomerAddressType): void ;

	getPayment(): PaymentMaskedType ;

	setPayment(payment: PaymentMaskedType): void ;

}

export class CustomerPaymentProfileSorting {
	constructor(obj?: {
		orderBy: CustomerPaymentProfileOrderFieldEnum,
		orderDescending: boolean
	})

	getOrderBy(): CustomerPaymentProfileOrderFieldEnum ;

	setOrderBy(orderBy: CustomerPaymentProfileOrderFieldEnum): void ;

	isOrderDescending(): boolean ;

	setOrderDescending(orderDescending: boolean): void ;

}

export class CustomerProfileBaseType {
	constructor(obj?: {
		merchantCustomerId: string,
		description: string,
		email: string
	})

	getMerchantCustomerId(): string ;

	setMerchantCustomerId(merchantCustomerId: string): void ;

	getDescription(): string ;

	setDescription(description: string): void ;

	getEmail(): string ;

	setEmail(email: string): void ;

}

export class CustomerProfileIdType {
	constructor(obj?: {
		customerProfileId: string,
		customerPaymentProfileId: string,
		customerAddressId: string
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerPaymentProfileId(): string ;

	setCustomerPaymentProfileId(customerPaymentProfileId: string): void ;

	getCustomerAddressId(): string ;

	setCustomerAddressId(customerAddressId: string): void ;

}

export class CustomerProfilePaymentType {
	constructor(obj?: {
		createProfile: boolean,
		customerProfileId: string,
		paymentProfile: PaymentProfile,
		shippingProfileId: string
	})

	isCreateProfile(): boolean ;

	setCreateProfile(createProfile: boolean): void ;

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getPaymentProfile(): PaymentProfile ;

	setPaymentProfile(paymentProfile: PaymentProfile): void ;

	getShippingProfileId(): string ;

	setShippingProfileId(shippingProfileId: string): void ;

}

export class CustomerProfileSummaryType {
	constructor(obj?: {
		customerProfileId: string,
		description: string,
		merchantCustomerId: string,
		email: string,
		createdDate: Date
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getDescription(): string ;

	setDescription(description: string): void ;

	getMerchantCustomerId(): string ;

	setMerchantCustomerId(merchantCustomerId: string): void ;

	getEmail(): string ;

	setEmail(email: string): void ;

	getCreatedDate(): Date ;

	setCreatedDate(createdDate: Date): void ;

}

export class CustomerType {
	constructor(obj?: {
		type: CustomerTypeEnum,
		id: string,
		email: string,
		phoneNumber: string,
		faxNumber: string,
		driversLicense: DriversLicenseType,
		taxId: string
	})

	getType(): CustomerTypeEnum ;

	setType(type: CustomerTypeEnum): void ;

	getId(): string ;

	setId(id: string): void ;

	getEmail(): string ;

	setEmail(email: string): void ;

	getPhoneNumber(): string ;

	setPhoneNumber(phoneNumber: string): void ;

	getFaxNumber(): string ;

	setFaxNumber(faxNumber: string): void ;

	getDriversLicense(): DriversLicenseType ;

	setDriversLicense(driversLicense: DriversLicenseType): void ;

	getTaxId(): string ;

	setTaxId(taxId: string): void ;

}

export class DriversLicenseMaskedType {
	constructor(obj?: {
		number: string,
		state: string,
		dateOfBirth: string
	})

	getNumber(): string ;

	setNumber(number: string): void ;

	getState(): string ;

	setState(state: string): void ;

	getDateOfBirth(): string ;

	setDateOfBirth(dateOfBirth: string): void ;

}

export class DriversLicenseType {
	constructor(obj?: {
		number: string,
		state: string,
		dateOfBirth: string
	})

	getNumber(): string ;

	setNumber(number: string): void ;

	getState(): string ;

	setState(state: string): void ;

	getDateOfBirth(): string ;

	setDateOfBirth(dateOfBirth: string): void ;

}

export class EmvTag {
	constructor(obj?: {
		name: string,
		value: string,
		formatted: string
	})

	getName(): string ;

	setName(name: string): void ;

	getValue(): string ;

	setValue(value: string): void ;

	getFormatted(): string ;

	setFormatted(formatted: string): void ;

}

export class EncryptedTrackDataType {
	constructor(obj?: { FormOfPayment: KeyBlock })

	getFormOfPayment(): KeyBlock ;

	setFormOfPayment(FormOfPayment: KeyBlock): void ;

}

export class EnumCollection {
	constructor(obj?: {
		customerProfileSummaryType: CustomerProfileSummaryType,
		paymentSimpleType: PaymentSimpleType,
		accountTypeEnum: AccountTypeEnum,
		cardTypeEnum: CardTypeEnum,
		fdsFilterActionEnum: FDSFilterActionEnum,
		permissionsEnum: PermissionsEnum,
		settingNameEnum: SettingNameEnum,
		settlementStateEnum: SettlementStateEnum,
		transactionStatusEnum: TransactionStatusEnum,
		transactionTypeEnum: TransactionTypeEnum
	})

	getCustomerProfileSummaryType(): CustomerProfileSummaryType ;

	setCustomerProfileSummaryType(customerProfileSummaryType: CustomerProfileSummaryType): void ;

	getPaymentSimpleType(): PaymentSimpleType ;

	setPaymentSimpleType(paymentSimpleType: PaymentSimpleType): void ;

	getAccountTypeEnum(): AccountTypeEnum ;

	setAccountTypeEnum(accountTypeEnum: AccountTypeEnum): void ;

	getCardTypeEnum(): CardTypeEnum ;

	setCardTypeEnum(cardTypeEnum: CardTypeEnum): void ;

	getFdsFilterActionEnum(): FDSFilterActionEnum ;

	setFdsFilterActionEnum(fdsFilterActionEnum: FDSFilterActionEnum): void ;

	getPermissionsEnum(): PermissionsEnum ;

	setPermissionsEnum(permissionsEnum: PermissionsEnum): void ;

	getSettingNameEnum(): SettingNameEnum ;

	setSettingNameEnum(settingNameEnum: SettingNameEnum): void ;

	getSettlementStateEnum(): SettlementStateEnum ;

	setSettlementStateEnum(settlementStateEnum: SettlementStateEnum): void ;

	getTransactionStatusEnum(): TransactionStatusEnum ;

	setTransactionStatusEnum(transactionStatusEnum: TransactionStatusEnum): void ;

	getTransactionTypeEnum(): TransactionTypeEnum ;

	setTransactionTypeEnum(transactionTypeEnum: TransactionTypeEnum): void ;

}

export class ExtendedAmountType {
	constructor(obj?: {
		amount: number,
		name: string,
		description: string
	})

	getAmount(): number ;

	setAmount(amount: number): void ;

	getName(): string ;

	setName(name: string): void ;

	getDescription(): string ;

	setDescription(description: string): void ;

}

export class FDSFilterType {
	constructor(obj?: {
		name: string,
		action: string
	})

	getName(): string ;

	setName(name: string): void ;

	getAction(): string ;

	setAction(action: string): void ;

}

export class FingerPrintType {
	constructor(obj?: {
		hashValue: string,
		sequence: string,
		timestamp: string,
		currencyCode: string,
		amount: string
	})

	getHashValue(): string ;

	setHashValue(hashValue: string): void ;

	getSequence(): string ;

	setSequence(sequence: string): void ;

	getTimestamp(): string ;

	setTimestamp(timestamp: string): void ;

	getCurrencyCode(): string ;

	setCurrencyCode(currencyCode: string): void ;

	getAmount(): string ;

	setAmount(amount: string): void ;

}

export class FraudInformationType {
	constructor(obj?: {
		fraudFilterList: Array<string>,
		fraudAction: string
	})

	getFraudFilterList(): Array<string> ;

	setFraudFilterList(fraudFilterList: Array<string>): void ;

	getFraudAction(): string ;

	setFraudAction(fraudAction: string): void ;

}

export class HeldTransactionRequestType {
	constructor(obj?: {
		action: AfdsTransactionEnum,
		refTransId: string
	})

	getAction(): AfdsTransactionEnum ;

	setAction(action: AfdsTransactionEnum): void ;

	getRefTransId(): string ;

	setRefTransId(refTransId: string): void ;

}

export class ImpersonationAuthenticationType {
	constructor(obj?: {
		partnerLoginId: string,
		partnerTransactionKey: string
	})

	getPartnerLoginId(): string ;

	setPartnerLoginId(partnerLoginId: string): void ;

	getPartnerTransactionKey(): string ;

	setPartnerTransactionKey(partnerTransactionKey: string): void ;

}

export class IsAliveRequest {
	constructor(obj?: { refId: string })

	getRefId(): string ;

	setRefId(refId: string): void ;

}

export class KeyBlock {
	constructor(obj?: { value: KeyValue })

	getValue(): KeyValue ;

	setValue(value: KeyValue): void ;

}

export class KeyManagementScheme {
	constructor(obj?: { dukpt: KeyManagementScheme.DUKPT })

	getDukpt(): KeyManagementScheme.DUKPT ;

	setDukpt(dukpt: KeyManagementScheme.DUKPT): void ;

}

export namespace KeyManagementScheme {
	export class DUKPT {
		constructor(obj?: {
			operation: OperationType,
			Mode: KeyManagementScheme.DUKPT.Mode,
			DeviceInfo: KeyManagementScheme.DUKPT.DeviceInfo,
			EncryptedData: KeyManagementScheme.DUKPT.EncryptedData
		})

		getOperation(): OperationType ;

		setOperation(operation: OperationType): void ;

		getMode(): KeyManagementScheme.DUKPT.Mode ;

		setMode(Mode: KeyManagementScheme.DUKPT.Mode): void ;

		getDeviceInfo(): KeyManagementScheme.DUKPT.DeviceInfo ;

		setDeviceInfo(DeviceInfo: KeyManagementScheme.DUKPT.DeviceInfo): void ;

		getEncryptedData(): KeyManagementScheme.DUKPT.EncryptedData ;

		setEncryptedData(EncryptedData: KeyManagementScheme.DUKPT.EncryptedData): void ;

	}

	export namespace DUKPT {
		export class DeviceInfo {
			constructor(obj?: { description: string })

			getDescription(): string ;

			setDescription(description: string): void ;

		}

		export class EncryptedData {
			constructor(obj?: { value: string })

			getValue(): string ;

			setValue(value: string): void ;

		}

		export class Mode {
			constructor(obj?: {
				pin: string,
				Data: string
			})

			getPin(): string ;

			setPin(pin: string): void ;

			getData(): string ;

			setData(Data: string): void ;

		}
	}
}

export class KeyValue {
	constructor(obj?: {
		encoding: EncodingType,
		encryptionAlgorithm: EncryptionAlgorithmType,
		scheme: KeyManagementScheme
	})

	getEncoding(): EncodingType ;

	setEncoding(encoding: EncodingType): void ;

	getEncryptionAlgorithm(): EncryptionAlgorithmType ;

	setEncryptionAlgorithm(encryptionAlgorithm: EncryptionAlgorithmType): void ;

	getScheme(): KeyManagementScheme ;

	setScheme(scheme: KeyManagementScheme): void ;

}

export class LineItemType {
	constructor(obj?: {
		itemId: string,
		name: string,
		description: string,
		quantity: number,
		unitPrice: number,
		taxable: boolean,
		unitOfMeasure: string,
		typeOfSupply: string,
		taxRate: number,
		taxAmount: number,
		nationalTax: number,
		localTax: number,
		vatRate: number,
		alternateTaxId: string,
		alternateTaxType: string,
		alternateTaxTypeApplied: string,
		alternateTaxRate: number,
		alternateTaxAmount: number,
		totalAmount: number,
		commodityCode: string,
		productCode: string,
		productSKU: string,
		discountRate: number,
		discountAmount: number,
		taxIncludedInTotal: boolean,
		taxIsAfterDiscount: boolean
	})

	getItemId(): string ;

	setItemId(itemId: string): void ;

	getName(): string ;

	setName(name: string): void ;

	getDescription(): string ;

	setDescription(description: string): void ;

	getQuantity(): number ;

	setQuantity(quantity: number): void ;

	getUnitPrice(): number ;

	setUnitPrice(unitPrice: number): void ;

	isTaxable(): boolean ;

	setTaxable(taxable: boolean): void ;

	getUnitOfMeasure(): string ;

	setUnitOfMeasure(unitOfMeasure: string): void ;

	getTypeOfSupply(): string ;

	setTypeOfSupply(typeOfSupply: string): void ;

	getTaxRate(): number ;

	setTaxRate(taxRate: number): void ;

	getTaxAmount(): number ;

	setTaxAmount(taxAmount: number): void ;

	getNationalTax(): number ;

	setNationalTax(nationalTax: number): void ;

	getLocalTax(): number ;

	setLocalTax(localTax: number): void ;

	getVatRate(): number ;

	setVatRate(vatRate: number): void ;

	getAlternateTaxId(): string ;

	setAlternateTaxId(alternateTaxId: string): void ;

	getAlternateTaxType(): string ;

	setAlternateTaxType(alternateTaxType: string): void ;

	getAlternateTaxTypeApplied(): string ;

	setAlternateTaxTypeApplied(alternateTaxTypeApplied: string): void ;

	getAlternateTaxRate(): number ;

	setAlternateTaxRate(alternateTaxRate: number): void ;

	getAlternateTaxAmount(): number ;

	setAlternateTaxAmount(alternateTaxAmount: number): void ;

	getTotalAmount(): number ;

	setTotalAmount(totalAmount: number): void ;

	getCommodityCode(): string ;

	setCommodityCode(commodityCode: string): void ;

	getProductCode(): string ;

	setProductCode(productCode: string): void ;

	getProductSKU(): string ;

	setProductSKU(productSKU: string): void ;

	getDiscountRate(): number ;

	setDiscountRate(discountRate: number): void ;

	getDiscountAmount(): number ;

	setDiscountAmount(discountAmount: number): void ;

	isTaxIncludedInTotal(): boolean ;

	setTaxIncludedInTotal(taxIncludedInTotal: boolean): void ;

	isTaxIsAfterDiscount(): boolean ;

	setTaxIsAfterDiscount(taxIsAfterDiscount: boolean): void ;

}

export class ListOfAUDetailsType {
	constructor(obj?: { auUpdateOrAuDelete: Array<AuDetailsType> })

	getAuUpdateOrAuDelete(): Array<AuDetailsType> ;

	setAuUpdateOrAuDelete(auUpdateOrAuDelete: Array<AuDetailsType>): void ;

}

export class MerchantAuthenticationType {
	constructor(obj?: {
		name: string,
		transactionKey: string,
		sessionToken: string,
		password: string,
		impersonationAuthentication: ImpersonationAuthenticationType,
		fingerPrint: FingerPrintType,
		clientKey: string,
		accessToken: string,
		mobileDeviceId: string
	})

	getName(): string ;

	setName(name: string): void ;

	getTransactionKey(): string ;

	setTransactionKey(transactionKey: string): void ;

	getSessionToken(): string ;

	setSessionToken(sessionToken: string): void ;

	getPassword(): string ;

	setPassword(password: string): void ;

	getImpersonationAuthentication(): ImpersonationAuthenticationType ;

	setImpersonationAuthentication(impersonationAuthentication: ImpersonationAuthenticationType): void ;

	getFingerPrint(): FingerPrintType ;

	setFingerPrint(fingerPrint: FingerPrintType): void ;

	getClientKey(): string ;

	setClientKey(clientKey: string): void ;

	getAccessToken(): string ;

	setAccessToken(accessToken: string): void ;

	getMobileDeviceId(): string ;

	setMobileDeviceId(mobileDeviceId: string): void ;

}

export class MerchantContactType {
	constructor(obj?: {
		merchantName: string,
		merchantAddress: string,
		merchantCity: string,
		merchantState: string,
		merchantZip: string,
		merchantPhone: string
	})

	getMerchantName(): string ;

	setMerchantName(merchantName: string): void ;

	getMerchantAddress(): string ;

	setMerchantAddress(merchantAddress: string): void ;

	getMerchantCity(): string ;

	setMerchantCity(merchantCity: string): void ;

	getMerchantState(): string ;

	setMerchantState(merchantState: string): void ;

	getMerchantZip(): string ;

	setMerchantZip(merchantZip: string): void ;

	getMerchantPhone(): string ;

	setMerchantPhone(merchantPhone: string): void ;

}

export class MessagesType {
	constructor(obj?: {
		resultCode: MessageTypeEnum,
		message: Array<MessagesType.Message>
	})

	getResultCode(): MessageTypeEnum ;

	setResultCode(resultCode: MessageTypeEnum): void ;

	getMessage(): Array<MessagesType.Message> ;

	setMessage(message: Array<MessagesType.Message>): void ;

}

export namespace MessagesType {
	export class Message {
		constructor(obj?: {
			code: string,
			text: string
		})

		getCode(): string ;

		setCode(code: string): void ;

		getText(): string ;

		setText(text: string): void ;

	}
}

export class MobileDeviceType {
	constructor(obj?: {
		mobileDeviceId: string,
		description: string,
		phoneNumber: string,
		devicePlatform: string,
		deviceActivation: DeviceActivationEnum
	})

	getMobileDeviceId(): string ;

	setMobileDeviceId(mobileDeviceId: string): void ;

	getDescription(): string ;

	setDescription(description: string): void ;

	getPhoneNumber(): string ;

	setPhoneNumber(phoneNumber: string): void ;

	getDevicePlatform(): string ;

	setDevicePlatform(devicePlatform: string): void ;

	getDeviceActivation(): DeviceActivationEnum ;

	setDeviceActivation(deviceActivation: DeviceActivationEnum): void ;

}

export class NameAndAddressType {
	constructor(obj?: {
		firstName: string,
		lastName: string,
		company: string,
		address: string,
		city: string,
		state: string,
		zip: string,
		country: string
	})

	getFirstName(): string ;

	setFirstName(firstName: string): void ;

	getLastName(): string ;

	setLastName(lastName: string): void ;

	getCompany(): string ;

	setCompany(company: string): void ;

	getAddress(): string ;

	setAddress(address: string): void ;

	getCity(): string ;

	setCity(city: string): void ;

	getState(): string ;

	setState(state: string): void ;

	getZip(): string ;

	setZip(zip: string): void ;

	getCountry(): string ;

	setCountry(country: string): void ;

}

export class OpaqueDataType {
	constructor(obj?: {
		dataDescriptor: string,
		dataValue: string,
		dataKey: string,
		expirationTimeStamp: Date
	})

	getDataDescriptor(): string ;

	setDataDescriptor(dataDescriptor: string): void ;

	getDataValue(): string ;

	setDataValue(dataValue: string): void ;

	getDataKey(): string ;

	setDataKey(dataKey: string): void ;

	getExpirationTimeStamp(): Date ;

	setExpirationTimeStamp(expirationTimeStamp: Date): void ;

}

export class OrderType {
	constructor(obj?: {
		invoiceNumber: string,
		description: string,
		discountAmount: number,
		taxIsAfterDiscount: boolean,
		totalTaxTypeCode: string,
		purchaserVATRegistrationNumber: string,
		merchantVATRegistrationNumber: string,
		vatInvoiceReferenceNumber: string,
		purchaserCode: string,
		summaryCommodityCode: string,
		purchaseOrderDateUTC: Date,
		supplierOrderReference: string,
		authorizedContactName: string,
		cardAcceptorRefNumber: string,
		amexDataTAA1: string,
		amexDataTAA2: string,
		amexDataTAA3: string,
		amexDataTAA4: string
	})

	getInvoiceNumber(): string ;

	setInvoiceNumber(invoiceNumber: string): void ;

	getDescription(): string ;

	setDescription(description: string): void ;

	getDiscountAmount(): number ;

	setDiscountAmount(discountAmount: number): void ;

	isTaxIsAfterDiscount(): boolean ;

	setTaxIsAfterDiscount(taxIsAfterDiscount: boolean): void ;

	getTotalTaxTypeCode(): string ;

	setTotalTaxTypeCode(totalTaxTypeCode: string): void ;

	getPurchaserVATRegistrationNumber(): string ;

	setPurchaserVATRegistrationNumber(purchaserVATRegistrationNumber: string): void ;

	getMerchantVATRegistrationNumber(): string ;

	setMerchantVATRegistrationNumber(merchantVATRegistrationNumber: string): void ;

	getVatInvoiceReferenceNumber(): string ;

	setVatInvoiceReferenceNumber(vatInvoiceReferenceNumber: string): void ;

	getPurchaserCode(): string ;

	setPurchaserCode(purchaserCode: string): void ;

	getSummaryCommodityCode(): string ;

	setSummaryCommodityCode(summaryCommodityCode: string): void ;

	getPurchaseOrderDateUTC(): Date ;

	setPurchaseOrderDateUTC(purchaseOrderDateUTC: Date): void ;

	getSupplierOrderReference(): string ;

	setSupplierOrderReference(supplierOrderReference: string): void ;

	getAuthorizedContactName(): string ;

	setAuthorizedContactName(authorizedContactName: string): void ;

	getCardAcceptorRefNumber(): string ;

	setCardAcceptorRefNumber(cardAcceptorRefNumber: string): void ;

	getAmexDataTAA1(): string ;

	setAmexDataTAA1(amexDataTAA1: string): void ;

	getAmexDataTAA2(): string ;

	setAmexDataTAA2(amexDataTAA2: string): void ;

	getAmexDataTAA3(): string ;

	setAmexDataTAA3(amexDataTAA3: string): void ;

	getAmexDataTAA4(): string ;

	setAmexDataTAA4(amexDataTAA4: string): void ;

}

export class OtherTaxType {
	constructor(obj?: {
		nationalTaxAmount: number,
		localTaxAmount: number,
		alternateTaxAmount: number,
		alternateTaxId: string,
		vatTaxRate: number,
		vatTaxAmount: number
	})

	getNationalTaxAmount(): number ;

	setNationalTaxAmount(nationalTaxAmount: number): void ;

	getLocalTaxAmount(): number ;

	setLocalTaxAmount(localTaxAmount: number): void ;

	getAlternateTaxAmount(): number ;

	setAlternateTaxAmount(alternateTaxAmount: number): void ;

	getAlternateTaxId(): string ;

	setAlternateTaxId(alternateTaxId: string): void ;

	getVatTaxRate(): number ;

	setVatTaxRate(vatTaxRate: number): void ;

	getVatTaxAmount(): number ;

	setVatTaxAmount(vatTaxAmount: number): void ;

}

export class Paging {
	constructor(obj?: {
		limit: number,
		offset: number
	})

	getLimit(): number ;

	setLimit(limit: number): void ;

	getOffset(): number ;

	setOffset(offset: number): void ;

}

export class PayPalType {
	constructor(obj?: {
		successUrl: string,
		cancelUrl: string,
		paypalLc: string,
		paypalHdrImg: string,
		paypalPayflowcolor: string,
		payerID: string
	})

	getSuccessUrl(): string ;

	setSuccessUrl(successUrl: string): void ;

	getCancelUrl(): string ;

	setCancelUrl(cancelUrl: string): void ;

	getPaypalLc(): string ;

	setPaypalLc(paypalLc: string): void ;

	getPaypalHdrImg(): string ;

	setPaypalHdrImg(paypalHdrImg: string): void ;

	getPaypalPayflowcolor(): string ;

	setPaypalPayflowcolor(paypalPayflowcolor: string): void ;

	getPayerID(): string ;

	setPayerID(payerID: string): void ;

}

export class PaymentDetails {
	constructor(obj?: {
		currency: string,
		promoCode: string,
		misc: string,
		giftWrap: string,
		discount: string,
		tax: string,
		shippingHandling: string,
		subTotal: string,
		orderID: string,
		amount: string
	})

	getCurrency(): string ;

	setCurrency(currency: string): void ;

	getPromoCode(): string ;

	setPromoCode(promoCode: string): void ;

	getMisc(): string ;

	setMisc(misc: string): void ;

	getGiftWrap(): string ;

	setGiftWrap(giftWrap: string): void ;

	getDiscount(): string ;

	setDiscount(discount: string): void ;

	getTax(): string ;

	setTax(tax: string): void ;

	getShippingHandling(): string ;

	setShippingHandling(shippingHandling: string): void ;

	getSubTotal(): string ;

	setSubTotal(subTotal: string): void ;

	getOrderID(): string ;

	setOrderID(orderID: string): void ;

	getAmount(): string ;

	setAmount(amount: string): void ;

}

export class PaymentEmvType {
	constructor(obj?: {
		emvData: object,
		emvDescriptor: object,
		emvVersion: object
	})

	getEmvData(): object ;

	setEmvData(emvData: object): void ;

	getEmvDescriptor(): object ;

	setEmvDescriptor(emvDescriptor: object): void ;

	getEmvVersion(): object ;

	setEmvVersion(emvVersion: object): void ;

}

export class PaymentMaskedType {
	constructor(obj?: {
		creditCard: CreditCardMaskedType,
		bankAccount: BankAccountMaskedType,
		tokenInformation: TokenMaskedType
	})

	getCreditCard(): CreditCardMaskedType ;

	setCreditCard(creditCard: CreditCardMaskedType): void ;

	getBankAccount(): BankAccountMaskedType ;

	setBankAccount(bankAccount: BankAccountMaskedType): void ;

	getTokenInformation(): TokenMaskedType ;

	setTokenInformation(tokenInformation: TokenMaskedType): void ;

}

export class PaymentProfile {
	constructor(obj?: {
		paymentProfileId: string,
		cardCode: string
	})

	getPaymentProfileId(): string ;

	setPaymentProfileId(paymentProfileId: string): void ;

	getCardCode(): string ;

	setCardCode(cardCode: string): void ;

}

export class PaymentScheduleType {
	constructor(obj?: {
		interval: PaymentScheduleType.Interval,
		startDate: Date,
		totalOccurrences: number,
		trialOccurrences: number
	})

	getInterval(): PaymentScheduleType.Interval ;

	setInterval(interval: PaymentScheduleType.Interval): void ;

	getStartDate(): Date ;

	setStartDate(startDate: Date): void ;

	getTotalOccurrences(): number ;

	setTotalOccurrences(totalOccurrences: number): void ;

	getTrialOccurrences(): number ;

	setTrialOccurrences(trialOccurrences: number): void ;

}

export namespace PaymentScheduleType {
	export class Interval {
		constructor(obj?: {
			length: number,
			unit: ARBSubscriptionUnitEnum
		})

		getLength(): number ;

		setLength(length: number): void ;

		getUnit(): ARBSubscriptionUnitEnum ;

		setUnit(unit: ARBSubscriptionUnitEnum): void ;

	}
}

export class PaymentSimpleType {
	constructor(obj?: {
		creditCard: CreditCardSimpleType,
		bankAccount: BankAccountType
	})

	getCreditCard(): CreditCardSimpleType ;

	setCreditCard(creditCard: CreditCardSimpleType): void ;

	getBankAccount(): BankAccountType ;

	setBankAccount(bankAccount: BankAccountType): void ;

}

export class PaymentType {
	constructor(obj?: {
		creditCard: CreditCardType,
		bankAccount: BankAccountType,
		trackData: CreditCardTrackType,
		encryptedTrackData: EncryptedTrackDataType,
		payPal: PayPalType,
		opaqueData: OpaqueDataType,
		emv: PaymentEmvType,
		dataSource: string
	})

	getCreditCard(): CreditCardType ;

	setCreditCard(creditCard: CreditCardType): void ;

	getBankAccount(): BankAccountType ;

	setBankAccount(bankAccount: BankAccountType): void ;

	getTrackData(): CreditCardTrackType ;

	setTrackData(trackData: CreditCardTrackType): void ;

	getEncryptedTrackData(): EncryptedTrackDataType ;

	setEncryptedTrackData(encryptedTrackData: EncryptedTrackDataType): void ;

	getPayPal(): PayPalType ;

	setPayPal(payPal: PayPalType): void ;

	getOpaqueData(): OpaqueDataType ;

	setOpaqueData(opaqueData: OpaqueDataType): void ;

	getEmv(): PaymentEmvType ;

	setEmv(emv: PaymentEmvType): void ;

	getDataSource(): string ;

	setDataSource(dataSource: string): void ;

}

export class PermissionType {
	constructor(obj?: { permissionName: string })

	getPermissionName(): string ;

	setPermissionName(permissionName: string): void ;

}

export class ProcessingOptions {
	constructor(obj?: {
		isFirstRecurringPayment: boolean,
		isFirstSubsequentAuth: boolean,
		isSubsequentAuth: boolean,
		isStoredCredentials: boolean
	})

	isIsFirstRecurringPayment(): boolean ;

	setIsFirstRecurringPayment(isFirstRecurringPayment: boolean): void ;

	isIsFirstSubsequentAuth(): boolean ;

	setIsFirstSubsequentAuth(isFirstSubsequentAuth: boolean): void ;

	isIsSubsequentAuth(): boolean ;

	setIsSubsequentAuth(isSubsequentAuth: boolean): void ;

	isIsStoredCredentials(): boolean ;

	setIsStoredCredentials(isStoredCredentials: boolean): void ;

}

export class ProcessorType {
	constructor(obj?: {
		name: string,
		id: number,
		cardTypes: Array<String>
	})

	getName(): string ;

	setName(name: string): void ;

	getId(): number ;

	setId(id: number): void ;

	getCardTypes(): Array<String> ;

	setCardTypes(cardTypes: Array<String>): void ;

}

export class ProfileTransAmountType {
	constructor(obj?: {
		amount: number,
		tax: ExtendedAmountType,
		shipping: ExtendedAmountType,
		duty: ExtendedAmountType,
		lineItems: Array<LineItemType>
	})

	getAmount(): number ;

	setAmount(amount: number): void ;

	getTax(): ExtendedAmountType ;

	setTax(tax: ExtendedAmountType): void ;

	getShipping(): ExtendedAmountType ;

	setShipping(shipping: ExtendedAmountType): void ;

	getDuty(): ExtendedAmountType ;

	setDuty(duty: ExtendedAmountType): void ;

	getLineItems(): Array<LineItemType> ;

	setLineItems(lineItems: Array<LineItemType>): void ;

}

export class ProfileTransVoidType {
	constructor(obj?: {
		customerProfileId: string,
		customerPaymentProfileId: string,
		customerShippingAddressId: string,
		transId: string
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerPaymentProfileId(): string ;

	setCustomerPaymentProfileId(customerPaymentProfileId: string): void ;

	getCustomerShippingAddressId(): string ;

	setCustomerShippingAddressId(customerShippingAddressId: string): void ;

	getTransId(): string ;

	setTransId(transId: string): void ;

}

export class ProfileTransactionType {
	constructor(obj?: {
		profileTransAuthCapture: ProfileTransAuthCaptureType,
		profileTransAuthOnly: ProfileTransAuthOnlyType,
		profileTransPriorAuthCapture: ProfileTransPriorAuthCaptureType,
		profileTransCaptureOnly: ProfileTransCaptureOnlyType,
		profileTransRefund: ProfileTransRefundType,
		profileTransVoid: ProfileTransVoidType
	})

	getProfileTransAuthCapture(): ProfileTransAuthCaptureType ;

	setProfileTransAuthCapture(profileTransAuthCapture: ProfileTransAuthCaptureType): void ;

	getProfileTransAuthOnly(): ProfileTransAuthOnlyType ;

	setProfileTransAuthOnly(profileTransAuthOnly: ProfileTransAuthOnlyType): void ;

	getProfileTransPriorAuthCapture(): ProfileTransPriorAuthCaptureType ;

	setProfileTransPriorAuthCapture(profileTransPriorAuthCapture: ProfileTransPriorAuthCaptureType): void ;

	getProfileTransCaptureOnly(): ProfileTransCaptureOnlyType ;

	setProfileTransCaptureOnly(profileTransCaptureOnly: ProfileTransCaptureOnlyType): void ;

	getProfileTransRefund(): ProfileTransRefundType ;

	setProfileTransRefund(profileTransRefund: ProfileTransRefundType): void ;

	getProfileTransVoid(): ProfileTransVoidType ;

	setProfileTransVoid(profileTransVoid: ProfileTransVoidType): void ;

}

export class ReturnedItemType {
	constructor(obj?: {
		id: string,
		dateUTC: Date,
		dateLocal: Date,
		code: string,
		description: string
	})

	getId(): string ;

	setId(id: string): void ;

	getDateUTC(): Date ;

	setDateUTC(dateUTC: Date): void ;

	getDateLocal(): Date ;

	setDateLocal(dateLocal: Date): void ;

	getCode(): string ;

	setCode(code: string): void ;

	getDescription(): string ;

	setDescription(description: string): void ;

}

export class SecurePaymentContainerErrorType {
	constructor(obj?: {
		code: string,
		description: string
	})

	getCode(): string ;

	setCode(code: string): void ;

	getDescription(): string ;

	setDescription(description: string): void ;

}

export class SettingType {
	constructor(obj?: {
		settingName: string,
		settingValue: string
	})

	getSettingName(): string ;

	setSettingName(settingName: string): void ;

	getSettingValue(): string ;

	setSettingValue(settingValue: string): void ;

}

export class SolutionType {
	constructor(obj?: {
		id: string,
		name: string,
		vendorName: string
	})

	getId(): string ;

	setId(id: string): void ;

	getName(): string ;

	setName(name: string): void ;

	getVendorName(): string ;

	setVendorName(vendorName: string): void ;

}

export class SubMerchantType {
	constructor(obj?: {
		identifier: string,
		doingBusinessAs: string,
		paymentServiceProviderName: string,
		paymentServiceFacilitator: string,
		streetAddress: string,
		phone: string,
		email: string,
		postalCode: string,
		city: string,
		regionCode: string,
		countryCode: string
	})

	getIdentifier(): string ;

	setIdentifier(identifier: string): void ;

	getDoingBusinessAs(): string ;

	setDoingBusinessAs(doingBusinessAs: string): void ;

	getPaymentServiceProviderName(): string ;

	setPaymentServiceProviderName(paymentServiceProviderName: string): void ;

	getPaymentServiceFacilitator(): string ;

	setPaymentServiceFacilitator(paymentServiceFacilitator: string): void ;

	getStreetAddress(): string ;

	setStreetAddress(streetAddress: string): void ;

	getPhone(): string ;

	setPhone(phone: string): void ;

	getEmail(): string ;

	setEmail(email: string): void ;

	getPostalCode(): string ;

	setPostalCode(postalCode: string): void ;

	getCity(): string ;

	setCity(city: string): void ;

	getRegionCode(): string ;

	setRegionCode(regionCode: string): void ;

	getCountryCode(): string ;

	setCountryCode(countryCode: string): void ;

}

export class SubscriptionDetail {
	constructor(obj?: {
		id: number,
		name: string,
		status: ARBSubscriptionStatusEnum,
		createTimeStampUTC: Date,
		firstName: string,
		lastName: string,
		totalOccurrences: number,
		pastOccurrences: number,
		paymentMethod: PaymentMethodEnum,
		accountNumber: string,
		invoice: string,
		amount: number,
		currencyCode: string,
		customerProfileId: number,
		customerPaymentProfileId: number,
		customerShippingProfileId: number
	})

	getId(): number ;

	setId(id: number): void ;

	getName(): string ;

	setName(name: string): void ;

	getStatus(): ARBSubscriptionStatusEnum ;

	setStatus(status: ARBSubscriptionStatusEnum): void ;

	getCreateTimeStampUTC(): Date ;

	setCreateTimeStampUTC(createTimeStampUTC: Date): void ;

	getFirstName(): string ;

	setFirstName(firstName: string): void ;

	getLastName(): string ;

	setLastName(lastName: string): void ;

	getTotalOccurrences(): number ;

	setTotalOccurrences(totalOccurrences: number): void ;

	getPastOccurrences(): number ;

	setPastOccurrences(pastOccurrences: number): void ;

	getPaymentMethod(): PaymentMethodEnum ;

	setPaymentMethod(paymentMethod: PaymentMethodEnum): void ;

	getAccountNumber(): string ;

	setAccountNumber(accountNumber: string): void ;

	getInvoice(): string ;

	setInvoice(invoice: string): void ;

	getAmount(): number ;

	setAmount(amount: number): void ;

	getCurrencyCode(): string ;

	setCurrencyCode(currencyCode: string): void ;

	getCustomerProfileId(): number ;

	setCustomerProfileId(customerProfileId: number): void ;

	getCustomerPaymentProfileId(): number ;

	setCustomerPaymentProfileId(customerPaymentProfileId: number): void ;

	getCustomerShippingProfileId(): number ;

	setCustomerShippingProfileId(customerShippingProfileId: number): void ;

}

export class SubscriptionIdList {
	constructor(obj?: { subscriptionId: Array<String> })

	getSubscriptionId(): Array<String> ;

	setSubscriptionId(subscriptionId: Array<String>): void ;

}

export class SubscriptionPaymentType {
	constructor(obj?: {
		id: number,
		payNum: number
	})

	getId(): number ;

	setId(id: number): void ;

	getPayNum(): number ;

	setPayNum(payNum: number): void ;

}

export class SubsequentAuthInformation {
	constructor(obj?: {
		originalNetworkTransId: string,
		reason: MerchantInitTransReasonEnum
	})

	getOriginalNetworkTransId(): string ;

	setOriginalNetworkTransId(originalNetworkTransId: string): void ;

	getReason(): MerchantInitTransReasonEnum ;

	setReason(reason: MerchantInitTransReasonEnum): void ;

}

export class TokenMaskedType {
	constructor(obj?: {
		tokenSource: string,
		tokenNumber: string,
		expirationDate: string,
		tokenRequestorId: string
	})

	getTokenSource(): string ;

	setTokenSource(tokenSource: string): void ;

	getTokenNumber(): string ;

	setTokenNumber(tokenNumber: string): void ;

	getExpirationDate(): string ;

	setExpirationDate(expirationDate: string): void ;

	getTokenRequestorId(): string ;

	setTokenRequestorId(tokenRequestorId: string): void ;

}

export class TransRetailInfoType {
	constructor(obj?: {
		marketType: string,
		deviceType: string,
		customerSignature: string,
		terminalNumber: string
	})

	getMarketType(): string ;

	setMarketType(marketType: string): void ;

	getDeviceType(): string ;

	setDeviceType(deviceType: string): void ;

	getCustomerSignature(): string ;

	setCustomerSignature(customerSignature: string): void ;

	getTerminalNumber(): string ;

	setTerminalNumber(terminalNumber: string): void ;

}

export class TransactionDetailsType {
	constructor(obj?: {
		transId: string,
		refTransId: string,
		splitTenderId: string,
		submitTimeUTC: Date,
		submitTimeLocal: Date,
		transactionType: string,
		transactionStatus: string,
		responseCode: number,
		responseReasonCode: number,
		subscription: SubscriptionPaymentType,
		responseReasonDescription: string,
		authCode: string,
		AVSResponse: string,
		cardCodeResponse: string,
		CAVVResponse: string,
		FDSFilterAction: string,
		FDSFilters: Array<FDSFilterType>,
		batch: BatchDetailsType,
		order: OrderExType,
		requestedAmount: number,
		authAmount: number,
		settleAmount: number,
		tax: ExtendedAmountType,
		shipping: ExtendedAmountType,
		duty: ExtendedAmountType,
		lineItems: Array<LineItemType>,
		prepaidBalanceRemaining: number,
		taxExempt: boolean,
		payment: PaymentMaskedType,
		customer: CustomerDataType,
		billTo: CustomerAddressType,
		shipTo: NameAndAddressType,
		recurringBilling: boolean,
		customerIP: string,
		product: string,
		entryMode: string,
		marketType: string,
		mobileDeviceId: string,
		customerSignature: string,
		returnedItems: Array<ReturnedItemType>,
		solution: SolutionType,
		emvDetails: TransactionDetailsType.EmvDetails,
		profile: CustomerProfileIdType,
		surcharge: ExtendedAmountType,
		employeeId: string,
		tip: ExtendedAmountType,
		otherTax: OtherTaxType,
		shipFrom: NameAndAddressType
	})

	getTransId(): string ;

	setTransId(transId: string): void ;

	getRefTransId(): string ;

	setRefTransId(refTransId: string): void ;

	getSplitTenderId(): string ;

	setSplitTenderId(splitTenderId: string): void ;

	getSubmitTimeUTC(): Date ;

	setSubmitTimeUTC(submitTimeUTC: Date): void ;

	getSubmitTimeLocal(): Date ;

	setSubmitTimeLocal(submitTimeLocal: Date): void ;

	getTransactionType(): string ;

	setTransactionType(transactionType: string): void ;

	getTransactionStatus(): string ;

	setTransactionStatus(transactionStatus: string): void ;

	getResponseCode(): number ;

	setResponseCode(responseCode: number): void ;

	getResponseReasonCode(): number ;

	setResponseReasonCode(responseReasonCode: number): void ;

	getSubscription(): SubscriptionPaymentType ;

	setSubscription(subscription: SubscriptionPaymentType): void ;

	getResponseReasonDescription(): string ;

	setResponseReasonDescription(responseReasonDescription: string): void ;

	getAuthCode(): string ;

	setAuthCode(authCode: string): void ;

	getAVSResponse(): string ;

	setAVSResponse(AVSResponse: string): void ;

	getCardCodeResponse(): string ;

	setCardCodeResponse(cardCodeResponse: string): void ;

	getCAVVResponse(): string ;

	setCAVVResponse(CAVVResponse: string): void ;

	getFDSFilterAction(): string ;

	setFDSFilterAction(FDSFilterAction: string): void ;

	getFDSFilters(): Array<FDSFilterType> ;

	setFDSFilters(FDSFilters: Array<FDSFilterType>): void ;

	getBatch(): BatchDetailsType ;

	setBatch(batch: BatchDetailsType): void ;

	getOrder(): OrderExType ;

	setOrder(order: OrderExType): void ;

	getRequestedAmount(): number ;

	setRequestedAmount(requestedAmount: number): void ;

	getAuthAmount(): number ;

	setAuthAmount(authAmount: number): void ;

	getSettleAmount(): number ;

	setSettleAmount(settleAmount: number): void ;

	getTax(): ExtendedAmountType ;

	setTax(tax: ExtendedAmountType): void ;

	getShipping(): ExtendedAmountType ;

	setShipping(shipping: ExtendedAmountType): void ;

	getDuty(): ExtendedAmountType ;

	setDuty(duty: ExtendedAmountType): void ;

	getLineItems(): Array<LineItemType> ;

	setLineItems(lineItems: Array<LineItemType>): void ;

	getPrepaidBalanceRemaining(): number ;

	setPrepaidBalanceRemaining(prepaidBalanceRemaining: number): void ;

	isTaxExempt(): boolean ;

	setTaxExempt(taxExempt: boolean): void ;

	getPayment(): PaymentMaskedType ;

	setPayment(payment: PaymentMaskedType): void ;

	getCustomer(): CustomerDataType ;

	setCustomer(customer: CustomerDataType): void ;

	getBillTo(): CustomerAddressType ;

	setBillTo(billTo: CustomerAddressType): void ;

	getShipTo(): NameAndAddressType ;

	setShipTo(shipTo: NameAndAddressType): void ;

	isRecurringBilling(): boolean ;

	setRecurringBilling(recurringBilling: boolean): void ;

	getCustomerIP(): string ;

	setCustomerIP(customerIP: string): void ;

	getProduct(): string ;

	setProduct(product: string): void ;

	getEntryMode(): string ;

	setEntryMode(entryMode: string): void ;

	getMarketType(): string ;

	setMarketType(marketType: string): void ;

	getMobileDeviceId(): string ;

	setMobileDeviceId(mobileDeviceId: string): void ;

	getCustomerSignature(): string ;

	setCustomerSignature(customerSignature: string): void ;

	getReturnedItems(): Array<ReturnedItemType> ;

	setReturnedItems(returnedItems: Array<ReturnedItemType>): void ;

	getSolution(): SolutionType ;

	setSolution(solution: SolutionType): void ;

	getEmvDetails(): TransactionDetailsType.EmvDetails ;

	setEmvDetails(emvDetails: TransactionDetailsType.EmvDetails): void ;

	getProfile(): CustomerProfileIdType ;

	setProfile(profile: CustomerProfileIdType): void ;

	getSurcharge(): ExtendedAmountType ;

	setSurcharge(surcharge: ExtendedAmountType): void ;

	getEmployeeId(): string ;

	setEmployeeId(employeeId: string): void ;

	getTip(): ExtendedAmountType ;

	setTip(tip: ExtendedAmountType): void ;

	getOtherTax(): OtherTaxType ;

	setOtherTax(otherTax: OtherTaxType): void ;

	getShipFrom(): NameAndAddressType ;

	setShipFrom(shipFrom: NameAndAddressType): void ;

}

export namespace TransactionDetailsType {
	export class EmvDetails {
		constructor(obj?: { tag: Array<TransactionDetailsType.EmvDetails.Tag> })

		getTag(): Array<TransactionDetailsType.EmvDetails.Tag> ;

		setTag(tag: Array<TransactionDetailsType.EmvDetails.Tag>): void ;

	}

	export namespace EmvDetails {
		export class Tag {
			constructor(obj?: { tagId: string })

			protected data: string;

			getTagId(): string ;

			setTagId(tagId: string): void ;

			getData(): string ;

			setData(data: string): void ;


		}
	}
}

export class TransactionListSorting {
	constructor(obj?: {
		orderBy: TransactionListOrderFieldEnum,
		orderDescending: boolean
	})

	getOrderBy(): TransactionListOrderFieldEnum ;

	setOrderBy(orderBy: TransactionListOrderFieldEnum): void ;

	isOrderDescending(): boolean ;

	setOrderDescending(orderDescending: boolean): void ;

}

export class TransactionRequestType {
	constructor(obj?: {
		transactionType: string,
		amount: number,
		currencyCode: string,
		payment: PaymentType,
		profile: CustomerProfilePaymentType,
		solution: SolutionType,
		callId: string,
		terminalNumber: string,
		authCode: string,
		refTransId: string,
		splitTenderId: string,
		order: OrderType,
		lineItems: Array<LineItemType>,
		tax: ExtendedAmountType,
		duty: ExtendedAmountType,
		shipping: ExtendedAmountType,
		taxExempt: boolean,
		poNumber: string,
		customer: CustomerDataType,
		billTo: CustomerAddressType,
		shipTo: NameAndAddressType,
		customerIP: string,
		cardholderAuthentication: CcAuthenticationType,
		retail: TransRetailInfoType,
		employeeId: string,
		transactionSettings: Array<SettingType>,
		userFields: TransactionRequestType.UserFields,
		surcharge: ExtendedAmountType,
		merchantDescriptor: string,
		subMerchant: SubMerchantType,
		tip: ExtendedAmountType,
		processingOptions: ProcessingOptions,
		subsequentAuthInformation: SubsequentAuthInformation,
		otherTax: OtherTaxType,
		shipFrom: NameAndAddressType
	})

	getTransactionType(): string ;

	setTransactionType(transactionType: string): void ;

	getAmount(): number ;

	setAmount(amount: number): void ;

	getCurrencyCode(): string ;

	setCurrencyCode(currencyCode: string): void ;

	getPayment(): PaymentType ;

	setPayment(payment: PaymentType): void ;

	getProfile(): CustomerProfilePaymentType ;

	setProfile(profile: CustomerProfilePaymentType): void ;

	getSolution(): SolutionType ;

	setSolution(solution: SolutionType): void ;

	getCallId(): string ;

	setCallId(callId: string): void ;

	getTerminalNumber(): string ;

	setTerminalNumber(terminalNumber: string): void ;

	getAuthCode(): string ;

	setAuthCode(authCode: string): void ;

	getRefTransId(): string ;

	setRefTransId(refTransId: string): void ;

	getSplitTenderId(): string ;

	setSplitTenderId(splitTenderId: string): void ;

	getOrder(): OrderType ;

	setOrder(order: OrderType): void ;

	getLineItems(): Array<LineItemType> ;

	setLineItems(lineItems: Array<LineItemType>): void ;

	getTax(): ExtendedAmountType ;

	setTax(tax: ExtendedAmountType): void ;

	getDuty(): ExtendedAmountType ;

	setDuty(duty: ExtendedAmountType): void ;

	getShipping(): ExtendedAmountType ;

	setShipping(shipping: ExtendedAmountType): void ;

	isTaxExempt(): boolean ;

	setTaxExempt(taxExempt: boolean): void ;

	getPoNumber(): string ;

	setPoNumber(poNumber: string): void ;

	getCustomer(): CustomerDataType ;

	setCustomer(customer: CustomerDataType): void ;

	getBillTo(): CustomerAddressType ;

	setBillTo(billTo: CustomerAddressType): void ;

	getShipTo(): NameAndAddressType ;

	setShipTo(shipTo: NameAndAddressType): void ;

	getCustomerIP(): string ;

	setCustomerIP(customerIP: string): void ;

	getCardholderAuthentication(): CcAuthenticationType ;

	setCardholderAuthentication(cardholderAuthentication: CcAuthenticationType): void ;

	getRetail(): TransRetailInfoType ;

	setRetail(retail: TransRetailInfoType): void ;

	getEmployeeId(): string ;

	setEmployeeId(employeeId: string): void ;

	getTransactionSettings(): Array<SettingType> ;

	setTransactionSettings(transactionSettings: Array<SettingType>): void ;

	getUserFields(): TransactionRequestType.UserFields ;

	setUserFields(userFields: TransactionRequestType.UserFields): void ;

	getSurcharge(): ExtendedAmountType ;

	setSurcharge(surcharge: ExtendedAmountType): void ;

	getMerchantDescriptor(): string ;

	setMerchantDescriptor(merchantDescriptor: string): void ;

	getSubMerchant(): SubMerchantType ;

	setSubMerchant(subMerchant: SubMerchantType): void ;

	getTip(): ExtendedAmountType ;

	setTip(tip: ExtendedAmountType): void ;

	getProcessingOptions(): ProcessingOptions ;

	setProcessingOptions(processingOptions: ProcessingOptions): void ;

	getSubsequentAuthInformation(): SubsequentAuthInformation ;

	setSubsequentAuthInformation(subsequentAuthInformation: SubsequentAuthInformation): void ;

	getOtherTax(): OtherTaxType ;

	setOtherTax(otherTax: OtherTaxType): void ;

	getShipFrom(): NameAndAddressType ;

	setShipFrom(shipFrom: NameAndAddressType): void ;

}

export namespace TransactionRequestType {
	export class UserFields {
		constructor(obj?: { userField: Array<UserField> })

		getUserField(): Array<UserField> ;

		setUserField(userField: Array<UserField>): void ;

	}
}

export class TransactionResponse {
	constructor(obj?: {
		responseCode: string,
		rawResponseCode: string,
		authCode: string,
		avsResultCode: string,
		cvvResultCode: string,
		cavvResultCode: string,
		transId: string,
		refTransID: string,
		transHash: string,
		testRequest: string,
		accountNumber: string,
		entryMode: string,
		accountType: string,
		splitTenderId: string,
		prePaidCard: TransactionResponse.PrePaidCard,
		messages: TransactionResponse.Messages,
		errors: TransactionResponse.Errors,
		splitTenderPayments: TransactionResponse.SplitTenderPayments,
		userFields: TransactionResponse.UserFields,
		shipTo: NameAndAddressType,
		secureAcceptance: TransactionResponse.SecureAcceptance,
		emvResponse: TransactionResponse.EmvResponse,
		transHashSha2: string,
		profile: CustomerProfileIdType,
		networkTransId: string
	})

	getResponseCode(): string ;

	setResponseCode(responseCode: string): void ;

	getRawResponseCode(): string ;

	setRawResponseCode(rawResponseCode: string): void ;

	getAuthCode(): string ;

	setAuthCode(authCode: string): void ;

	getAvsResultCode(): string ;

	setAvsResultCode(avsResultCode: string): void ;

	getCvvResultCode(): string ;

	setCvvResultCode(cvvResultCode: string): void ;

	getCavvResultCode(): string ;

	setCavvResultCode(cavvResultCode: string): void ;

	getTransId(): string ;

	setTransId(transId: string): void ;

	getRefTransID(): string ;

	setRefTransID(refTransID: string): void ;

	getTransHash(): string ;

	setTransHash(transHash: string): void ;

	getTestRequest(): string ;

	setTestRequest(testRequest: string): void ;

	getAccountNumber(): string ;

	setAccountNumber(accountNumber: string): void ;

	getEntryMode(): string ;

	setEntryMode(entryMode: string): void ;

	getAccountType(): string ;

	setAccountType(accountType: string): void ;

	getSplitTenderId(): string ;

	setSplitTenderId(splitTenderId: string): void ;

	getPrePaidCard(): TransactionResponse.PrePaidCard ;

	setPrePaidCard(prePaidCard: TransactionResponse.PrePaidCard): void ;

	getMessages(): TransactionResponse.Messages ;

	setMessages(messages: TransactionResponse.Messages): void ;

	getErrors(): TransactionResponse.Errors ;

	setErrors(errors: TransactionResponse.Errors): void ;

	getSplitTenderPayments(): TransactionResponse.SplitTenderPayments ;

	setSplitTenderPayments(splitTenderPayments: TransactionResponse.SplitTenderPayments): void ;

	getUserFields(): TransactionResponse.UserFields ;

	setUserFields(userFields: TransactionResponse.UserFields): void ;

	getShipTo(): NameAndAddressType ;

	setShipTo(shipTo: NameAndAddressType): void ;

	getSecureAcceptance(): TransactionResponse.SecureAcceptance ;

	setSecureAcceptance(secureAcceptance: TransactionResponse.SecureAcceptance): void ;

	getEmvResponse(): TransactionResponse.EmvResponse ;

	setEmvResponse(emvResponse: TransactionResponse.EmvResponse): void ;

	getTransHashSha2(): string ;

	setTransHashSha2(transHashSha2: string): void ;

	getProfile(): CustomerProfileIdType ;

	setProfile(profile: CustomerProfileIdType): void ;

	getNetworkTransId(): string ;

	setNetworkTransId(networkTransId: string): void ;

}

export namespace TransactionResponse {
	export class SplitTenderPayments {
		constructor(obj?: { splitTenderPayment: Array<TransactionResponse.SplitTenderPayments.SplitTenderPayment> })

		getSplitTenderPayment(): Array<TransactionResponse.SplitTenderPayments.SplitTenderPayment> ;

		setSplitTenderPayment(splitTenderPayment: Array<TransactionResponse.SplitTenderPayments.SplitTenderPayment>): void ;

	}

	export class EmvResponse {
		constructor(obj?: {
			tlvData: string,
			tags: TransactionResponse.EmvResponse.Tags
		})

		getTlvData(): string ;

		setTlvData(tlvData: string): void ;

		getTags(): TransactionResponse.EmvResponse.Tags ;

		setTags(tags: TransactionResponse.EmvResponse.Tags): void ;

	}

	export class Messages {
		constructor(obj?: { message: Array<TransactionResponse.Messages.Message> })

		getMessage(): Array<TransactionResponse.Messages.Message> ;

		setMessage(message: Array<TransactionResponse.Messages.Message>): void ;

	}

	export class Errors {
		constructor(obj?: { error: Array<TransactionResponse.Errors.Error> })

		getError(): Array<TransactionResponse.Errors.Error> ;

		setError(error: Array<TransactionResponse.Errors.Error>): void ;

	}

	export class PrePaidCard {
		constructor(obj?: {
			requestedAmount: string,
			approvedAmount: string,
			balanceOnCard: string
		})

		getRequestedAmount(): string ;

		setRequestedAmount(requestedAmount: string): void ;

		getApprovedAmount(): string ;

		setApprovedAmount(approvedAmount: string): void ;

		getBalanceOnCard(): string ;

		setBalanceOnCard(balanceOnCard: string): void ;

	}

	export class SecureAcceptance {
		constructor(obj?: {
			secureAcceptanceUrl: string,
			PayerID: string,
			PayerEmail: string
		})

		getSecureAcceptanceUrl(): string ;

		setSecureAcceptanceUrl(secureAcceptanceUrl: string): void ;

		getPayerID(): string ;

		setPayerID(PayerID: string): void ;

		getPayerEmail(): string ;

		setPayerEmail(PayerEmail: string): void ;

	}

	export class UserFields {
		constructor(obj?: { userField: Array<UserField> })

		getUserField(): Array<UserField> ;

		setUserField(userField: Array<UserField>): void ;

	}

	export namespace Messages {
		export class Message {
			constructor(obj?: {
				code: string,
				description: string
			})

			getCode(): string ;

			setCode(code: string): void ;

			getDescription(): string ;

			setDescription(description: string): void ;

		}
	}
	export namespace EmvResponse {
		export class Tags {
			constructor(obj?: { tag: Array<EmvTag> })

			getTag(): Array<EmvTag> ;

			setTag(tag: Array<EmvTag>): void ;

		}
	}
	export namespace SplitTenderPayments {
		export class SplitTenderPayment {
			constructor(obj?: {
				transId: string,
				responseCode: string,
				responseToCustomer: string,
				authCode: string,
				accountNumber: string,
				accountType: string,
				requestedAmount: string,
				approvedAmount: string,
				balanceOnCard: string
			})

			getTransId(): string ;

			setTransId(transId: string): void ;

			getResponseCode(): string ;

			setResponseCode(responseCode: string): void ;

			getResponseToCustomer(): string ;

			setResponseToCustomer(responseToCustomer: string): void ;

			getAuthCode(): string ;

			setAuthCode(authCode: string): void ;

			getAccountNumber(): string ;

			setAccountNumber(accountNumber: string): void ;

			getAccountType(): string ;

			setAccountType(accountType: string): void ;

			getRequestedAmount(): string ;

			setRequestedAmount(requestedAmount: string): void ;

			getApprovedAmount(): string ;

			setApprovedAmount(approvedAmount: string): void ;

			getBalanceOnCard(): string ;

			setBalanceOnCard(balanceOnCard: string): void ;

		}
	}
	export namespace Errors {
		export class Error {
			constructor(obj?: {
				errorCode: string,
				errorText: string
			})

			getErrorCode(): string ;

			setErrorCode(errorCode: string): void ;

			getErrorText(): string ;

			setErrorText(errorText: string): void ;

		}
	}
}

export class TransactionSummaryType {
	constructor(obj?: {
		transId: string,
		submitTimeUTC: Date,
		submitTimeLocal: Date,
		transactionStatus: string,
		invoiceNumber: string,
		firstName: string,
		lastName: string,
		accountType: string,
		accountNumber: string,
		settleAmount: number,
		marketType: string,
		product: string,
		mobileDeviceId: string,
		subscription: SubscriptionPaymentType,
		hasReturnedItems: boolean,
		fraudInformation: FraudInformationType,
		profile: CustomerProfileIdType
	})

	getTransId(): string ;

	setTransId(transId: string): void ;

	getSubmitTimeUTC(): Date ;

	setSubmitTimeUTC(submitTimeUTC: Date): void ;

	getSubmitTimeLocal(): Date ;

	setSubmitTimeLocal(submitTimeLocal: Date): void ;

	getTransactionStatus(): string ;

	setTransactionStatus(transactionStatus: string): void ;

	getInvoiceNumber(): string ;

	setInvoiceNumber(invoiceNumber: string): void ;

	getFirstName(): string ;

	setFirstName(firstName: string): void ;

	getLastName(): string ;

	setLastName(lastName: string): void ;

	getAccountType(): string ;

	setAccountType(accountType: string): void ;

	getAccountNumber(): string ;

	setAccountNumber(accountNumber: string): void ;

	getSettleAmount(): number ;

	setSettleAmount(settleAmount: number): void ;

	getMarketType(): string ;

	setMarketType(marketType: string): void ;

	getProduct(): string ;

	setProduct(product: string): void ;

	getMobileDeviceId(): string ;

	setMobileDeviceId(mobileDeviceId: string): void ;

	getSubscription(): SubscriptionPaymentType ;

	setSubscription(subscription: SubscriptionPaymentType): void ;

	isHasReturnedItems(): boolean ;

	setHasReturnedItems(hasReturnedItems: boolean): void ;

	getFraudInformation(): FraudInformationType ;

	setFraudInformation(fraudInformation: FraudInformationType): void ;

	getProfile(): CustomerProfileIdType ;

	setProfile(profile: CustomerProfileIdType): void ;

}

export class UserField {
	constructor(obj?: {
		name: string,
		value: string
	})

	getName(): string ;

	setName(name: string): void ;

	getValue(): string ;

	setValue(value: string): void ;

}

export class WebCheckOutDataType {
	constructor(obj?: {
		type: WebCheckOutTypeEnum,
		id: string,
		token: WebCheckOutDataTypeToken,
		bankToken: BankAccountType
	})

	getType(): WebCheckOutTypeEnum ;

	setType(type: WebCheckOutTypeEnum): void ;

	getId(): string ;

	setId(id: string): void ;

	getToken(): WebCheckOutDataTypeToken ;

	setToken(token: WebCheckOutDataTypeToken): void ;

	getBankToken(): BankAccountType ;

	setBankToken(bankToken: BankAccountType): void ;

}

export class WebCheckOutDataTypeToken {
	constructor(obj?: {
		cardNumber: string,
		expirationDate: string,
		cardCode: string,
		zip: string,
		fullName: string
	})

	getCardNumber(): string ;

	setCardNumber(cardNumber: string): void ;

	getExpirationDate(): string ;

	setExpirationDate(expirationDate: string): void ;

	getCardCode(): string ;

	setCardCode(cardCode: string): void ;

	getZip(): string ;

	setZip(zip: string): void ;

	getFullName(): string ;

	setFullName(fullName: string): void ;

}

export class ARBCancelSubscriptionRequest extends ANetApiRequest {
	constructor(obj?: { subscriptionId: string })

	getSubscriptionId(): string ;

	setSubscriptionId(subscriptionId: string): void ;

}

export class ARBCancelSubscriptionResponse extends ANetApiResponse {
}

export class ARBCreateSubscriptionRequest extends ANetApiRequest {
	constructor(obj?: { subscription: ARBSubscriptionType })

	getSubscription(): ARBSubscriptionType ;

	setSubscription(subscription: ARBSubscriptionType): void ;

}

export class ARBCreateSubscriptionResponse extends ANetApiResponse {
	constructor(obj?: {
		subscriptionId: string,
		profile: CustomerProfileIdType
	})

	getSubscriptionId(): string ;

	setSubscriptionId(subscriptionId: string): void ;

	getProfile(): CustomerProfileIdType ;

	setProfile(profile: CustomerProfileIdType): void ;

}

export class ARBGetSubscriptionListRequest extends ANetApiRequest {
	constructor(obj?: {
		searchType: ARBGetSubscriptionListSearchTypeEnum,
		sorting: ARBGetSubscriptionListSorting,
		paging: Paging
	})

	getSearchType(): ARBGetSubscriptionListSearchTypeEnum ;

	setSearchType(searchType: ARBGetSubscriptionListSearchTypeEnum): void ;

	getSorting(): ARBGetSubscriptionListSorting ;

	setSorting(sorting: ARBGetSubscriptionListSorting): void ;

	getPaging(): Paging ;

	setPaging(paging: Paging): void ;

}

export class ARBGetSubscriptionListResponse extends ANetApiResponse {
	constructor(obj?: {
		totalNumInResultSet: number,
		subscriptionDetails: Array<SubscriptionDetail>
	})

	getTotalNumInResultSet(): number ;

	setTotalNumInResultSet(totalNumInResultSet: number): void ;

	getSubscriptionDetails(): Array<SubscriptionDetail> ;

	setSubscriptionDetails(subscriptionDetails: Array<SubscriptionDetail>): void ;

}

export class ARBGetSubscriptionRequest extends ANetApiRequest {
	constructor(obj?: {
		subscriptionId: string,
		includeTransactions: boolean
	})

	getSubscriptionId(): string ;

	setSubscriptionId(subscriptionId: string): void ;

	isIncludeTransactions(): boolean ;

	setIncludeTransactions(includeTransactions: boolean): void ;

}

export class ARBGetSubscriptionResponse extends ANetApiResponse {
	constructor(obj?: { subscription: ARBSubscriptionMaskedType })

	getSubscription(): ARBSubscriptionMaskedType ;

	setSubscription(subscription: ARBSubscriptionMaskedType): void ;

}

export class ARBGetSubscriptionStatusRequest extends ANetApiRequest {
	constructor(obj?: { subscriptionId: string })

	getSubscriptionId(): string ;

	setSubscriptionId(subscriptionId: string): void ;

}

export class ARBGetSubscriptionStatusResponse extends ANetApiResponse {
	constructor(obj?: { status: ARBSubscriptionStatusEnum })

	getStatus(): ARBSubscriptionStatusEnum ;

	setStatus(status: ARBSubscriptionStatusEnum): void ;

}

export class ARBUpdateSubscriptionRequest extends ANetApiRequest {
	constructor(obj?: {
		subscriptionId: string,
		subscription: ARBSubscriptionType
	})

	getSubscriptionId(): string ;

	setSubscriptionId(subscriptionId: string): void ;

	getSubscription(): ARBSubscriptionType ;

	setSubscription(subscription: ARBSubscriptionType): void ;

}

export class ARBUpdateSubscriptionResponse extends ANetApiResponse {
	constructor(obj?: { profile: CustomerProfileIdType })

	getProfile(): CustomerProfileIdType ;

	setProfile(profile: CustomerProfileIdType): void ;

}

export class AuDeleteType extends AuDetailsType {
	constructor(obj?: { creditCard: CreditCardMaskedType })

	getCreditCard(): CreditCardMaskedType ;

	setCreditCard(creditCard: CreditCardMaskedType): void ;

}

export class AuUpdateType extends AuDetailsType {
	constructor(obj?: {
		newCreditCard: CreditCardMaskedType,
		oldCreditCard: CreditCardMaskedType
	})

	getNewCreditCard(): CreditCardMaskedType ;

	setNewCreditCard(newCreditCard: CreditCardMaskedType): void ;

	getOldCreditCard(): CreditCardMaskedType ;

	setOldCreditCard(oldCreditCard: CreditCardMaskedType): void ;

}

export class AuthenticateTestRequest extends ANetApiRequest {
}

export class AuthenticateTestResponse extends ANetApiResponse {
}

export class CreateCustomerPaymentProfileRequest extends ANetApiRequest {
	constructor(obj?: {
		customerProfileId: string,
		paymentProfile: CustomerPaymentProfileType,
		validationMode: ValidationModeEnum
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getPaymentProfile(): CustomerPaymentProfileType ;

	setPaymentProfile(paymentProfile: CustomerPaymentProfileType): void ;

	getValidationMode(): ValidationModeEnum ;

	setValidationMode(validationMode: ValidationModeEnum): void ;

}

export class CreateCustomerPaymentProfileResponse extends ANetApiResponse {
	constructor(obj?: {
		customerProfileId: string,
		customerPaymentProfileId: string,
		validationDirectResponse: string
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerPaymentProfileId(): string ;

	setCustomerPaymentProfileId(customerPaymentProfileId: string): void ;

	getValidationDirectResponse(): string ;

	setValidationDirectResponse(validationDirectResponse: string): void ;

}

export class CreateCustomerProfileFromTransactionRequest extends ANetApiRequest {
	constructor(obj?: {
		transId: string,
		customer: CustomerProfileBaseType,
		customerProfileId: string,
		defaultPaymentProfile: boolean,
		defaultShippingAddress: boolean,
		profileType: CustomerProfileTypeEnum
	})

	getTransId(): string ;

	setTransId(transId: string): void ;

	getCustomer(): CustomerProfileBaseType ;

	setCustomer(customer: CustomerProfileBaseType): void ;

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	isDefaultPaymentProfile(): boolean ;

	setDefaultPaymentProfile(defaultPaymentProfile: boolean): void ;

	isDefaultShippingAddress(): boolean ;

	setDefaultShippingAddress(defaultShippingAddress: boolean): void ;

	getProfileType(): CustomerProfileTypeEnum ;

	setProfileType(profileType: CustomerProfileTypeEnum): void ;

}

export class CreateCustomerProfileRequest extends ANetApiRequest {
	constructor(obj?: {
		profile: CustomerProfileType,
		validationMode: ValidationModeEnum
	})

	getProfile(): CustomerProfileType ;

	setProfile(profile: CustomerProfileType): void ;

	getValidationMode(): ValidationModeEnum ;

	setValidationMode(validationMode: ValidationModeEnum): void ;

}

export class CreateCustomerProfileResponse extends ANetApiResponse {
	constructor(obj?: {
		customerProfileId: string,
		customerPaymentProfileIdList: Array<string>,
		customerShippingAddressIdList: Array<string>,
		validationDirectResponseList: Array<string>
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerPaymentProfileIdList(): Array<string> ;

	setCustomerPaymentProfileIdList(customerPaymentProfileIdList: Array<string>): void ;

	getCustomerShippingAddressIdList(): Array<string> ;

	setCustomerShippingAddressIdList(customerShippingAddressIdList: Array<string>): void ;

	getValidationDirectResponseList(): Array<string> ;

	setValidationDirectResponseList(validationDirectResponseList: Array<string>): void ;

}

export class CreateCustomerProfileTransactionRequest extends ANetApiRequest {
	constructor(obj?: {
		transaction: ProfileTransactionType,
		extraOptions: string
	})

	getTransaction(): ProfileTransactionType ;

	setTransaction(transaction: ProfileTransactionType): void ;

	getExtraOptions(): string ;

	setExtraOptions(extraOptions: string): void ;

}

export class CreateCustomerProfileTransactionResponse extends ANetApiResponse {
	constructor(obj?: {
		transactionResponse: TransactionResponse,
		directResponse: string
	})

	getTransactionResponse(): TransactionResponse ;

	setTransactionResponse(transactionResponse: TransactionResponse): void ;

	getDirectResponse(): string ;

	setDirectResponse(directResponse: string): void ;

}

export class CreateCustomerShippingAddressRequest extends ANetApiRequest {
	constructor(obj?: {
		customerProfileId: string,
		address: CustomerAddressType,
		defaultShippingAddress: boolean
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getAddress(): CustomerAddressType ;

	setAddress(address: CustomerAddressType): void ;

	isDefaultShippingAddress(): boolean ;

	setDefaultShippingAddress(defaultShippingAddress: boolean): void ;

}

export class CreateCustomerShippingAddressResponse extends ANetApiResponse {
	constructor(obj?: {
		customerProfileId: string,
		customerAddressId: string
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerAddressId(): string ;

	setCustomerAddressId(customerAddressId: string): void ;

}

export class CreateTransactionRequest extends ANetApiRequest {
	constructor(obj?: { transactionRequest: TransactionRequestType })

	getTransactionRequest(): TransactionRequestType ;

	setTransactionRequest(transactionRequest: TransactionRequestType): void ;

}


export class CreateTransactionResponse extends ANetApiResponse {
	constructor(obj?: {
		transactionResponse: TransactionResponse,
		profileResponse: CreateProfileResponse
	})

	getTransactionResponse(): TransactionResponse;

	setTransactionResponse(transactionResponse: TransactionResponse): void;

	getProfileResponse(): CreateProfileResponse;

	setProfileResponse(profileResponse: CreateProfileResponse): void;
}


export class CreditCardType extends CreditCardSimpleType {
	constructor(obj?: {
		cardCode: string,
		isPaymentToken: boolean,
		cryptogram: string,
		tokenRequestorName: string,
		tokenRequestorId: string,
		tokenRequestorEci: string
	})

	getCardCode(): string ;

	setCardCode(cardCode: string): void ;

	isIsPaymentToken(): boolean ;

	setIsPaymentToken(isPaymentToken: boolean): void ;

	getCryptogram(): string ;

	setCryptogram(cryptogram: string): void ;

	getTokenRequestorName(): string ;

	setTokenRequestorName(tokenRequestorName: string): void ;

	getTokenRequestorId(): string ;

	setTokenRequestorId(tokenRequestorId: string): void ;

	getTokenRequestorEci(): string ;

	setTokenRequestorEci(tokenRequestorEci: string): void ;

}

export class CustomerAddressType extends NameAndAddressType {
	constructor(obj?: {
		phoneNumber: string,
		faxNumber: string,
		email: string
	})

	getPhoneNumber(): string ;

	setPhoneNumber(phoneNumber: string): void ;

	getFaxNumber(): string ;

	setFaxNumber(faxNumber: string): void ;

	getEmail(): string ;

	setEmail(email: string): void ;

}

export class CustomerPaymentProfileMaskedType extends CustomerPaymentProfileBaseType {
	constructor(obj?: {
		customerProfileId: string,
		customerPaymentProfileId: string,
		defaultPaymentProfile: boolean,
		payment: PaymentMaskedType,
		driversLicense: DriversLicenseMaskedType,
		taxId: string,
		subscriptionIds: SubscriptionIdList
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerPaymentProfileId(): string ;

	setCustomerPaymentProfileId(customerPaymentProfileId: string): void ;

	isDefaultPaymentProfile(): boolean ;

	setDefaultPaymentProfile(defaultPaymentProfile: boolean): void ;

	getPayment(): PaymentMaskedType ;

	setPayment(payment: PaymentMaskedType): void ;

	getDriversLicense(): DriversLicenseMaskedType ;

	setDriversLicense(driversLicense: DriversLicenseMaskedType): void ;

	getTaxId(): string ;

	setTaxId(taxId: string): void ;

	getSubscriptionIds(): SubscriptionIdList ;

	setSubscriptionIds(subscriptionIds: SubscriptionIdList): void ;

}

export class CustomerPaymentProfileType extends CustomerPaymentProfileBaseType {
	constructor(obj?: {
		payment: PaymentType,
		driversLicense: DriversLicenseType,
		taxId: string,
		defaultPaymentProfile: boolean
	})

	getPayment(): PaymentType ;

	setPayment(payment: PaymentType): void ;

	getDriversLicense(): DriversLicenseType ;

	setDriversLicense(driversLicense: DriversLicenseType): void ;

	getTaxId(): string ;

	setTaxId(taxId: string): void ;

	isDefaultPaymentProfile(): boolean ;

	setDefaultPaymentProfile(defaultPaymentProfile: boolean): void ;

}

export class CustomerProfileExType extends CustomerProfileBaseType {
	constructor(obj?: { customerProfileId: string })

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

}

export class CustomerProfileType extends CustomerProfileBaseType {
	constructor(obj?: {
		paymentProfiles: Array<CustomerPaymentProfileType>,
		shipToList: Array<CustomerAddressType>,
		profileType: CustomerProfileTypeEnum
	})

	getPaymentProfiles(): Array<CustomerPaymentProfileType> ;

	setPaymentProfiles(paymentProfiles: Array<CustomerPaymentProfileType>): void ;

	getShipToList(): Array<CustomerAddressType> ;

	setShipToList(shipToList: Array<CustomerAddressType>): void ;

	getProfileType(): CustomerProfileTypeEnum ;

	setProfileType(profileType: CustomerProfileTypeEnum): void ;

}

export class DecryptPaymentDataRequest extends ANetApiRequest {
	constructor(obj?: {
		opaqueData: OpaqueDataType,
		callId: string
	})

	getOpaqueData(): OpaqueDataType ;

	setOpaqueData(opaqueData: OpaqueDataType): void ;

	getCallId(): string ;

	setCallId(callId: string): void ;

}

export class DecryptPaymentDataResponse extends ANetApiResponse {
	constructor(obj?: {
		shippingInfo: CustomerAddressType,
		billingInfo: CustomerAddressType,
		cardInfo: CreditCardMaskedType,
		paymentDetails: PaymentDetails
	})

	getShippingInfo(): CustomerAddressType ;

	setShippingInfo(shippingInfo: CustomerAddressType): void ;

	getBillingInfo(): CustomerAddressType ;

	setBillingInfo(billingInfo: CustomerAddressType): void ;

	getCardInfo(): CreditCardMaskedType ;

	setCardInfo(cardInfo: CreditCardMaskedType): void ;

	getPaymentDetails(): PaymentDetails ;

	setPaymentDetails(paymentDetails: PaymentDetails): void ;

}

export class DeleteCustomerPaymentProfileRequest extends ANetApiRequest {
	constructor(obj?: {
		customerProfileId: string,
		customerPaymentProfileId: string
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerPaymentProfileId(): string ;

	setCustomerPaymentProfileId(customerPaymentProfileId: string): void ;

}

export class DeleteCustomerPaymentProfileResponse extends ANetApiResponse {
}

export class DeleteCustomerProfileRequest extends ANetApiRequest {
	constructor(obj?: { customerProfileId: string })

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

}

export class DeleteCustomerProfileResponse extends ANetApiResponse {
}

export class DeleteCustomerShippingAddressRequest extends ANetApiRequest {
	constructor(obj?: {
		customerProfileId: string,
		customerAddressId: string
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerAddressId(): string ;

	setCustomerAddressId(customerAddressId: string): void ;

}

export class DeleteCustomerShippingAddressResponse extends ANetApiResponse {
}

export class EmailSettingsType extends Array<SettingType> {
	constructor(obj?: { version: BigInteger })

	getVersion(): BigInteger ;

	setVersion(version: BigInteger): void ;

}

export class GetAUJobDetailsRequest extends ANetApiRequest {
	constructor(obj?: {
		month: string,
		modifiedTypeFilter: AUJobTypeEnum,
		paging: Paging
	})

	getMonth(): string ;

	setMonth(month: string): void ;

	getModifiedTypeFilter(): AUJobTypeEnum ;

	setModifiedTypeFilter(modifiedTypeFilter: AUJobTypeEnum): void ;

	getPaging(): Paging ;

	setPaging(paging: Paging): void ;

}

export class GetAUJobDetailsResponse extends ANetApiResponse {
	constructor(obj?: {
		totalNumInResultSet: number,
		auDetails: ListOfAUDetailsType
	})

	getTotalNumInResultSet(): number ;

	setTotalNumInResultSet(totalNumInResultSet: number): void ;

	getAuDetails(): ListOfAUDetailsType ;

	setAuDetails(auDetails: ListOfAUDetailsType): void ;

}

export class GetAUJobSummaryRequest extends ANetApiRequest {
	constructor(obj?: { month: string })

	getMonth(): string ;

	setMonth(month: string): void ;

}

export class GetAUJobSummaryResponse extends ANetApiResponse {
	constructor(obj?: { auSummary: Array<AuResponseType> })

	getAuSummary(): Array<AuResponseType> ;

	setAuSummary(auSummary: Array<AuResponseType>): void ;

}

export class GetBatchStatisticsRequest extends ANetApiRequest {
	constructor(obj?: { batchId: string })

	getBatchId(): string ;

	setBatchId(batchId: string): void ;

}

export class GetBatchStatisticsResponse extends ANetApiResponse {
	constructor(obj?: { batch: BatchDetailsType })

	getBatch(): BatchDetailsType ;

	setBatch(batch: BatchDetailsType): void ;

}

export class GetCustomerPaymentProfileListRequest extends ANetApiRequest {
	constructor(obj?: {
		searchType: CustomerPaymentProfileSearchTypeEnum,
		month: string,
		sorting: CustomerPaymentProfileSorting,
		paging: Paging
	})

	getSearchType(): CustomerPaymentProfileSearchTypeEnum ;

	setSearchType(searchType: CustomerPaymentProfileSearchTypeEnum): void ;

	getMonth(): string ;

	setMonth(month: string): void ;

	getSorting(): CustomerPaymentProfileSorting ;

	setSorting(sorting: CustomerPaymentProfileSorting): void ;

	getPaging(): Paging ;

	setPaging(paging: Paging): void ;

}

export class GetCustomerPaymentProfileListResponse extends ANetApiResponse {
	constructor(obj?: {
		totalNumInResultSet: number,
		paymentProfiles: Array<CustomerPaymentProfileListItemType>
	})

	getTotalNumInResultSet(): number ;

	setTotalNumInResultSet(totalNumInResultSet: number): void ;

	getPaymentProfiles(): Array<CustomerPaymentProfileListItemType> ;

	setPaymentProfiles(paymentProfiles: Array<CustomerPaymentProfileListItemType>): void ;

}

export class GetCustomerPaymentProfileNonceRequest extends ANetApiRequest {
	constructor(obj?: {
		connectedAccessToken: string,
		customerProfileId: string,
		customerPaymentProfileId: string
	})

	getConnectedAccessToken(): string ;

	setConnectedAccessToken(connectedAccessToken: string): void ;

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerPaymentProfileId(): string ;

	setCustomerPaymentProfileId(customerPaymentProfileId: string): void ;

}

export class GetCustomerPaymentProfileNonceResponse extends ANetApiResponse {
	constructor(obj?: { opaqueData: OpaqueDataType })

	getOpaqueData(): OpaqueDataType ;

	setOpaqueData(opaqueData: OpaqueDataType): void ;

}

export class GetCustomerPaymentProfileRequest extends ANetApiRequest {
	constructor(obj?: {
		customerProfileId: string,
		customerPaymentProfileId: string,
		unmaskExpirationDate: boolean,
		includeIssuerInfo: boolean
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerPaymentProfileId(): string ;

	setCustomerPaymentProfileId(customerPaymentProfileId: string): void ;

	isUnmaskExpirationDate(): boolean ;

	setUnmaskExpirationDate(unmaskExpirationDate: boolean): void ;

	isIncludeIssuerInfo(): boolean ;

	setIncludeIssuerInfo(includeIssuerInfo: boolean): void ;

}

export class GetCustomerPaymentProfileResponse extends ANetApiResponse {
	constructor(obj?: { paymentProfile: CustomerPaymentProfileMaskedType })

	getPaymentProfile(): CustomerPaymentProfileMaskedType ;

	setPaymentProfile(paymentProfile: CustomerPaymentProfileMaskedType): void ;

}

export class GetCustomerProfileIdsRequest extends ANetApiRequest {
}

export class GetCustomerProfileIdsResponse extends ANetApiResponse {
	constructor(obj?: { ids: Array<string> })

	getIds(): Array<string> ;

	setIds(ids: Array<string>): void ;

}

export class GetCustomerProfileRequest extends ANetApiRequest {
	constructor(obj?: {
		customerProfileId: string,
		merchantCustomerId: string,
		email: string,
		unmaskExpirationDate: boolean,
		includeIssuerInfo: boolean
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getMerchantCustomerId(): string ;

	setMerchantCustomerId(merchantCustomerId: string): void ;

	getEmail(): string ;

	setEmail(email: string): void ;

	isUnmaskExpirationDate(): boolean ;

	setUnmaskExpirationDate(unmaskExpirationDate: boolean): void ;

	isIncludeIssuerInfo(): boolean ;

	setIncludeIssuerInfo(includeIssuerInfo: boolean): void ;

}

export class GetCustomerProfileResponse extends ANetApiResponse {
	constructor(obj?: {
		profile: CustomerProfileMaskedType,
		subscriptionIds: SubscriptionIdList
	})

	getProfile(): CustomerProfileMaskedType ;

	setProfile(profile: CustomerProfileMaskedType): void ;

	getSubscriptionIds(): SubscriptionIdList ;

	setSubscriptionIds(subscriptionIds: SubscriptionIdList): void ;

}

export class GetCustomerShippingAddressRequest extends ANetApiRequest {
	constructor(obj?: {
		customerProfileId: string,
		customerAddressId: string
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerAddressId(): string ;

	setCustomerAddressId(customerAddressId: string): void ;

}

export class GetCustomerShippingAddressResponse extends ANetApiResponse {
	constructor(obj?: {
		defaultShippingAddress: boolean,
		address: CustomerAddressExType,
		subscriptionIds: SubscriptionIdList
	})

	isDefaultShippingAddress(): boolean ;

	setDefaultShippingAddress(defaultShippingAddress: boolean): void ;

	getAddress(): CustomerAddressExType ;

	setAddress(address: CustomerAddressExType): void ;

	getSubscriptionIds(): SubscriptionIdList ;

	setSubscriptionIds(subscriptionIds: SubscriptionIdList): void ;

}

export class GetHostedPaymentPageRequest extends ANetApiRequest {
	constructor(obj?: {
		transactionRequest: TransactionRequestType,
		hostedPaymentSettings: Array<SettingType>
	})

	getTransactionRequest(): TransactionRequestType ;

	setTransactionRequest(transactionRequest: TransactionRequestType): void ;

	getHostedPaymentSettings(): Array<SettingType> ;

	setHostedPaymentSettings(hostedPaymentSettings: Array<SettingType>): void ;

}

export class GetHostedPaymentPageResponse extends ANetApiResponse {
	constructor(obj?: { token: string })

	getToken(): string ;

	setToken(token: string): void ;

}

export class GetHostedProfilePageRequest extends ANetApiRequest {
	constructor(obj?: {
		customerProfileId: string,
		hostedProfileSettings: Array<SettingType>
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getHostedProfileSettings(): Array<SettingType> ;

	setHostedProfileSettings(hostedProfileSettings: Array<SettingType>): void ;

}

export class GetHostedProfilePageResponse extends ANetApiResponse {
	constructor(obj?: { token: string })

	getToken(): string ;

	setToken(token: string): void ;

}

export class GetMerchantDetailsRequest extends ANetApiRequest {
}

export class GetMerchantDetailsResponse extends ANetApiResponse {
	constructor(obj?: {
		isTestMode: boolean,
		processors: Array<ProcessorType>,
		merchantName: string,
		gatewayId: string,
		marketTypes: Array<string>,
		productCodes: Array<string>,
		paymentMethods: Array<PaymentMethodsTypeEnum>,
		currencies: Array<string>,
		publicClientKey: string,
		businessInformation: CustomerAddressType,
		merchantTimeZone: string,
		contactDetails: Array<ContactDetailType>
	})

	isIsTestMode(): boolean ;

	setIsTestMode(isTestMode: boolean): void ;

	getProcessors(): Array<ProcessorType> ;

	setProcessors(processors: Array<ProcessorType>): void ;

	getMerchantName(): string ;

	setMerchantName(merchantName: string): void ;

	getGatewayId(): string ;

	setGatewayId(gatewayId: string): void ;

	getMarketTypes(): Array<string> ;

	setMarketTypes(marketTypes: Array<string>): void ;

	getProductCodes(): Array<string> ;

	setProductCodes(productCodes: Array<string>): void ;

	getPaymentMethods(): Array<PaymentMethodsTypeEnum> ;

	setPaymentMethods(paymentMethods: Array<PaymentMethodsTypeEnum>): void ;

	getCurrencies(): Array<string> ;

	setCurrencies(currencies: Array<string>): void ;

	getPublicClientKey(): string ;

	setPublicClientKey(publicClientKey: string): void ;

	getBusinessInformation(): CustomerAddressType ;

	setBusinessInformation(businessInformation: CustomerAddressType): void ;

	getMerchantTimeZone(): string ;

	setMerchantTimeZone(merchantTimeZone: string): void ;

	getContactDetails(): Array<ContactDetailType> ;

	setContactDetails(contactDetails: Array<ContactDetailType>): void ;

}

export class GetSettledBatchListRequest extends ANetApiRequest {
	constructor(obj?: {
		includeStatistics: boolean,
		firstSettlementDate: Date,
		lastSettlementDate: Date
	})

	isIncludeStatistics(): boolean ;

	setIncludeStatistics(includeStatistics: boolean): void ;

	getFirstSettlementDate(): Date ;

	setFirstSettlementDate(firstSettlementDate: Date): void ;

	getLastSettlementDate(): Date ;

	setLastSettlementDate(lastSettlementDate: Date): void ;

}

export class GetSettledBatchListResponse extends ANetApiResponse {
	constructor(obj?: { batchList: Array<BatchDetailsType> })

	getBatchList(): Array<BatchDetailsType> ;

	setBatchList(batchList: Array<BatchDetailsType>): void ;

}

export class GetTransactionDetailsRequest extends ANetApiRequest {
	constructor(obj?: { transId: string })

	getTransId(): string ;

	setTransId(transId: string): void ;

}

export class GetTransactionDetailsResponse extends ANetApiResponse {
	constructor(obj?: {
		transaction: TransactionDetailsType,
		clientId: string,
		transrefId: string
	})

	getTransaction(): TransactionDetailsType ;

	setTransaction(transaction: TransactionDetailsType): void ;

	getClientId(): string ;

	setClientId(clientId: string): void ;

	getTransrefId(): string ;

	setTransrefId(transrefId: string): void ;

}

export class GetTransactionListForCustomerRequest extends ANetApiRequest {
	constructor(obj?: {
		customerProfileId: string,
		customerPaymentProfileId: string,
		sorting: TransactionListSorting,
		paging: Paging
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerPaymentProfileId(): string ;

	setCustomerPaymentProfileId(customerPaymentProfileId: string): void ;

	getSorting(): TransactionListSorting ;

	setSorting(sorting: TransactionListSorting): void ;

	getPaging(): Paging ;

	setPaging(paging: Paging): void ;

}

export class GetTransactionListRequest extends ANetApiRequest {
	constructor(obj?: {
		batchId: string,
		sorting: TransactionListSorting,
		paging: Paging
	})

	getBatchId(): string ;

	setBatchId(batchId: string): void ;

	getSorting(): TransactionListSorting ;

	setSorting(sorting: TransactionListSorting): void ;

	getPaging(): Paging ;

	setPaging(paging: Paging): void ;

}

export class GetTransactionListResponse extends ANetApiResponse {
	constructor(obj?: {
		transactions: Array<TransactionSummaryType>,
		totalNumInResultSet: number
	})

	getTransactions(): Array<TransactionSummaryType> ;

	setTransactions(transactions: Array<TransactionSummaryType>): void ;

	getTotalNumInResultSet(): number ;

	setTotalNumInResultSet(totalNumInResultSet: number): void ;

}

export class GetUnsettledTransactionListRequest extends ANetApiRequest {
	constructor(obj?: {
		status: TransactionGroupStatusEnum,
		sorting: TransactionListSorting,
		paging: Paging
	})

	getStatus(): TransactionGroupStatusEnum ;

	setStatus(status: TransactionGroupStatusEnum): void ;

	getSorting(): TransactionListSorting ;

	setSorting(sorting: TransactionListSorting): void ;

	getPaging(): Paging ;

	setPaging(paging: Paging): void ;

}

export class GetUnsettledTransactionListResponse extends ANetApiResponse {
	constructor(obj?: {
		transactions: Array<TransactionSummaryType>,
		totalNumInResultSet: number
	})

	getTransactions(): Array<TransactionSummaryType> ;

	setTransactions(transactions: Array<TransactionSummaryType>): void ;

	getTotalNumInResultSet(): number ;

	setTotalNumInResultSet(totalNumInResultSet: number): void ;

}

export class IsAliveResponse extends ANetApiResponse {
}

export class LogoutRequest extends ANetApiRequest {
}

export class LogoutResponse extends ANetApiResponse {
}

export class MobileDeviceLoginRequest extends ANetApiRequest {
}

export class MobileDeviceLoginResponse extends ANetApiResponse {
	constructor(obj?: {
		merchantContact: MerchantContactType,
		userPermissions: Array<PermissionType>,
		merchantAccount: TransRetailInfoType
	})

	getMerchantContact(): MerchantContactType ;

	setMerchantContact(merchantContact: MerchantContactType): void ;

	getUserPermissions(): Array<PermissionType> ;

	setUserPermissions(userPermissions: Array<PermissionType>): void ;

	getMerchantAccount(): TransRetailInfoType ;

	setMerchantAccount(merchantAccount: TransRetailInfoType): void ;

}

export class MobileDeviceRegistrationRequest extends ANetApiRequest {
	constructor(obj?: { mobileDevice: MobileDeviceType })

	getMobileDevice(): MobileDeviceType ;

	setMobileDevice(mobileDevice: MobileDeviceType): void ;

}

export class MobileDeviceRegistrationResponse extends ANetApiResponse {
}

export class OrderExType extends OrderType {
	constructor(obj?: { purchaseOrderNumber: string })

	getPurchaseOrderNumber(): string ;

	setPurchaseOrderNumber(purchaseOrderNumber: string): void ;

}

export class ProfileTransOrderType extends ProfileTransAmountType {
	constructor(obj?: {
		customerProfileId: string,
		customerPaymentProfileId: string,
		customerShippingAddressId: string,
		order: OrderExType,
		taxExempt: boolean,
		recurringBilling: boolean,
		cardCode: string,
		splitTenderId: string,
		processingOptions: ProcessingOptions,
		subsequentAuthInformation: SubsequentAuthInformation
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerPaymentProfileId(): string ;

	setCustomerPaymentProfileId(customerPaymentProfileId: string): void ;

	getCustomerShippingAddressId(): string ;

	setCustomerShippingAddressId(customerShippingAddressId: string): void ;

	getOrder(): OrderExType ;

	setOrder(order: OrderExType): void ;

	isTaxExempt(): boolean ;

	setTaxExempt(taxExempt: boolean): void ;

	isRecurringBilling(): boolean ;

	setRecurringBilling(recurringBilling: boolean): void ;

	getCardCode(): string ;

	setCardCode(cardCode: string): void ;

	getSplitTenderId(): string ;

	setSplitTenderId(splitTenderId: string): void ;

	getProcessingOptions(): ProcessingOptions ;

	setProcessingOptions(processingOptions: ProcessingOptions): void ;

	getSubsequentAuthInformation(): SubsequentAuthInformation ;

	setSubsequentAuthInformation(subsequentAuthInformation: SubsequentAuthInformation): void ;

}

export class ProfileTransPriorAuthCaptureType extends ProfileTransAmountType {
	constructor(obj?: {
		customerProfileId: string,
		customerPaymentProfileId: string,
		customerShippingAddressId: string,
		transId: string
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerPaymentProfileId(): string ;

	setCustomerPaymentProfileId(customerPaymentProfileId: string): void ;

	getCustomerShippingAddressId(): string ;

	setCustomerShippingAddressId(customerShippingAddressId: string): void ;

	getTransId(): string ;

	setTransId(transId: string): void ;

}

export class ProfileTransRefundType extends ProfileTransAmountType {
	constructor(obj?: {
		customerProfileId: string,
		customerPaymentProfileId: string,
		customerShippingAddressId: string,
		creditCardNumberMasked: string,
		bankRoutingNumberMasked: string,
		bankAccountNumberMasked: string,
		order: OrderExType,
		transId: string
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerPaymentProfileId(): string ;

	setCustomerPaymentProfileId(customerPaymentProfileId: string): void ;

	getCustomerShippingAddressId(): string ;

	setCustomerShippingAddressId(customerShippingAddressId: string): void ;

	getCreditCardNumberMasked(): string ;

	setCreditCardNumberMasked(creditCardNumberMasked: string): void ;

	getBankRoutingNumberMasked(): string ;

	setBankRoutingNumberMasked(bankRoutingNumberMasked: string): void ;

	getBankAccountNumberMasked(): string ;

	setBankAccountNumberMasked(bankAccountNumberMasked: string): void ;

	getOrder(): OrderExType ;

	setOrder(order: OrderExType): void ;

	getTransId(): string ;

	setTransId(transId: string): void ;

}

export class SecurePaymentContainerRequest extends ANetApiRequest {
	constructor(obj?: { data: WebCheckOutDataType })

	getData(): WebCheckOutDataType ;

	setData(data: WebCheckOutDataType): void ;

}

export class SecurePaymentContainerResponse extends ANetApiResponse {
	constructor(obj?: { opaqueData: OpaqueDataType })

	getOpaqueData(): OpaqueDataType ;

	setOpaqueData(opaqueData: OpaqueDataType): void ;

}

export class SendCustomerTransactionReceiptRequest extends ANetApiRequest {
	constructor(obj?: {
		transId: string,
		customerEmail: string,
		emailSettings: EmailSettingsType
	})

	getTransId(): string ;

	setTransId(transId: string): void ;

	getCustomerEmail(): string ;

	setCustomerEmail(customerEmail: string): void ;

	getEmailSettings(): EmailSettingsType ;

	setEmailSettings(emailSettings: EmailSettingsType): void ;

}

export class SendCustomerTransactionReceiptResponse extends ANetApiResponse {
}

export class UpdateCustomerPaymentProfileRequest extends ANetApiRequest {
	constructor(obj?: {
		customerProfileId: string,
		paymentProfile: CustomerPaymentProfileExType,
		validationMode: ValidationModeEnum
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getPaymentProfile(): CustomerPaymentProfileExType ;

	setPaymentProfile(paymentProfile: CustomerPaymentProfileExType): void ;

	getValidationMode(): ValidationModeEnum ;

	setValidationMode(validationMode: ValidationModeEnum): void ;

}

export class UpdateCustomerPaymentProfileResponse extends ANetApiResponse {
	constructor(obj?: { validationDirectResponse: string })
}

export class UpdateCustomerProfileRequest extends ANetApiRequest {
	constructor(obj?: { profile: CustomerProfileExType })

	getProfile(): CustomerProfileExType ;

	setProfile(profile: CustomerProfileExType): void ;

}

export class UpdateCustomerProfileResponse extends ANetApiResponse {
}

export class UpdateCustomerShippingAddressRequest extends ANetApiRequest {
	constructor(obj?: {
		customerProfileId: string,
		address: CustomerAddressExType,
		defaultShippingAddress: boolean
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getAddress(): CustomerAddressExType ;

	setAddress(address: CustomerAddressExType): void ;

	isDefaultShippingAddress(): boolean ;

	setDefaultShippingAddress(defaultShippingAddress: boolean): void ;

}

export class UpdateCustomerShippingAddressResponse extends ANetApiResponse {
}

export class UpdateHeldTransactionRequest extends ANetApiRequest {
	constructor(obj?: { heldTransactionRequest: HeldTransactionRequestType })

	getHeldTransactionRequest(): HeldTransactionRequestType ;

	setHeldTransactionRequest(heldTransactionRequest: HeldTransactionRequestType): void ;

}

export class UpdateHeldTransactionResponse extends ANetApiResponse {
	constructor(obj?: { transactionResponse: TransactionResponse })

	getTransactionResponse(): TransactionResponse ;

	setTransactionResponse(transactionResponse: TransactionResponse): void ;

}

export class UpdateMerchantDetailsRequest extends ANetApiRequest {
	constructor(obj?: { isTestMode: boolean })

	isIsTestMode(): boolean ;

	setIsTestMode(isTestMode: boolean): void ;

}

export class UpdateMerchantDetailsResponse extends ANetApiResponse {
}

export class UpdateSplitTenderGroupRequest extends ANetApiRequest {
	constructor(obj?: {
		splitTenderId: string,
		splitTenderStatus: SplitTenderStatusEnum
	})

	getSplitTenderId(): string ;

	setSplitTenderId(splitTenderId: string): void ;

	getSplitTenderStatus(): SplitTenderStatusEnum ;

	setSplitTenderStatus(splitTenderStatus: SplitTenderStatusEnum): void ;

}

export class UpdateSplitTenderGroupResponse extends ANetApiResponse {
}

export class ValidateCustomerPaymentProfileRequest extends ANetApiRequest {
	constructor(obj?: {
		customerProfileId: string,
		customerPaymentProfileId: string,
		customerShippingAddressId: string,
		cardCode: string,
		validationMode: ValidationModeEnum
	})

	getCustomerProfileId(): string ;

	setCustomerProfileId(customerProfileId: string): void ;

	getCustomerPaymentProfileId(): string ;

	setCustomerPaymentProfileId(customerPaymentProfileId: string): void ;

	getCustomerShippingAddressId(): string ;

	setCustomerShippingAddressId(customerShippingAddressId: string): void ;

	getCardCode(): string ;

	setCardCode(cardCode: string): void ;

	getValidationMode(): ValidationModeEnum ;

	setValidationMode(validationMode: ValidationModeEnum): void ;

}

export class ValidateCustomerPaymentProfileResponse extends ANetApiResponse {
	constructor(obj?: { directResponse: string })

	getDirectResponse(): string ;

	setDirectResponse(directResponse: string): void ;

}

export class CustomerAddressExType extends CustomerAddressType {
	constructor(obj?: { customerAddressId: string })

	getCustomerAddressId(): string ;

	setCustomerAddressId(customerAddressId: string): void ;

}

export class CustomerPaymentProfileExType extends CustomerPaymentProfileType {
	constructor(obj?: { customerPaymentProfileId: string })

	getCustomerPaymentProfileId(): string ;

	setCustomerPaymentProfileId(customerPaymentProfileId: string): void ;

}

export class CustomerProfileInfoExType extends CustomerProfileExType {
	constructor(obj?: { profileType: CustomerProfileTypeEnum })

	getProfileType(): CustomerProfileTypeEnum ;

	setProfileType(profileType: CustomerProfileTypeEnum): void ;

}

export class CustomerProfileMaskedType extends CustomerProfileExType {
	constructor(obj?: {
		paymentProfiles: Array<CustomerPaymentProfileMaskedType>,
		shipToList: Array<CustomerAddressExType>,
		profileType: CustomerProfileTypeEnum
	})

	getPaymentProfiles(): Array<CustomerPaymentProfileMaskedType> ;

	setPaymentProfiles(paymentProfiles: Array<CustomerPaymentProfileMaskedType>): void ;

	getShipToList(): Array<CustomerAddressExType> ;

	setShipToList(shipToList: Array<CustomerAddressExType>): void ;

	getProfileType(): CustomerProfileTypeEnum ;

	setProfileType(profileType: CustomerProfileTypeEnum): void ;

}

export class ProfileTransAuthCaptureType extends ProfileTransOrderType {
}

export class ProfileTransAuthOnlyType extends ProfileTransOrderType {
}

export class ProfileTransCaptureOnlyType extends ProfileTransOrderType {
	constructor(obj?: { approvalCode: string })

	getApprovalCode(): string ;

	setApprovalCode(approvalCode: string): void ;

}

export class SubscriptionCustomerProfileType extends CustomerProfileExType {
	constructor(obj?: {
		paymentProfile: CustomerPaymentProfileMaskedType,
		shippingProfile: CustomerAddressExType
	})

	getPaymentProfile(): CustomerPaymentProfileMaskedType ;

	setPaymentProfile(paymentProfile: CustomerPaymentProfileMaskedType): void ;

	getShippingProfile(): CustomerAddressExType ;

	setShippingProfile(shippingProfile: CustomerAddressExType): void ;

}

export enum ARBGetSubscriptionListOrderFieldEnum {
	ID = 'id',

	NAME = 'name',

	STATUS = 'status',

	CREATETIMESTAMPUTC = 'createTimeStampUTC',

	LASTNAME = 'lastName',

	FIRSTNAME = 'firstName',

	ACCOUNTNUMBER = 'accountNumber',

	AMOUNT = 'amount',

	PASTOCCURRENCES = 'pastOccurrences'
}

export enum ARBGetSubscriptionListSearchTypeEnum {
	CARDEXPIRINGTHISMONTH = 'cardExpiringThisMonth',

	SUBSCRIPTIONACTIVE = 'subscriptionActive',

	SUBSCRIPTIONEXPIRINGTHISMONTH = 'subscriptionExpiringThisMonth',

	SUBSCRIPTIONINACTIVE = 'subscriptionInactive'
}

export enum ARBSubscriptionStatusEnum {
	ACTIVE = 'active',

	EXPIRED = 'expired',

	SUSPENDED = 'suspended',

	CANCELED = 'canceled',

	TERMINATED = 'terminated'
}

export enum ARBSubscriptionUnitEnum {
	DAYS = 'days',

	MONTHS = 'months'
}

export enum AUJobTypeEnum {
	ALL = 'all',

	UPDATES = 'updates',

	DELETES = 'deletes'
}

export enum AccountTypeEnum {
	VISA = 'Visa',

	MASTERCARD = 'MasterCard',

	AMERICANEXPRESS = 'AmericanExpress',

	DISCOVER = 'Discover',

	JCB = 'JCB',

	DINERSCLUB = 'DinersClub',

	ECHECK = 'eCheck'
}

export enum AfdsTransactionEnum {
	APPROVE = 'approve',

	DECLINE = 'decline'
}

export enum BankAccountTypeEnum {
	CHECKING = 'checking',

	SAVINGS = 'savings',

	BUSINESSCHECKING = 'businessChecking'
}

export enum CardTypeEnum {
	VISA = 'Visa',

	MASTERCARD = 'MasterCard',

	AMERICANEXPRESS = 'AmericanExpress',

	DISCOVER = 'Discover',

	JCB = 'JCB',

	DINERSCLUB = 'DinersClub'
}

export enum CustomerPaymentProfileOrderFieldEnum {
	ID = 'id'
}

export enum CustomerPaymentProfileSearchTypeEnum {
	CARDSEXPIRINGINMONTH = 'cardsExpiringInMonth'
}

export enum CustomerProfileTypeEnum {
	REGULAR = 'regular',

	GUEST = 'guest'
}

export enum CustomerTypeEnum {
	INDIVIDUAL = 'individual',

	BUSINESS = 'business'
}

export enum DeviceActivationEnum {
	ACTIVATE = 'Activate',

	DISABLE = 'Disable'
}

export enum EcheckTypeEnum {
	PPD = 'PPD',

	WEB = 'WEB',

	CCD = 'CCD',

	TEL = 'TEL',

	ARC = 'ARC',

	BOC = 'BOC'
}

export enum EncodingType {
	BASE64 = 'Base64',

	HEX = 'Hex'
}

export enum EncryptionAlgorithmType {
	TDES = 'TDES',

	AES = 'AES',

	RSA = 'RSA'
}

export enum FDSFilterActionEnum {
	REJECT = 'reject',

	DECLINE = 'decline',

	HOLD = 'hold',

	AUTHANDHOLD = 'authAndHold',

	REPORT = 'report'
}

export enum MerchantInitTransReasonEnum {
	RESUBMISSION = 'resubmission',

	DELAYEDCHARGE = 'delayedCharge',

	REAUTHORIZATION = 'reauthorization',

	NOSHOW = 'noShow'
}

export enum MessageTypeEnum {
	OK = 'Ok',

	ERROR = 'Error'
}

export enum OperationType {
	DECRYPT = 'DECRYPT'
}

export enum PaymentMethodEnum {
	CREDITCARD = 'creditCard',

	ECHECK = 'eCheck',

	PAYPAL = 'payPal'
}

export enum PaymentMethodsTypeEnum {
	VISA = 'Visa',

	MASTERCARD = 'MasterCard',

	DISCOVER = 'Discover',

	AMERICANEXPRESS = 'AmericanExpress',

	DINERSCLUB = 'DinersClub',

	JCB = 'JCB',

	ENROUTE = 'EnRoute',

	ECHECK = 'Echeck',

	PAYPAL = 'Paypal',

	VISACHECKOUT = 'VisaCheckout',

	APPLEPAY = 'ApplePay',

	ANDROIDPAY = 'AndroidPay'
}

export enum PermissionsEnum {
	API_MERCHANT_BASICREPORTING = 'API_Merchant_BasicReporting',

	SUBMIT_CHARGE = 'Submit_Charge',

	SUBMIT_REFUND = 'Submit_Refund',

	SUBMIT_UPDATE = 'Submit_Update',

	MOBILE_ADMIN = 'Mobile_Admin'
}

export enum SettingNameEnum {
	EMAILCUSTOMER = 'emailCustomer',

	MERCHANTEMAIL = 'merchantEmail',

	ALLOWPARTIALAUTH = 'allowPartialAuth',

	HEADEREMAILRECEIPT = 'headerEmailReceipt',

	FOOTEREMAILRECEIPT = 'footerEmailReceipt',

	RECURRINGBILLING = 'recurringBilling',

	DUPLICATEWINDOW = 'duplicateWindow',

	TESTREQUEST = 'testRequest',

	HOSTEDPROFILERETURNURL = 'hostedProfileReturnUrl',

	HOSTEDPROFILERETURNURLTEXT = 'hostedProfileReturnUrlText',

	HOSTEDPROFILEPAGEBORDERVISIBLE = 'hostedProfilePageBorderVisible',

	HOSTEDPROFILEIFRAMECOMMUNICATORURL = 'hostedProfileIFrameCommunicatorUrl',

	HOSTEDPROFILEHEADINGBGCOLOR = 'hostedProfileHeadingBgColor',

	HOSTEDPROFILEVALIDATIONMODE = 'hostedProfileValidationMode',

	HOSTEDPROFILEBILLINGADDRESSREQUIRED = 'hostedProfileBillingAddressRequired',

	HOSTEDPROFILECARDCODEREQUIRED = 'hostedProfileCardCodeRequired',

	HOSTEDPROFILEBILLINGADDRESSOPTIONS = 'hostedProfileBillingAddressOptions',

	HOSTEDPROFILEMANAGEOPTIONS = 'hostedProfileManageOptions',

	HOSTEDPAYMENTIFRAMECOMMUNICATORURL = 'hostedPaymentIFrameCommunicatorUrl',

	HOSTEDPAYMENTBUTTONOPTIONS = 'hostedPaymentButtonOptions',

	HOSTEDPAYMENTRETURNOPTIONS = 'hostedPaymentReturnOptions',

	HOSTEDPAYMENTORDEROPTIONS = 'hostedPaymentOrderOptions',

	HOSTEDPAYMENTPAYMENTOPTIONS = 'hostedPaymentPaymentOptions',

	HOSTEDPAYMENTBILLINGADDRESSOPTIONS = 'hostedPaymentBillingAddressOptions',

	HOSTEDPAYMENTSHIPPINGADDRESSOPTIONS = 'hostedPaymentShippingAddressOptions',

	HOSTEDPAYMENTSECURITYOPTIONS = 'hostedPaymentSecurityOptions',

	HOSTEDPAYMENTCUSTOMEROPTIONS = 'hostedPaymentCustomerOptions',

	HOSTEDPAYMENTSTYLEOPTIONS = 'hostedPaymentStyleOptions',

	TYPEEMAILRECEIPT = 'typeEmailReceipt',

	HOSTEDPROFILEPAYMENTOPTIONS = 'hostedProfilePaymentOptions',

	HOSTEDPROFILESAVEBUTTONTEXT = 'hostedProfileSaveButtonText'
}

export enum SettlementStateEnum {
	SETTLEDSUCCESSFULLY = 'settledSuccessfully',

	SETTLEMENTERROR = 'settlementError',

	PENDINGSETTLEMENT = 'pendingSettlement'
}

export enum SplitTenderStatusEnum {
	COMPLETED = 'completed',

	HELD = 'held',

	VOIDED = 'voided'
}

export enum TransactionGroupStatusEnum {
	ANY = 'any',

	PENDINGAPPROVAL = 'pendingApproval'
}

export enum TransactionListOrderFieldEnum {
	ID = 'id',

	SUBMITTIMEUTC = 'submitTimeUTC'
}

export enum TransactionStatusEnum {
	AUTHORIZEDPENDINGCAPTURE = 'authorizedPendingCapture',

	CAPTUREDPENDINGSETTLEMENT = 'capturedPendingSettlement',

	COMMUNICATIONERROR = 'communicationError',

	REFUNDSETTLEDSUCCESSFULLY = 'refundSettledSuccessfully',

	REFUNDPENDINGSETTLEMENT = 'refundPendingSettlement',

	APPROVEDREVIEW = 'approvedReview',

	DECLINED = 'declined',

	COULDNOTVOID = 'couldNotVoid',

	EXPIRED = 'expired',

	GENERALERROR = 'generalError',

	PENDINGFINALSETTLEMENT = 'pendingFinalSettlement',

	PENDINGSETTLEMENT = 'pendingSettlement',

	FAILEDREVIEW = 'failedReview',

	SETTLEDSUCCESSFULLY = 'settledSuccessfully',

	SETTLEMENTERROR = 'settlementError',

	UNDERREVIEW = 'underReview',

	UPDATINGSETTLEMENT = 'updatingSettlement',

	VOIDED = 'voided',

	FDSPENDINGREVIEW = 'FDSPendingReview',

	FDSAUTHORIZEDPENDINGREVIEW = 'FDSAuthorizedPendingReview',

	RETURNEDITEM = 'returnedItem',

	CHARGEBACK = 'chargeback',

	CHARGEBACKREVERSAL = 'chargebackReversal',

	AUTHORIZEDPENDINGRELEASE = 'authorizedPendingRelease'
}

export enum TransactionTypeEnum {
	AUTHONLYTRANSACTION = 'authOnlyTransaction',

	AUTHCAPTURETRANSACTION = 'authCaptureTransaction',

	CAPTUREONLYTRANSACTION = 'captureOnlyTransaction',

	REFUNDTRANSACTION = 'refundTransaction',

	PRIORAUTHCAPTURETRANSACTION = 'priorAuthCaptureTransaction',

	VOIDTRANSACTION = 'voidTransaction',

	GETDETAILSTRANSACTION = 'getDetailsTransaction',

	AUTHONLYCONTINUETRANSACTION = 'authOnlyContinueTransaction',

	AUTHCAPTURECONTINUETRANSACTION = 'authCaptureContinueTransaction'
}

export enum ValidationModeEnum {
	NONE = 'none',

	TESTMODE = 'testMode',

	LIVEMODE = 'liveMode',

	OLDLIVEMODE = 'oldLiveMode'
}

export enum WebCheckOutTypeEnum {
	PAN = 'PAN',

	TOKEN = 'TOKEN'
}


