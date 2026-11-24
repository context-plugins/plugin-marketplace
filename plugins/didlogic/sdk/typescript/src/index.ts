export { DidLogicClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { AccountBalance } from "./resources/account-balance.js";
export { ApiAccess } from "./resources/api-access.js";
export { Calls } from "./resources/calls.js";
export { Click2Call } from "./resources/click2-call.js";
export { HlrLookups } from "./resources/hlr-lookups.js";
export { Identities } from "./resources/identities.js";
export { InboundDestinations } from "./resources/inbound-destinations.js";
export { KycDocuments } from "./resources/kyc-documents.js";
export { NumbersInventory } from "./resources/numbers-inventory.js";
export { Purchases } from "./resources/purchases.js";
export { Reports } from "./resources/reports.js";
export { RiskChecks } from "./resources/risk-checks.js";
export { SipAccounts } from "./resources/sip-accounts.js";
export { SmsApi } from "./resources/sms-api.js";

export { AType, aTypeSchema } from "./models/atype.js";
export { allSchema, type All } from "./models/all.js";
export {
  apiV1AsrReportResponseSchema,
  type ApiV1AsrReportResponse,
} from "./models/api-v1-asr-report-response.js";
export {
  apiV1AsrReportResponse1Schema,
  type ApiV1AsrReportResponse1,
} from "./models/unions/api-v1-asr-report-response1.js";
export { apiV1Balance403ErrorSchema, type ApiV1Balance403Error } from "./models/api-v1-balance403-error.js";
export {
  apiV1Balance403Error1Schema,
  type ApiV1Balance403Error1,
} from "./models/api-v1-balance403-error1.js";
export { apiV1BalanceResponseSchema, type ApiV1BalanceResponse } from "./models/api-v1-balance-response.js";
export {
  apiV1CallPrice404ErrorSchema,
  type ApiV1CallPrice404Error,
} from "./models/api-v1-call-price404-error.js";
export {
  apiV1CallPrice404Error1Schema,
  type ApiV1CallPrice404Error1,
} from "./models/api-v1-call-price404-error1.js";
export {
  apiV1CallPrice422ErrorSchema,
  type ApiV1CallPrice422Error,
} from "./models/api-v1-call-price422-error.js";
export {
  apiV1CallPrice422Error1Schema,
  type ApiV1CallPrice422Error1,
} from "./models/api-v1-call-price422-error1.js";
export {
  apiV1CallPriceResponseSchema,
  type ApiV1CallPriceResponse,
} from "./models/api-v1-call-price-response.js";
export { apiV1Calls401ErrorSchema, type ApiV1Calls401Error } from "./models/api-v1-calls401-error.js";
export { apiV1Calls401Error1Schema, type ApiV1Calls401Error1 } from "./models/api-v1-calls401-error1.js";
export { apiV1Calls403ErrorSchema, type ApiV1Calls403Error } from "./models/api-v1-calls403-error.js";
export { apiV1Calls403Error1Schema, type ApiV1Calls403Error1 } from "./models/api-v1-calls403-error1.js";
export {
  apiV1CallsRecordingResponseSchema,
  type ApiV1CallsRecordingResponse,
} from "./models/api-v1-calls-recording-response.js";
export {
  apiV1CallsRecordingResponse1Schema,
  type ApiV1CallsRecordingResponse1,
} from "./models/unions/api-v1-calls-recording-response1.js";
export {
  apiV1CallsStatistics403ErrorSchema,
  type ApiV1CallsStatistics403Error,
} from "./models/api-v1-calls-statistics403-error.js";
export {
  apiV1CallsStatistics403Error1Schema,
  type ApiV1CallsStatistics403Error1,
} from "./models/api-v1-calls-statistics403-error1.js";
export {
  apiV1CallsStatisticsResponseSchema,
  type ApiV1CallsStatisticsResponse,
} from "./models/api-v1-calls-statistics-response.js";
export {
  apiV1Capabilities401ErrorSchema,
  type ApiV1Capabilities401Error,
} from "./models/api-v1-capabilities401-error.js";
export {
  apiV1Capabilities401Error1Schema,
  type ApiV1Capabilities401Error1,
} from "./models/api-v1-capabilities401-error1.js";
export {
  apiV1CapabilitiesResponseSchema,
  type ApiV1CapabilitiesResponse,
} from "./models/api-v1-capabilities-response.js";
export {
  apiV1Click2Call401ErrorSchema,
  type ApiV1Click2Call401Error,
} from "./models/api-v1-click2-call401-error.js";
export {
  apiV1Click2Call401Error1Schema,
  type ApiV1Click2Call401Error1,
} from "./models/api-v1-click2-call401-error1.js";
export {
  apiV1Click2Call402ErrorSchema,
  type ApiV1Click2Call402Error,
} from "./models/api-v1-click2-call402-error.js";
export {
  apiV1Click2Call402Error1Schema,
  type ApiV1Click2Call402Error1,
} from "./models/api-v1-click2-call402-error1.js";
export {
  apiV1Click2Call403ErrorSchema,
  type ApiV1Click2Call403Error,
} from "./models/api-v1-click2-call403-error.js";
export {
  apiV1Click2Call403Error1Schema,
  type ApiV1Click2Call403Error1,
} from "./models/api-v1-click2-call403-error1.js";
export {
  apiV1Click2Call404ErrorSchema,
  type ApiV1Click2Call404Error,
} from "./models/api-v1-click2-call404-error.js";
export {
  apiV1Click2Call404Error1Schema,
  type ApiV1Click2Call404Error1,
} from "./models/api-v1-click2-call404-error1.js";
export {
  apiV1Click2Call409ErrorSchema,
  type ApiV1Click2Call409Error,
} from "./models/api-v1-click2-call409-error.js";
export {
  apiV1Click2Call409Error1Schema,
  type ApiV1Click2Call409Error1,
} from "./models/api-v1-click2-call409-error1.js";
export {
  apiV1Click2Call422ErrorSchema,
  type ApiV1Click2Call422Error,
} from "./models/api-v1-click2-call422-error.js";
export {
  apiV1Click2Call422Error1Schema,
  type ApiV1Click2Call422Error1,
} from "./models/api-v1-click2-call422-error1.js";
export {
  apiV1Click2CallRequestSchema,
  type ApiV1Click2CallRequest,
} from "./models/api-v1-click2-call-request.js";
export {
  apiV1Click2CallResponseSchema,
  type ApiV1Click2CallResponse,
} from "./models/api-v1-click2-call-response.js";
export {
  apiV1Click2CallResponse1Schema,
  type ApiV1Click2CallResponse1,
} from "./models/api-v1-click2-call-response1.js";
export {
  apiV1Purchases403ErrorSchema,
  type ApiV1Purchases403Error,
} from "./models/api-v1-purchases403-error.js";
export {
  apiV1Purchases403Error1Schema,
  type ApiV1Purchases403Error1,
} from "./models/api-v1-purchases403-error1.js";
export {
  apiV1PurchasesDestinations403ErrorSchema,
  type ApiV1PurchasesDestinations403Error,
} from "./models/api-v1-purchases-destinations403-error.js";
export {
  apiV1PurchasesDestinations403Error1Schema,
  type ApiV1PurchasesDestinations403Error1,
} from "./models/api-v1-purchases-destinations403-error1.js";
export {
  apiV1PurchasesDestinationsRequestSchema,
  type ApiV1PurchasesDestinationsRequest,
} from "./models/api-v1-purchases-destinations-request.js";
export {
  apiV1PurchasesDestinationsRequest1Schema,
  type ApiV1PurchasesDestinationsRequest1,
} from "./models/api-v1-purchases-destinations-request1.js";
export {
  apiV1PurchasesDestinationsResponseSchema,
  type ApiV1PurchasesDestinationsResponse,
} from "./models/api-v1-purchases-destinations-response.js";
export {
  apiV1PurchasesDestinationsResponse1Schema,
  type ApiV1PurchasesDestinationsResponse1,
} from "./models/api-v1-purchases-destinations-response1.js";
export {
  apiV1PurchasesDestinationsResponse2Schema,
  type ApiV1PurchasesDestinationsResponse2,
} from "./models/api-v1-purchases-destinations-response2.js";
export {
  apiV1PurchasesDestinationsResponse3Schema,
  type ApiV1PurchasesDestinationsResponse3,
} from "./models/api-v1-purchases-destinations-response3.js";
export {
  apiV1PurchasesDestinationsResponse31Schema,
  type ApiV1PurchasesDestinationsResponse31,
} from "./models/unions/api-v1-purchases-destinations-response31.js";
export {
  apiV1PurchasesResponseSchema,
  type ApiV1PurchasesResponse,
} from "./models/api-v1-purchases-response.js";
export {
  apiV1Sipaccounts403ErrorSchema,
  type ApiV1Sipaccounts403Error,
} from "./models/api-v1-sipaccounts403-error.js";
export {
  apiV1Sipaccounts403Error1Schema,
  type ApiV1Sipaccounts403Error1,
} from "./models/api-v1-sipaccounts403-error1.js";
export {
  apiV1SipaccountsAllowedIps403ErrorSchema,
  type ApiV1SipaccountsAllowedIps403Error,
} from "./models/api-v1-sipaccounts-allowed-ips403-error.js";
export {
  apiV1SipaccountsAllowedIps403Error1Schema,
  type ApiV1SipaccountsAllowedIps403Error1,
} from "./models/api-v1-sipaccounts-allowed-ips403-error1.js";
export {
  apiV1SipaccountsAllowedIpsRequestSchema,
  type ApiV1SipaccountsAllowedIpsRequest,
} from "./models/api-v1-sipaccounts-allowed-ips-request.js";
export {
  apiV1SipaccountsAllowedIpsResponseSchema,
  type ApiV1SipaccountsAllowedIpsResponse,
} from "./models/api-v1-sipaccounts-allowed-ips-response.js";
export {
  apiV1SipaccountsAllowedIpsResponse1Schema,
  type ApiV1SipaccountsAllowedIpsResponse1,
} from "./models/api-v1-sipaccounts-allowed-ips-response1.js";
export {
  apiV1SipaccountsRequestSchema,
  type ApiV1SipaccountsRequest,
} from "./models/api-v1-sipaccounts-request.js";
export {
  apiV1SipaccountsRequest1Schema,
  type ApiV1SipaccountsRequest1,
} from "./models/api-v1-sipaccounts-request1.js";
export {
  apiV1SipaccountsResponseSchema,
  type ApiV1SipaccountsResponse,
} from "./models/api-v1-sipaccounts-response.js";
export {
  apiV1SipaccountsResponse1Schema,
  type ApiV1SipaccountsResponse1,
} from "./models/api-v1-sipaccounts-response1.js";
export {
  apiV1SipaccountsResponse11Schema,
  type ApiV1SipaccountsResponse11,
} from "./models/unions/api-v1-sipaccounts-response11.js";
export {
  apiV1SipaccountsResponse2Schema,
  type ApiV1SipaccountsResponse2,
} from "./models/api-v1-sipaccounts-response2.js";
export {
  apiV1SipaccountsResponse4Schema,
  type ApiV1SipaccountsResponse4,
} from "./models/api-v1-sipaccounts-response4.js";
export {
  apiV1SipaccountsResponse5Schema,
  type ApiV1SipaccountsResponse5,
} from "./models/api-v1-sipaccounts-response5.js";
export { apiV1Sms403ErrorSchema, type ApiV1Sms403Error } from "./models/api-v1-sms403-error.js";
export { apiV1Sms403Error1Schema, type ApiV1Sms403Error1 } from "./models/api-v1-sms403-error1.js";
export { apiV1SmsRequestSchema, type ApiV1SmsRequest } from "./models/api-v1-sms-request.js";
export { apiV1SmsResponseSchema, type ApiV1SmsResponse } from "./models/api-v1-sms-response.js";
export { apiV1SmsResponse1Schema, type ApiV1SmsResponse1 } from "./models/api-v1-sms-response1.js";
export { apiV1SmsResponse2Schema, type ApiV1SmsResponse2 } from "./models/api-v1-sms-response2.js";
export { apiV1SmsResponse21Schema, type ApiV1SmsResponse21 } from "./models/unions/api-v1-sms-response21.js";
export { apiV1SmsResponse3Schema, type ApiV1SmsResponse3 } from "./models/api-v1-sms-response3.js";
export {
  apiV1Transactions403ErrorSchema,
  type ApiV1Transactions403Error,
} from "./models/api-v1-transactions403-error.js";
export {
  apiV1Transactions403Error1Schema,
  type ApiV1Transactions403Error1,
} from "./models/api-v1-transactions403-error1.js";
export {
  apiV2Documents401ErrorSchema,
  type ApiV2Documents401Error,
} from "./models/api-v2-documents401-error.js";
export {
  apiV2Documents401Error1Schema,
  type ApiV2Documents401Error1,
} from "./models/api-v2-documents401-error1.js";
export {
  apiV2Documents404ErrorSchema,
  type ApiV2Documents404Error,
} from "./models/api-v2-documents404-error.js";
export {
  apiV2Documents404Error1Schema,
  type ApiV2Documents404Error1,
} from "./models/api-v2-documents404-error1.js";
export {
  apiV2DocumentsCountries401ErrorSchema,
  type ApiV2DocumentsCountries401Error,
} from "./models/api-v2-documents-countries401-error.js";
export {
  apiV2DocumentsCountries401Error1Schema,
  type ApiV2DocumentsCountries401Error1,
} from "./models/api-v2-documents-countries401-error1.js";
export {
  apiV2DocumentsCountriesResponseSchema,
  type ApiV2DocumentsCountriesResponse,
} from "./models/api-v2-documents-countries-response.js";
export {
  apiV2DocumentsFiles401ErrorSchema,
  type ApiV2DocumentsFiles401Error,
} from "./models/api-v2-documents-files401-error.js";
export {
  apiV2DocumentsFiles401Error1Schema,
  type ApiV2DocumentsFiles401Error1,
} from "./models/api-v2-documents-files401-error1.js";
export {
  apiV2DocumentsRequestSchema,
  type ApiV2DocumentsRequest,
} from "./models/api-v2-documents-request.js";
export {
  apiV2DocumentsResponseSchema,
  type ApiV2DocumentsResponse,
} from "./models/api-v2-documents-response.js";
export {
  apiV2DocumentsResponse1Schema,
  type ApiV2DocumentsResponse1,
} from "./models/api-v2-documents-response1.js";
export {
  apiV2DocumentsResponse2Schema,
  type ApiV2DocumentsResponse2,
} from "./models/api-v2-documents-response2.js";
export {
  apiV2DocumentsResponse3Schema,
  type ApiV2DocumentsResponse3,
} from "./models/api-v2-documents-response3.js";
export { apiV2Hlr401ErrorSchema, type ApiV2Hlr401Error } from "./models/api-v2-hlr401-error.js";
export { apiV2Hlr401Error1Schema, type ApiV2Hlr401Error1 } from "./models/api-v2-hlr401-error1.js";
export { apiV2Hlr403ErrorSchema, type ApiV2Hlr403Error } from "./models/api-v2-hlr403-error.js";
export { apiV2Hlr403Error1Schema, type ApiV2Hlr403Error1 } from "./models/api-v2-hlr403-error1.js";
export { apiV2Hlr422ErrorSchema, type ApiV2Hlr422Error } from "./models/api-v2-hlr422-error.js";
export { apiV2Hlr422Error1Schema, type ApiV2Hlr422Error1 } from "./models/api-v2-hlr422-error1.js";
export {
  apiV2HlrHistory401ErrorSchema,
  type ApiV2HlrHistory401Error,
} from "./models/api-v2-hlr-history401-error.js";
export {
  apiV2HlrHistory401Error1Schema,
  type ApiV2HlrHistory401Error1,
} from "./models/api-v2-hlr-history401-error1.js";
export {
  apiV2HlrHistory403ErrorSchema,
  type ApiV2HlrHistory403Error,
} from "./models/api-v2-hlr-history403-error.js";
export {
  apiV2HlrHistory403Error1Schema,
  type ApiV2HlrHistory403Error1,
} from "./models/api-v2-hlr-history403-error1.js";
export {
  apiV2HlrHistoryResponseSchema,
  type ApiV2HlrHistoryResponse,
} from "./models/api-v2-hlr-history-response.js";
export { apiV2HlrRequestSchema, type ApiV2HlrRequest } from "./models/api-v2-hlr-request.js";
export { apiV2HlrResponseSchema, type ApiV2HlrResponse } from "./models/api-v2-hlr-response.js";
export {
  apiV2Identities401ErrorSchema,
  type ApiV2Identities401Error,
} from "./models/api-v2-identities401-error.js";
export {
  apiV2Identities401Error1Schema,
  type ApiV2Identities401Error1,
} from "./models/api-v2-identities401-error1.js";
export {
  apiV2Identities404ErrorSchema,
  type ApiV2Identities404Error,
} from "./models/api-v2-identities404-error.js";
export {
  apiV2Identities404Error1Schema,
  type ApiV2Identities404Error1,
} from "./models/api-v2-identities404-error1.js";
export {
  apiV2Identities422ErrorSchema,
  type ApiV2Identities422Error,
} from "./models/api-v2-identities422-error.js";
export {
  apiV2Identities422Error1Schema,
  type ApiV2Identities422Error1,
} from "./models/api-v2-identities422-error1.js";
export {
  apiV2IdentitiesRequestSchema,
  type ApiV2IdentitiesRequest,
} from "./models/api-v2-identities-request.js";
export {
  apiV2IdentitiesResponseSchema,
  type ApiV2IdentitiesResponse,
} from "./models/api-v2-identities-response.js";
export {
  apiV2IdentitiesResponse1Schema,
  type ApiV2IdentitiesResponse1,
} from "./models/api-v2-identities-response1.js";
export {
  apiV2IdentitiesResponse2Schema,
  type ApiV2IdentitiesResponse2,
} from "./models/api-v2-identities-response2.js";
export { apiV2Numbers401ErrorSchema, type ApiV2Numbers401Error } from "./models/api-v2-numbers401-error.js";
export {
  apiV2Numbers401Error1Schema,
  type ApiV2Numbers401Error1,
} from "./models/api-v2-numbers401-error1.js";
export {
  apiV2NumbersCountries401ErrorSchema,
  type ApiV2NumbersCountries401Error,
} from "./models/api-v2-numbers-countries401-error.js";
export {
  apiV2NumbersCountries401Error1Schema,
  type ApiV2NumbersCountries401Error1,
} from "./models/api-v2-numbers-countries401-error1.js";
export {
  apiV2NumbersCountries403ErrorSchema,
  type ApiV2NumbersCountries403Error,
} from "./models/api-v2-numbers-countries403-error.js";
export {
  apiV2NumbersCountries403Error1Schema,
  type ApiV2NumbersCountries403Error1,
} from "./models/api-v2-numbers-countries403-error1.js";
export {
  apiV2NumbersCountriesCities401ErrorSchema,
  type ApiV2NumbersCountriesCities401Error,
} from "./models/api-v2-numbers-countries-cities401-error.js";
export {
  apiV2NumbersCountriesCities401Error1Schema,
  type ApiV2NumbersCountriesCities401Error1,
} from "./models/api-v2-numbers-countries-cities401-error1.js";
export {
  apiV2NumbersCountriesCities403ErrorSchema,
  type ApiV2NumbersCountriesCities403Error,
} from "./models/api-v2-numbers-countries-cities403-error.js";
export {
  apiV2NumbersCountriesCities403Error1Schema,
  type ApiV2NumbersCountriesCities403Error1,
} from "./models/api-v2-numbers-countries-cities403-error1.js";
export {
  apiV2NumbersCountriesCities404ErrorSchema,
  type ApiV2NumbersCountriesCities404Error,
} from "./models/api-v2-numbers-countries-cities404-error.js";
export {
  apiV2NumbersCountriesCities404Error1Schema,
  type ApiV2NumbersCountriesCities404Error1,
} from "./models/api-v2-numbers-countries-cities404-error1.js";
export {
  apiV2NumbersCountriesCitiesDids401ErrorSchema,
  type ApiV2NumbersCountriesCitiesDids401Error,
} from "./models/api-v2-numbers-countries-cities-dids401-error.js";
export {
  apiV2NumbersCountriesCitiesDids401Error1Schema,
  type ApiV2NumbersCountriesCitiesDids401Error1,
} from "./models/api-v2-numbers-countries-cities-dids401-error1.js";
export {
  apiV2NumbersCountriesCitiesDids403ErrorSchema,
  type ApiV2NumbersCountriesCitiesDids403Error,
} from "./models/api-v2-numbers-countries-cities-dids403-error.js";
export {
  apiV2NumbersCountriesCitiesDids403Error1Schema,
  type ApiV2NumbersCountriesCitiesDids403Error1,
} from "./models/api-v2-numbers-countries-cities-dids403-error1.js";
export {
  apiV2NumbersCountriesCitiesDids404ErrorSchema,
  type ApiV2NumbersCountriesCitiesDids404Error,
} from "./models/api-v2-numbers-countries-cities-dids404-error.js";
export {
  apiV2NumbersCountriesCitiesDids404Error1Schema,
  type ApiV2NumbersCountriesCitiesDids404Error1,
} from "./models/api-v2-numbers-countries-cities-dids404-error1.js";
export {
  apiV2NumbersCountriesCitiesDidsResponseSchema,
  type ApiV2NumbersCountriesCitiesDidsResponse,
} from "./models/api-v2-numbers-countries-cities-dids-response.js";
export {
  apiV2NumbersCountriesCitiesResponseSchema,
  type ApiV2NumbersCountriesCitiesResponse,
} from "./models/api-v2-numbers-countries-cities-response.js";
export {
  apiV2NumbersCountriesLocations401ErrorSchema,
  type ApiV2NumbersCountriesLocations401Error,
} from "./models/api-v2-numbers-countries-locations401-error.js";
export {
  apiV2NumbersCountriesLocations401Error1Schema,
  type ApiV2NumbersCountriesLocations401Error1,
} from "./models/api-v2-numbers-countries-locations401-error1.js";
export {
  apiV2NumbersCountriesLocations403ErrorSchema,
  type ApiV2NumbersCountriesLocations403Error,
} from "./models/api-v2-numbers-countries-locations403-error.js";
export {
  apiV2NumbersCountriesLocations403Error1Schema,
  type ApiV2NumbersCountriesLocations403Error1,
} from "./models/api-v2-numbers-countries-locations403-error1.js";
export {
  apiV2NumbersCountriesLocations404ErrorSchema,
  type ApiV2NumbersCountriesLocations404Error,
} from "./models/api-v2-numbers-countries-locations404-error.js";
export {
  apiV2NumbersCountriesLocations404Error1Schema,
  type ApiV2NumbersCountriesLocations404Error1,
} from "./models/api-v2-numbers-countries-locations404-error1.js";
export {
  apiV2NumbersCountriesLocationsResponseSchema,
  type ApiV2NumbersCountriesLocationsResponse,
} from "./models/api-v2-numbers-countries-locations-response.js";
export {
  apiV2NumbersCountriesRegions401ErrorSchema,
  type ApiV2NumbersCountriesRegions401Error,
} from "./models/api-v2-numbers-countries-regions401-error.js";
export {
  apiV2NumbersCountriesRegions401Error1Schema,
  type ApiV2NumbersCountriesRegions401Error1,
} from "./models/api-v2-numbers-countries-regions401-error1.js";
export {
  apiV2NumbersCountriesRegions403ErrorSchema,
  type ApiV2NumbersCountriesRegions403Error,
} from "./models/api-v2-numbers-countries-regions403-error.js";
export {
  apiV2NumbersCountriesRegions403Error1Schema,
  type ApiV2NumbersCountriesRegions403Error1,
} from "./models/api-v2-numbers-countries-regions403-error1.js";
export {
  apiV2NumbersCountriesRegions404ErrorSchema,
  type ApiV2NumbersCountriesRegions404Error,
} from "./models/api-v2-numbers-countries-regions404-error.js";
export {
  apiV2NumbersCountriesRegions404Error1Schema,
  type ApiV2NumbersCountriesRegions404Error1,
} from "./models/api-v2-numbers-countries-regions404-error1.js";
export {
  apiV2NumbersCountriesRegionsResponseSchema,
  type ApiV2NumbersCountriesRegionsResponse,
} from "./models/api-v2-numbers-countries-regions-response.js";
export {
  apiV2NumbersCountriesResponseSchema,
  type ApiV2NumbersCountriesResponse,
} from "./models/api-v2-numbers-countries-response.js";
export {
  apiV2NumbersPurchase400ErrorSchema,
  type ApiV2NumbersPurchase400Error,
} from "./models/api-v2-numbers-purchase400-error.js";
export {
  apiV2NumbersPurchase400Error1Schema,
  type ApiV2NumbersPurchase400Error1,
} from "./models/api-v2-numbers-purchase400-error1.js";
export {
  apiV2NumbersPurchase401ErrorSchema,
  type ApiV2NumbersPurchase401Error,
} from "./models/api-v2-numbers-purchase401-error.js";
export {
  apiV2NumbersPurchase401Error1Schema,
  type ApiV2NumbersPurchase401Error1,
} from "./models/api-v2-numbers-purchase401-error1.js";
export {
  apiV2NumbersPurchase403ErrorSchema,
  type ApiV2NumbersPurchase403Error,
} from "./models/api-v2-numbers-purchase403-error.js";
export {
  apiV2NumbersPurchase403Error1Schema,
  type ApiV2NumbersPurchase403Error1,
} from "./models/api-v2-numbers-purchase403-error1.js";
export {
  apiV2NumbersPurchaseRequestSchema,
  type ApiV2NumbersPurchaseRequest,
} from "./models/api-v2-numbers-purchase-request.js";
export {
  apiV2NumbersPurchaseRequest1Schema,
  type ApiV2NumbersPurchaseRequest1,
} from "./models/api-v2-numbers-purchase-request1.js";
export {
  apiV2NumbersPurchaseResponseSchema,
  type ApiV2NumbersPurchaseResponse,
} from "./models/api-v2-numbers-purchase-response.js";
export {
  apiV2NumbersPurchaseResponse1Schema,
  type ApiV2NumbersPurchaseResponse1,
} from "./models/api-v2-numbers-purchase-response1.js";
export {
  apiV2NumbersPurchaseResponse11Schema,
  type ApiV2NumbersPurchaseResponse11,
} from "./models/unions/api-v2-numbers-purchase-response11.js";
export {
  apiV2NumbersPurchaseResponse2Schema,
  type ApiV2NumbersPurchaseResponse2,
} from "./models/api-v2-numbers-purchase-response2.js";
export {
  apiV2NumbersPurchaseResponse3Schema,
  type ApiV2NumbersPurchaseResponse3,
} from "./models/api-v2-numbers-purchase-response3.js";
export { apiV2NumbersResponseSchema, type ApiV2NumbersResponse } from "./models/api-v2-numbers-response.js";
export {
  apiV2NumbersRiskChecks401ErrorSchema,
  type ApiV2NumbersRiskChecks401Error,
} from "./models/api-v2-numbers-risk-checks401-error.js";
export {
  apiV2NumbersRiskChecks401Error1Schema,
  type ApiV2NumbersRiskChecks401Error1,
} from "./models/api-v2-numbers-risk-checks401-error1.js";
export {
  apiV2NumbersRiskChecks403ErrorSchema,
  type ApiV2NumbersRiskChecks403Error,
} from "./models/api-v2-numbers-risk-checks403-error.js";
export {
  apiV2NumbersRiskChecks403Error1Schema,
  type ApiV2NumbersRiskChecks403Error1,
} from "./models/api-v2-numbers-risk-checks403-error1.js";
export {
  apiV2NumbersRiskChecksLogs401ErrorSchema,
  type ApiV2NumbersRiskChecksLogs401Error,
} from "./models/api-v2-numbers-risk-checks-logs401-error.js";
export {
  apiV2NumbersRiskChecksLogs401Error1Schema,
  type ApiV2NumbersRiskChecksLogs401Error1,
} from "./models/api-v2-numbers-risk-checks-logs401-error1.js";
export {
  apiV2NumbersRiskChecksLogs403ErrorSchema,
  type ApiV2NumbersRiskChecksLogs403Error,
} from "./models/api-v2-numbers-risk-checks-logs403-error.js";
export {
  apiV2NumbersRiskChecksLogs403Error1Schema,
  type ApiV2NumbersRiskChecksLogs403Error1,
} from "./models/api-v2-numbers-risk-checks-logs403-error1.js";
export {
  apiV2NumbersRiskChecksLogsResponseSchema,
  type ApiV2NumbersRiskChecksLogsResponse,
} from "./models/api-v2-numbers-risk-checks-logs-response.js";
export {
  apiV2NumbersRiskChecksRequestSchema,
  type ApiV2NumbersRiskChecksRequest,
} from "./models/api-v2-numbers-risk-checks-request.js";
export {
  apiV2NumbersRiskChecksResponseSchema,
  type ApiV2NumbersRiskChecksResponse,
} from "./models/api-v2-numbers-risk-checks-response.js";
export {
  apiV2NumbersRiskChecksResponse1Schema,
  type ApiV2NumbersRiskChecksResponse1,
} from "./models/api-v2-numbers-risk-checks-response1.js";
export {
  apiV2NumbersRiskChecksResponse2Schema,
  type ApiV2NumbersRiskChecksResponse2,
} from "./models/api-v2-numbers-risk-checks-response2.js";
export {
  apiV2NumbersRiskChecksResponse21Schema,
  type ApiV2NumbersRiskChecksResponse21,
} from "./models/unions/api-v2-numbers-risk-checks-response21.js";
export {
  apiV2NumbersSearch401ErrorSchema,
  type ApiV2NumbersSearch401Error,
} from "./models/api-v2-numbers-search401-error.js";
export {
  apiV2NumbersSearch401Error1Schema,
  type ApiV2NumbersSearch401Error1,
} from "./models/api-v2-numbers-search401-error1.js";
export {
  apiV2NumbersSearch403ErrorSchema,
  type ApiV2NumbersSearch403Error,
} from "./models/api-v2-numbers-search403-error.js";
export {
  apiV2NumbersSearch403Error1Schema,
  type ApiV2NumbersSearch403Error1,
} from "./models/api-v2-numbers-search403-error1.js";
export {
  apiV2NumbersSearchResponseSchema,
  type ApiV2NumbersSearchResponse,
} from "./models/api-v2-numbers-search-response.js";
export { ApprovementStatus1, approvementStatus1Schema } from "./models/approvement-status1.js";
export { baseCdrSchema, type BaseCdr } from "./models/base-cdr.js";
export { callSchema, type Call } from "./models/unions/call.js";
export { capabilitySchema, type Capability } from "./models/capability.js";
export { cdrListResponseSchema, type CdrListResponse } from "./models/cdr-list-response.js";
export { citySchema, type City } from "./models/city.js";
export { countrySchema, type Country } from "./models/country.js";
export {
  countryDidlogicComNumbersInventoryApiSchema,
  type CountryDidlogicComNumbersInventoryApi,
} from "./models/country-didlogic-com-numbers-inventory-api.js";
export { dataSchema, type Data } from "./models/data.js";
export { data1Schema, type Data1 } from "./models/data1.js";
export { destinationSchema, type Destination } from "./models/destination.js";
export { destination1Schema, type Destination1 } from "./models/destination1.js";
export { destination2Schema, type Destination2 } from "./models/destination2.js";
export { detailSchema, type Detail } from "./models/detail.js";
export {
  detailDidlogicComClick2CallApiSchema,
  type DetailDidlogicComClick2CallApi,
} from "./models/detail-didlogic-com-click2-call-api.js";
export { DialingType, dialingTypeSchema } from "./models/dialing-type.js";
export { DialingType1, dialingType1Schema } from "./models/dialing-type1.js";
export { didDestinationSchema, type DidDestination } from "./models/did-destination.js";
export { didDestination1Schema, type DidDestination1 } from "./models/did-destination1.js";
export { didsSchema, type Dids } from "./models/dids.js";
export { dids1Schema, type Dids1 } from "./models/dids1.js";
export { dids2Schema, type Dids2 } from "./models/dids2.js";
export { dids3Schema, type Dids3 } from "./models/dids3.js";
export { dids4Schema, type Dids4 } from "./models/dids4.js";
export { dids5Schema, type Dids5 } from "./models/dids5.js";
export { dlrSchema, type Dlr } from "./models/dlr.js";
export { DocType, docTypeSchema } from "./models/doc-type.js";
export { documentSchema, type Document } from "./models/document.js";
export { document1Schema, type Document1 } from "./models/document1.js";
export { document2Schema, type Document2 } from "./models/document2.js";
export { document3Schema, type Document3 } from "./models/document3.js";
export { document4Schema, type Document4 } from "./models/document4.js";
export { errorSchema, type Error } from "./models/error.js";
export { error1Schema, type Error1 } from "./models/error1.js";
export { error2Schema, type Error2 } from "./models/error2.js";
export { error4Schema, type Error4 } from "./models/error4.js";
export { ErrorCode, errorCodeSchema } from "./models/error-code.js";
export { errorErrorSchema, type ErrorError } from "./models/error-error.js";
export { errorsSchema, type Errors } from "./models/errors.js";
export { errors1Schema, type Errors1 } from "./models/errors1.js";
export { fileSchema, type File } from "./models/file.js";
export { file1Schema, type File1 } from "./models/file1.js";
export { HangupCause, hangupCauseSchema } from "./models/hangup-cause.js";
export { hlrRequestSchema, type HlrRequest } from "./models/hlr-request.js";
export { identitySchema, type Identity } from "./models/identity.js";
export { identity1Schema, type Identity1 } from "./models/identity1.js";
export { identity2Schema, type Identity2 } from "./models/identity2.js";
export {
  identityDidlogicComKycDocumentsApiSchema,
  type IdentityDidlogicComKycDocumentsApi,
} from "./models/identity-didlogic-com-kyc-documents-api.js";
export { incomingCdrSchema, type IncomingCdr } from "./models/incoming-cdr.js";
export { incrementSchema, type Increment } from "./models/increment.js";
export { locationSchema, type Location } from "./models/location.js";
export { logSchema, type Log } from "./models/log.js";
export {
  logDidlogicComRiskChecksApiSchema,
  type LogDidlogicComRiskChecksApi,
} from "./models/log-didlogic-com-risk-checks-api.js";
export { Method, methodSchema } from "./models/method.js";
export { missed1Schema, type Missed1 } from "./models/missed1.js";
export { paginationSchema, type Pagination } from "./models/pagination.js";
export {
  paginationDidlogicComHlrLookupsApiSchema,
  type PaginationDidlogicComHlrLookupsApi,
} from "./models/pagination-didlogic-com-hlr-lookups-api.js";
export {
  paginationDidlogicComNumbersInventoryApiSchema,
  type PaginationDidlogicComNumbersInventoryApi,
} from "./models/pagination-didlogic-com-numbers-inventory-api.js";
export {
  paginationDidlogicComPurchasesApiSchema,
  type PaginationDidlogicComPurchasesApi,
} from "./models/pagination-didlogic-com-purchases-api.js";
export { PersistenceStatus, persistenceStatusSchema } from "./models/persistence-status.js";
export { placedSchema, type Placed } from "./models/placed.js";
export { purchaseSchema, type Purchase } from "./models/purchase.js";
export { purchase1Schema, type Purchase1 } from "./models/purchase1.js";
export { purchase2Schema, type Purchase2 } from "./models/purchase2.js";
export { purchase4Schema, type Purchase4 } from "./models/purchase4.js";
export {
  purchaseDidlogicComPurchasesApiSchema,
  type PurchaseDidlogicComPurchasesApi,
} from "./models/purchase-didlogic-com-purchases-api.js";
export { Reason, reasonSchema } from "./models/reason.js";
export { receivedSchema, type Received } from "./models/received.js";
export { regionSchema, type Region } from "./models/region.js";
export { requiredDocumentSchema, type RequiredDocument } from "./models/required-document.js";
export { riskCheckRequestSchema, type RiskCheckRequest } from "./models/risk-check-request.js";
export { RiskLevel1, riskLevel1Schema } from "./models/risk-level1.js";
export { Service, serviceSchema } from "./models/service.js";
export { sipCdrSchema, type SipCdr } from "./models/sip-cdr.js";
export { sipaccountSchema, type Sipaccount } from "./models/sipaccount.js";
export { sipaccount1Schema, type Sipaccount1 } from "./models/sipaccount1.js";
export { sipaccount2Schema, type Sipaccount2 } from "./models/sipaccount2.js";
export { sipaccount3Schema, type Sipaccount3 } from "./models/sipaccount3.js";
export { sipaccount4Schema, type Sipaccount4 } from "./models/sipaccount4.js";
export { sipaccount5Schema, type Sipaccount5 } from "./models/sipaccount5.js";
export { smSchema, type Sm } from "./models/sm.js";
export { sm1Schema, type Sm1 } from "./models/sm1.js";
export { smsSchema, type Sms } from "./models/sms.js";
export { sms1Schema, type Sms1 } from "./models/sms1.js";
export { State, stateSchema } from "./models/state.js";
export { State1, state1Schema } from "./models/state1.js";
export { Status, statusSchema } from "./models/status.js";
export {
  Status1DidlogicComNumbersInventoryApi,
  status1DidlogicComNumbersInventoryApiSchema,
} from "./models/status1-didlogic-com-numbers-inventory-api.js";
export {
  Status1DidlogicComRiskChecksApi,
  status1DidlogicComRiskChecksApiSchema,
} from "./models/status1-didlogic-com-risk-checks-api.js";
export { Status2, status2Schema } from "./models/status2.js";
export { Status4, status4Schema } from "./models/status4.js";
export {
  StatusDidlogicComNumbersInventoryApi,
  statusDidlogicComNumbersInventoryApiSchema,
} from "./models/status-didlogic-com-numbers-inventory-api.js";
export {
  StatusDidlogicComSmsApi,
  statusDidlogicComSmsApiSchema,
} from "./models/status-didlogic-com-sms-api.js";
export { taskSchema, type Task } from "./models/task.js";
export { Transport, transportSchema } from "./models/transport.js";
export { Transport1, transport1Schema } from "./models/transport1.js";
export { Transport2, transport2Schema } from "./models/transport2.js";
export { Type, typeSchema } from "./models/type.js";
export { userSchema, type User } from "./models/user.js";
export { warningSchema, type Warning } from "./models/warning.js";
export { webCdrSchema, type WebCdr } from "./models/web-cdr.js";
export { ApprovementStatus, approvementStatusSchema } from "./models/approvement-status.js";
export { DocumentDocType, documentDocTypeSchema } from "./models/document-doc-type.js";
export { HangupCause1, hangupCause1Schema } from "./models/hangup-cause1.js";
export { Missed, missedSchema } from "./models/missed.js";
export { Order, orderSchema } from "./models/order.js";
export { RiskLevel, riskLevelSchema } from "./models/risk-level.js";
export { Role, roleSchema } from "./models/role.js";
export { Status1, status1Schema } from "./models/status1.js";
export {
  StatusDidlogicComRiskChecksApi,
  statusDidlogicComRiskChecksApiSchema,
} from "./models/status-didlogic-com-risk-checks-api.js";
export { Type1, type1Schema } from "./models/type1.js";

export {
  CoreError as DidLogicError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  PaginationError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { Pageable, PageableApiResult } from "./core/pagination/pageable.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { HookOptions, BeforeRequestHook, AfterResponseHook, HookContext } from "./core/hooks.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded, ValidationResult, JsonValue } from "./core/validation/schema.js";
