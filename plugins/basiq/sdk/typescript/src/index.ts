export { BasiqClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { AccountsApi } from "./resources/accounts-api.js";
export { Analytics } from "./resources/analytics.js";
export { Authentication } from "./resources/authentication.js";
export { AuthLinks } from "./resources/auth-links.js";
export { Connections } from "./resources/connections.js";
export { Connectors } from "./resources/connectors.js";
export { Consents } from "./resources/consents.js";
export { EnrichApi } from "./resources/enrich-api.js";
export { Events } from "./resources/events.js";
export { Expenses } from "./resources/expenses.js";
export { Identities } from "./resources/identities.js";
export { IncomeApi } from "./resources/income-api.js";
export { Insights } from "./resources/insights.js";
export { Jobs } from "./resources/jobs.js";
export { Payees } from "./resources/payees.js";
export { Reports } from "./resources/reports.js";
export { Statements } from "./resources/statements.js";
export { Transactions } from "./resources/transactions.js";
export { Users } from "./resources/users.js";
export { Webhooks } from "./resources/webhooks.js";

export { accountSchema, type Account } from "./models/account.js";
export { accountBalanceDataSchema, type AccountBalanceData } from "./models/account-balance-data.js";
export { accountInsightDataSchema, type AccountInsightData } from "./models/account-insight-data.js";
export {
  accountInsightDataItemSchema,
  type AccountInsightDataItem,
} from "./models/account-insight-data-item.js";
export {
  accountInsightResponseSchema,
  type AccountInsightResponse,
} from "./models/account-insight-response.js";
export { accountNumberMatchSchema, type AccountNumberMatch } from "./models/account-number-match.js";
export { AccountOwnership, accountOwnershipSchema } from "./models/account-ownership.js";
export {
  accountResponseResourceSchema,
  type AccountResponseResource,
} from "./models/account-response-resource.js";
export {
  accountResponseResource1Schema,
  type AccountResponseResource1,
} from "./models/account-response-resource1.js";
export { accountTypeMatchSchema, type AccountTypeMatch } from "./models/account-type-match.js";
export {
  accountVerificationDataSchema,
  type AccountVerificationData,
} from "./models/account-verification-data.js";
export {
  accountReportingReportsApiSchema,
  type AccountReportingReportsApi,
} from "./models/account-reporting-reports-api.js";
export { accountsSchema, type Accounts } from "./models/accounts.js";
export { activeSchema, type Active } from "./models/active.js";
export { addressSchema, type Address } from "./models/address.js";
export { AddressType, addressTypeSchema } from "./models/address-type.js";
export { amountSchema, type Amount } from "./models/amount.js";
export { amount1Schema, type Amount1 } from "./models/amount1.js";
export { analysisSchema, type Analysis } from "./models/analysis.js";
export { analysis1Schema, type Analysis1 } from "./models/analysis1.js";
export { analyticsResponseSchema, type AnalyticsResponse } from "./models/analytics-response.js";
export { anzsicSchema, type Anzsic } from "./models/anzsic.js";
export { anzsic1Schema, type Anzsic1 } from "./models/anzsic1.js";
export {
  anzsicConnectTransactionsApiSchema,
  type AnzsicConnectTransactionsApi,
} from "./models/anzsic-connect-transactions-api.js";
export {
  anzsicReportingReportsApiSchema,
  type AnzsicReportingReportsApi,
} from "./models/anzsic-reporting-reports-api.js";
export {
  applicabilityConditionsSchema,
  type ApplicabilityConditions,
} from "./models/applicability-conditions.js";
export { authorizationSchema, type Authorization } from "./models/authorization.js";
export { averageSchema, type Average } from "./models/average.js";
export { averageDurationMsSchema, type AverageDurationMs } from "./models/average-duration-ms.js";
export {
  badRequestErrorSchemaSchema,
  type BadRequestErrorSchema,
} from "./models/bad-request-error-schema.js";
export {
  badRequestErrorSchemaErrorSchema,
  type BadRequestErrorSchemaError,
} from "./models/bad-request-error-schema-error.js";
export { balanceSchema, type Balance } from "./models/balance.js";
export { balance1Schema, type Balance1 } from "./models/balance1.js";
export { balance2Schema, type Balance2 } from "./models/balance2.js";
export { balance3Schema, type Balance3 } from "./models/balance3.js";
export {
  balanceInsightDataItemSchema,
  type BalanceInsightDataItem,
} from "./models/balance-insight-data-item.js";
export { balanceInsightRequestSchema, type BalanceInsightRequest } from "./models/balance-insight-request.js";
export {
  balanceInsightResponseSchema,
  type BalanceInsightResponse,
} from "./models/balance-insight-response.js";
export {
  balanceVerificationDataSchema,
  type BalanceVerificationData,
} from "./models/balance-verification-data.js";
export { bankDetailsSchema, type BankDetails } from "./models/bank-details.js";
export { bankFeesSchema, type BankFees } from "./models/bank-fees.js";
export { beneficiaryDetailsSchema, type BeneficiaryDetails } from "./models/beneficiary-details.js";
export { billerPayeeDetailsSchema, type BillerPayeeDetails } from "./models/biller-payee-details.js";
export { bpaySchema, type Bpay } from "./models/bpay.js";
export { businessAddressSchema, type BusinessAddress } from "./models/business-address.js";
export { BusinessIdNoType, businessIdNoTypeSchema } from "./models/business-id-no-type.js";
export { cashWithdrawalsSchema, type CashWithdrawals } from "./models/cash-withdrawals.js";
export { categorySchema, type Category } from "./models/category.js";
export { category1Schema, type Category1 } from "./models/category1.js";
export {
  categoryAffordabilityExpensesApiSchema,
  type CategoryAffordabilityExpensesApi,
} from "./models/category-affordability-expenses-api.js";
export {
  categoryConnectTransactionsApiSchema,
  type CategoryConnectTransactionsApi,
} from "./models/category-connect-transactions-api.js";
export {
  categoryReportingReportsApiSchema,
  type CategoryReportingReportsApi,
} from "./models/category-reporting-reports-api.js";
export { changeHistorySchema, type ChangeHistory } from "./models/change-history.js";
export {
  changeHistoryAffordabilityIncomeApiSchema,
  type ChangeHistoryAffordabilityIncomeApi,
} from "./models/change-history-affordability-income-api.js";
export { classSchema, type Class } from "./models/class.js";
export { class1Schema, type Class1 } from "./models/class1.js";
export {
  class1ConnectTransactionsApiSchema,
  type Class1ConnectTransactionsApi,
} from "./models/class1-connect-transactions-api.js";
export { class1EnrichApiSchema, type Class1EnrichApi } from "./models/class1-enrich-api.js";
export {
  Class1ReportingReportsApi,
  class1ReportingReportsApiSchema,
} from "./models/class1-reporting-reports-api.js";
export { class2Schema, type Class2 } from "./models/class2.js";
export {
  ClassConnectTransactionsApi,
  classConnectTransactionsApiSchema,
} from "./models/class-connect-transactions-api.js";
export { classConnectionsApiSchema, type ClassConnectionsApi } from "./models/class-connections-api.js";
export { classEnrichApiSchema, type ClassEnrichApi } from "./models/class-enrich-api.js";
export {
  classReportingReportsApiSchema,
  type ClassReportingReportsApi,
} from "./models/class-reporting-reports-api.js";
export { Code, codeSchema } from "./models/code.js";
export { Code1, code1Schema } from "./models/code1.js";
export { Code1ConnectJobsApi, code1ConnectJobsApiSchema } from "./models/code1-connect-jobs-api.js";
export {
  Code1PlatformAuthLinksApi,
  code1PlatformAuthLinksApiSchema,
} from "./models/code1-platform-auth-links-api.js";
export { Code1PlatformPayeesApi, code1PlatformPayeesApiSchema } from "./models/code1-platform-payees-api.js";
export { Code2, code2Schema } from "./models/code2.js";
export { Code2ConnectUsersApi, code2ConnectUsersApiSchema } from "./models/code2-connect-users-api.js";
export { Code4, code4Schema } from "./models/code4.js";
export { Code5, code5Schema } from "./models/code5.js";
export { CodeConnectJobsApi, codeConnectJobsApiSchema } from "./models/code-connect-jobs-api.js";
export { CodePlatformPayeesApi, codePlatformPayeesApiSchema } from "./models/code-platform-payees-api.js";
export { colorsSchema, type Colors } from "./models/colors.js";
export { connectedSchema, type Connected } from "./models/connected.js";
export {
  connectionAnalyticsResponseSchema,
  type ConnectionAnalyticsResponse,
} from "./models/connection-analytics-response.js";
export {
  connectionGetResponseResourceSchema,
  type ConnectionGetResponseResource,
} from "./models/connection-get-response-resource.js";
export { connectionInstitutionSchema, type ConnectionInstitution } from "./models/connection-institution.js";
export {
  connectionResponseResourceSchema,
  type ConnectionResponseResource,
} from "./models/connection-response-resource.js";
export {
  connectionsGetResponseResourceSchema,
  type ConnectionsGetResponseResource,
} from "./models/connections-get-response-resource.js";
export {
  connectionsRefreshResourceSchema,
  type ConnectionsRefreshResource,
} from "./models/connections-refresh-resource.js";
export { connectors400ErrorSchema, type Connectors400Error } from "./models/connectors400-error.js";
export { connectors400Error1Schema, type Connectors400Error1 } from "./models/connectors400-error1.js";
export { connectors401ErrorSchema, type Connectors401Error } from "./models/connectors401-error.js";
export { connectors401Error1Schema, type Connectors401Error1 } from "./models/connectors401-error1.js";
export { connectors404ErrorSchema, type Connectors404Error } from "./models/connectors404-error.js";
export { connectors404Error1Schema, type Connectors404Error1 } from "./models/connectors404-error1.js";
export { connectors500ErrorSchema, type Connectors500Error } from "./models/connectors500-error.js";
export { connectors500Error1Schema, type Connectors500Error1 } from "./models/connectors500-error1.js";
export { connectorsResponseSchema, type ConnectorsResponse } from "./models/connectors-response.js";
export { connectorsResponse1Schema, type ConnectorsResponse1 } from "./models/connectors-response1.js";
export { createdSchema, type Created } from "./models/created.js";
export { creditCardSchema, type CreditCard } from "./models/credit-card.js";
export { Currency, currencySchema } from "./models/currency.js";
export { currentSchema, type Current } from "./models/current.js";
export { current1Schema, type Current1 } from "./models/current1.js";
export { current2Schema, type Current2 } from "./models/current2.js";
export { dataSchema, type Data } from "./models/data.js";
export { data1Schema, type Data1 } from "./models/data1.js";
export { data10Schema, type Data10 } from "./models/data10.js";
export { data11Schema, type Data11 } from "./models/data11.js";
export { data14Schema, type Data14 } from "./models/data14.js";
export {
  data1PlatformEventsApiSchema,
  type Data1PlatformEventsApi,
} from "./models/data1-platform-events-api.js";
export {
  data1ReportingReportsApiSchema,
  type Data1ReportingReportsApi,
} from "./models/data1-reporting-reports-api.js";
export { data2Schema, type Data2 } from "./models/data2.js";
export { data2EnrichApiSchema, type Data2EnrichApi } from "./models/data2-enrich-api.js";
export {
  data2ReportingReportsApiSchema,
  type Data2ReportingReportsApi,
} from "./models/data2-reporting-reports-api.js";
export { data3Schema, type Data3 } from "./models/data3.js";
export { data3EnrichApiSchema, type Data3EnrichApi } from "./models/data3-enrich-api.js";
export { data4Schema, type Data4 } from "./models/data4.js";
export { data8Schema, type Data8 } from "./models/data8.js";
export { data9Schema, type Data9 } from "./models/data9.js";
export { dataEnrichApiSchema, type DataEnrichApi } from "./models/data-enrich-api.js";
export { dataInsightsApiSchema, type DataInsightsApi } from "./models/unions/data-insights-api.js";
export {
  dataPlatformEventsApiSchema,
  type DataPlatformEventsApi,
} from "./models/data-platform-events-api.js";
export {
  dataReportingReportsApiSchema,
  type DataReportingReportsApi,
} from "./models/data-reporting-reports-api.js";
export { datumSchema, type Datum } from "./models/datum.js";
export { datum1Schema, type Datum1 } from "./models/datum1.js";
export { datum10Schema, type Datum10 } from "./models/datum10.js";
export { datum11Schema, type Datum11 } from "./models/datum11.js";
export { datum12Schema, type Datum12 } from "./models/datum12.js";
export {
  datum1ConnectAuthenticationApiSchema,
  type Datum1ConnectAuthenticationApi,
} from "./models/datum1-connect-authentication-api.js";
export { datum1ConnectJobsApiSchema, type Datum1ConnectJobsApi } from "./models/datum1-connect-jobs-api.js";
export { datum1ConnectionsApiSchema, type Datum1ConnectionsApi } from "./models/datum1-connections-api.js";
export {
  datum1CoreAnalyticsApiSchema,
  type Datum1CoreAnalyticsApi,
} from "./models/datum1-core-analytics-api.js";
export { datum1InsightsApiSchema, type Datum1InsightsApi } from "./models/unions/datum1-insights-api.js";
export {
  datum1PlatformAuthLinksApiSchema,
  type Datum1PlatformAuthLinksApi,
} from "./models/datum1-platform-auth-links-api.js";
export {
  datum1PlatformEventsApiSchema,
  type Datum1PlatformEventsApi,
} from "./models/datum1-platform-events-api.js";
export {
  datum1PlatformPayeesApiSchema,
  type Datum1PlatformPayeesApi,
} from "./models/datum1-platform-payees-api.js";
export {
  datum1ReportingReportsApiSchema,
  type Datum1ReportingReportsApi,
} from "./models/datum1-reporting-reports-api.js";
export { datum2Schema, type Datum2 } from "./models/datum2.js";
export {
  datum2ConnectUsersApiSchema,
  type Datum2ConnectUsersApi,
} from "./models/datum2-connect-users-api.js";
export { datum2ConnectionsApiSchema, type Datum2ConnectionsApi } from "./models/datum2-connections-api.js";
export {
  datum2PlatformAuthLinksApiSchema,
  type Datum2PlatformAuthLinksApi,
} from "./models/datum2-platform-auth-links-api.js";
export {
  datum2PlatformConnectorsApiSchema,
  type Datum2PlatformConnectorsApi,
} from "./models/datum2-platform-connectors-api.js";
export {
  datum2PlatformPayeesApiSchema,
  type Datum2PlatformPayeesApi,
} from "./models/datum2-platform-payees-api.js";
export { datum3Schema, type Datum3 } from "./models/datum3.js";
export { datum31Schema, type Datum31 } from "./models/datum31.js";
export {
  datum3IdentityIdentitiesApiSchema,
  type Datum3IdentityIdentitiesApi,
} from "./models/datum3-identity-identities-api.js";
export {
  datum3PlatformPayeesApiSchema,
  type Datum3PlatformPayeesApi,
} from "./models/datum3-platform-payees-api.js";
export { datum5Schema, type Datum5 } from "./models/datum5.js";
export {
  datum5ReportingReportsApiSchema,
  type Datum5ReportingReportsApi,
} from "./models/datum5-reporting-reports-api.js";
export { datum6Schema, type Datum6 } from "./models/datum6.js";
export { datum7Schema, type Datum7 } from "./models/datum7.js";
export { datumConnectJobsApiSchema, type DatumConnectJobsApi } from "./models/datum-connect-jobs-api.js";
export {
  datumConnectTransactionsApiSchema,
  type DatumConnectTransactionsApi,
} from "./models/datum-connect-transactions-api.js";
export { datumConnectionsApiSchema, type DatumConnectionsApi } from "./models/datum-connections-api.js";
export {
  datumCoreAnalyticsApiSchema,
  type DatumCoreAnalyticsApi,
} from "./models/datum-core-analytics-api.js";
export { datumEnrichApiSchema, type DatumEnrichApi } from "./models/datum-enrich-api.js";
export {
  datumIdentityIdentitiesApiSchema,
  type DatumIdentityIdentitiesApi,
} from "./models/datum-identity-identities-api.js";
export { datumInsightsApiSchema, type DatumInsightsApi } from "./models/unions/datum-insights-api.js";
export {
  datumPlatformConnectorsApiSchema,
  type DatumPlatformConnectorsApi,
} from "./models/datum-platform-connectors-api.js";
export {
  datumPlatformEventsApiSchema,
  type DatumPlatformEventsApi,
} from "./models/datum-platform-events-api.js";
export {
  datumPlatformPayeesApiSchema,
  type DatumPlatformPayeesApi,
} from "./models/datum-platform-payees-api.js";
export { datumWebhooksApiSchema, type DatumWebhooksApi } from "./models/datum-webhooks-api.js";
export { depositRateSchema, type DepositRate } from "./models/deposit-rate.js";
export { DepositRateType, depositRateTypeSchema } from "./models/deposit-rate-type.js";
export {
  digitalWalletPayeeDetailsSchema,
  type DigitalWalletPayeeDetails,
} from "./models/digital-wallet-payee-details.js";
export { Direction, directionSchema } from "./models/direction.js";
export { discountSchema, type Discount } from "./models/discount.js";
export {
  DiscountEligibilityType,
  discountEligibilityTypeSchema,
} from "./models/discount-eligibility-type.js";
export { divisionSchema, type Division } from "./models/division.js";
export { division1Schema, type Division1 } from "./models/division1.js";
export {
  divisionReportingReportsApiSchema,
  type DivisionReportingReportsApi,
} from "./models/division-reporting-reports-api.js";
export { domesticPayeeDetailsSchema, type DomesticPayeeDetails } from "./models/domestic-payee-details.js";
export { eligibilitySchema, type Eligibility } from "./models/eligibility.js";
export { enrichSchema, type Enrich } from "./models/enrich.js";
export { enrich400ErrorSchema, type Enrich400Error } from "./models/enrich400-error.js";
export { enrich400Error1Schema, type Enrich400Error1 } from "./models/enrich400-error1.js";
export { enrich403ErrorSchema, type Enrich403Error } from "./models/enrich403-error.js";
export { enrich403Error1Schema, type Enrich403Error1 } from "./models/enrich403-error1.js";
export { enrich500ErrorSchema, type Enrich500Error } from "./models/enrich500-error.js";
export { enrich500Error1Schema, type Enrich500Error1 } from "./models/enrich500-error1.js";
export { enrichResponseSchema, type EnrichResponse } from "./models/enrich-response.js";
export {
  enrichConnectTransactionsApiSchema,
  type EnrichConnectTransactionsApi,
} from "./models/enrich-connect-transactions-api.js";
export { Entity, entitySchema } from "./models/entity.js";
export { errorSchema, type Error } from "./models/error.js";
export { errorDetailSchema, type ErrorDetail } from "./models/error-detail.js";
export { errorItemSchema, type ErrorItem } from "./models/error-item.js";
export { errorListSchema, type ErrorList } from "./models/error-list.js";
export { errorListErrorSchema, type ErrorListError } from "./models/error-list-error.js";
export { errorResponseSchema, type ErrorResponse } from "./models/error-response.js";
export { errorResponseErrorSchema, type ErrorResponseError } from "./models/error-response-error.js";
export { errorErrorSchema, type ErrorError } from "./models/error-error.js";
export { EventType, eventTypeSchema } from "./models/event-type.js";
export { events400ErrorSchema, type Events400Error } from "./models/events400-error.js";
export { events400Error1Schema, type Events400Error1 } from "./models/events400-error1.js";
export { events400Error2Schema, type Events400Error2 } from "./models/events400-error2.js";
export { events400Error21Schema, type Events400Error21 } from "./models/events400-error21.js";
export { events401ErrorSchema, type Events401Error } from "./models/events401-error.js";
export { events401Error1Schema, type Events401Error1 } from "./models/events401-error1.js";
export { events401Error2Schema, type Events401Error2 } from "./models/events401-error2.js";
export { events401Error21Schema, type Events401Error21 } from "./models/events401-error21.js";
export { events403ErrorSchema, type Events403Error } from "./models/events403-error.js";
export { events403Error1Schema, type Events403Error1 } from "./models/events403-error1.js";
export { events403Error2Schema, type Events403Error2 } from "./models/events403-error2.js";
export { events403Error21Schema, type Events403Error21 } from "./models/events403-error21.js";
export { events404ErrorSchema, type Events404Error } from "./models/events404-error.js";
export { events404Error1Schema, type Events404Error1 } from "./models/events404-error1.js";
export { events404Error2Schema, type Events404Error2 } from "./models/events404-error2.js";
export { events404Error21Schema, type Events404Error21 } from "./models/events404-error21.js";
export { events429ErrorSchema, type Events429Error } from "./models/events429-error.js";
export { events429Error1Schema, type Events429Error1 } from "./models/events429-error1.js";
export { events500ErrorSchema, type Events500Error } from "./models/events500-error.js";
export { events500Error1Schema, type Events500Error1 } from "./models/events500-error1.js";
export { events500Error2Schema, type Events500Error2 } from "./models/events500-error2.js";
export { events500Error21Schema, type Events500Error21 } from "./models/events500-error21.js";
export { events503ErrorSchema, type Events503Error } from "./models/events503-error.js";
export { events503Error1Schema, type Events503Error1 } from "./models/events503-error1.js";
export { events503Error2Schema, type Events503Error2 } from "./models/events503-error2.js";
export { events503Error21Schema, type Events503Error21 } from "./models/events503-error21.js";
export { eventsResponseSchema, type EventsResponse } from "./models/events-response.js";
export { eventsTypes400ErrorSchema, type EventsTypes400Error } from "./models/events-types400-error.js";
export { eventsTypes400Error1Schema, type EventsTypes400Error1 } from "./models/events-types400-error1.js";
export { eventsTypes401ErrorSchema, type EventsTypes401Error } from "./models/events-types401-error.js";
export { eventsTypes401Error1Schema, type EventsTypes401Error1 } from "./models/events-types401-error1.js";
export { eventsTypes403ErrorSchema, type EventsTypes403Error } from "./models/events-types403-error.js";
export { eventsTypes403Error1Schema, type EventsTypes403Error1 } from "./models/events-types403-error1.js";
export { eventsTypes404ErrorSchema, type EventsTypes404Error } from "./models/events-types404-error.js";
export { eventsTypes404Error1Schema, type EventsTypes404Error1 } from "./models/events-types404-error1.js";
export { eventsTypes429ErrorSchema, type EventsTypes429Error } from "./models/events-types429-error.js";
export { eventsTypes429Error1Schema, type EventsTypes429Error1 } from "./models/events-types429-error1.js";
export { eventsTypes500ErrorSchema, type EventsTypes500Error } from "./models/events-types500-error.js";
export { eventsTypes500Error1Schema, type EventsTypes500Error1 } from "./models/events-types500-error1.js";
export { eventsTypes503ErrorSchema, type EventsTypes503Error } from "./models/events-types503-error.js";
export { eventsTypes503Error1Schema, type EventsTypes503Error1 } from "./models/events-types503-error1.js";
export { eventsTypesResponseSchema, type EventsTypesResponse } from "./models/events-types-response.js";
export { eventsTypesResponse1Schema, type EventsTypesResponse1 } from "./models/events-types-response1.js";
export {
  eventsGetResponseResourceSchema,
  type EventsGetResponseResource,
} from "./models/events-get-response-resource.js";
export { expenseClassSchema, type ExpenseClass } from "./models/expense-class.js";
export { expenseRatioDataSchema, type ExpenseRatioData } from "./models/expense-ratio-data.js";
export {
  expenseRatioInsightDataItemSchema,
  type ExpenseRatioInsightDataItem,
} from "./models/expense-ratio-insight-data-item.js";
export {
  expenseRatioInsightRequestSchema,
  type ExpenseRatioInsightRequest,
} from "./models/expense-ratio-insight-request.js";
export {
  expenseRatioInsightResponseSchema,
  type ExpenseRatioInsightResponse,
} from "./models/expense-ratio-insight-response.js";
export { expensesResponseSchema, type ExpensesResponse } from "./models/expenses-response.js";
export { externalTransfersSchema, type ExternalTransfers } from "./models/external-transfers.js";
export { featureSchema, type Feature } from "./models/feature.js";
export { FeatureType, featureTypeSchema } from "./models/feature-type.js";
export { feeSchema, type Fee } from "./models/fee.js";
export { FeeType, feeTypeSchema } from "./models/fee-type.js";
export { filterSchema, type Filter } from "./models/filter.js";
export { filter1Schema, type Filter1 } from "./models/filter1.js";
export { filter2Schema, type Filter2 } from "./models/filter2.js";
export { filter3Schema, type Filter3 } from "./models/filter3.js";
export { forbiddenAccessErrorSchema, type ForbiddenAccessError } from "./models/forbidden-access-error.js";
export { forbiddenAccessError1Schema, type ForbiddenAccessError1 } from "./models/forbidden-access-error1.js";
export { Frequency, frequencySchema } from "./models/frequency.js";
export { Frequency1, frequency1Schema } from "./models/frequency1.js";
export {
  frequencyReportingReportsApiSchema,
  type FrequencyReportingReportsApi,
} from "./models/frequency-reporting-reports-api.js";
export { geometrySchema, type Geometry } from "./models/geometry.js";
export { geometry1Schema, type Geometry1 } from "./models/geometry1.js";
export {
  geometryReportingReportsApiSchema,
  type GeometryReportingReportsApi,
} from "./models/geometry-reporting-reports-api.js";
export { getConnectionLinksSchema, type GetConnectionLinks } from "./models/get-connection-links.js";
export { getConnectionsLinksSchema, type GetConnectionsLinks } from "./models/get-connections-links.js";
export {
  getUserConnectionDataSchema,
  type GetUserConnectionData,
} from "./models/get-user-connection-data.js";
export { getUserLinksSchema, type GetUserLinks } from "./models/get-user-links.js";
export { groupSchema, type Group } from "./models/group.js";
export { group1Schema, type Group1 } from "./models/group1.js";
export {
  group1ReportingReportsApiSchema,
  type Group1ReportingReportsApi,
} from "./models/group1-reporting-reports-api.js";
export {
  groupConnectTransactionsApiSchema,
  type GroupConnectTransactionsApi,
} from "./models/group-connect-transactions-api.js";
export {
  groupReportingReportsApiSchema,
  type GroupReportingReportsApi,
} from "./models/group-reporting-reports-api.js";
export { Id, idSchema } from "./models/id.js";
export {
  identitiesGetResponseResourceSchema,
  type IdentitiesGetResponseResource,
} from "./models/identities-get-response-resource.js";
export { identityInsightDataSchema, type IdentityInsightData } from "./models/identity-insight-data.js";
export {
  identityInsightDataItemSchema,
  type IdentityInsightDataItem,
} from "./models/identity-insight-data-item.js";
export {
  identityInsightRequestSchema,
  type IdentityInsightRequest,
} from "./models/identity-insight-request.js";
export {
  identityInsightResponseSchema,
  type IdentityInsightResponse,
} from "./models/identity-insight-response.js";
export { identityMatchSchema, type IdentityMatch } from "./models/identity-match.js";
export {
  identityVerificationDataSchema,
  type IdentityVerificationData,
} from "./models/identity-verification-data.js";
export { incomeSchema, type Income } from "./models/income.js";
export { income1Schema, type Income1 } from "./models/income1.js";
export {
  incomeInsightDataItemSchema,
  type IncomeInsightDataItem,
} from "./models/income-insight-data-item.js";
export { incomeInsightRequestSchema, type IncomeInsightRequest } from "./models/income-insight-request.js";
export { incomeInsightResponseSchema, type IncomeInsightResponse } from "./models/income-insight-response.js";
export { incomeResponseSchema, type IncomeResponse } from "./models/income-response.js";
export {
  incomeVerificationDataSchema,
  type IncomeVerificationData,
} from "./models/income-verification-data.js";
export { informationSchema, type Information } from "./models/information.js";
export { initialSchema, type Initial } from "./models/initial.js";
export { initial1Schema, type Initial1 } from "./models/initial1.js";
export { inputSchema, type Input } from "./models/input.js";
export { input1Schema, type Input1 } from "./models/input1.js";
export { input2Schema, type Input2 } from "./models/input2.js";
export { input3Schema, type Input3 } from "./models/input3.js";
export { input4Schema, type Input4 } from "./models/unions/input4.js";
export { insightSchema, type Insight } from "./models/insight.js";
export { insightListResponseSchema, type InsightListResponse } from "./models/insight-list-response.js";
export { InsightType, insightTypeSchema } from "./models/insight-type.js";
export { InsightType1, insightType1Schema } from "./models/insight-type1.js";
export { insightTypeItemSchema, type InsightTypeItem } from "./models/insight-type-item.js";
export { insightTypesListSchema, type InsightTypesList } from "./models/insight-types-list.js";
export { institutionSchema, type Institution } from "./models/institution.js";
export {
  institutionConnectJobsApiSchema,
  type InstitutionConnectJobsApi,
} from "./models/institution-connect-jobs-api.js";
export {
  institutionPlatformEventsApiSchema,
  type InstitutionPlatformEventsApi,
} from "./models/institution-platform-events-api.js";
export { InterestPaymentDue, interestPaymentDueSchema } from "./models/interest-payment-due.js";
export {
  internationalPayeeDetailsSchema,
  type InternationalPayeeDetails,
} from "./models/international-payee-details.js";
export { irregularSchema, type Irregular } from "./models/irregular.js";
export { irregularitySchema, type Irregularity } from "./models/irregularity.js";
export { jobs400ErrorSchema, type Jobs400Error } from "./models/jobs400-error.js";
export { jobs400Error1Schema, type Jobs400Error1 } from "./models/jobs400-error1.js";
export { jobs401ErrorSchema, type Jobs401Error } from "./models/jobs401-error.js";
export { jobs401Error1Schema, type Jobs401Error1 } from "./models/jobs401-error1.js";
export { jobs403ErrorSchema, type Jobs403Error } from "./models/jobs403-error.js";
export { jobs403Error1Schema, type Jobs403Error1 } from "./models/jobs403-error1.js";
export { jobs404ErrorSchema, type Jobs404Error } from "./models/jobs404-error.js";
export { jobs404Error1Schema, type Jobs404Error1 } from "./models/jobs404-error1.js";
export { jobs500ErrorSchema, type Jobs500Error } from "./models/jobs500-error.js";
export { jobs500Error1Schema, type Jobs500Error1 } from "./models/jobs500-error1.js";
export { jobsMfa400ErrorSchema, type JobsMfa400Error } from "./models/jobs-mfa400-error.js";
export { jobsMfa400Error1Schema, type JobsMfa400Error1 } from "./models/jobs-mfa400-error1.js";
export { jobsMfa401ErrorSchema, type JobsMfa401Error } from "./models/jobs-mfa401-error.js";
export { jobsMfa401Error1Schema, type JobsMfa401Error1 } from "./models/jobs-mfa401-error1.js";
export { jobsMfa403ErrorSchema, type JobsMfa403Error } from "./models/jobs-mfa403-error.js";
export { jobsMfa403Error1Schema, type JobsMfa403Error1 } from "./models/jobs-mfa403-error1.js";
export { jobsMfa404ErrorSchema, type JobsMfa404Error } from "./models/jobs-mfa404-error.js";
export { jobsMfa404Error1Schema, type JobsMfa404Error1 } from "./models/jobs-mfa404-error1.js";
export { jobsMfa500ErrorSchema, type JobsMfa500Error } from "./models/jobs-mfa500-error.js";
export { jobsMfa500Error1Schema, type JobsMfa500Error1 } from "./models/jobs-mfa500-error1.js";
export { jobsMfaRequestSchema, type JobsMfaRequest } from "./models/jobs-mfa-request.js";
export { jobsResponseSchema, type JobsResponse } from "./models/jobs-response.js";
export { jobsResponse1Schema, type JobsResponse1 } from "./models/jobs-response1.js";
export { jobsResponse2Schema, type JobsResponse2 } from "./models/jobs-response2.js";
export { jobsResponse3Schema, type JobsResponse3 } from "./models/unions/jobs-response3.js";
export { jobsDataSchema, type JobsData } from "./models/jobs-data.js";
export { jobsLinksSchema, type JobsLinks } from "./models/jobs-links.js";
export { jobsResultSchema, type JobsResult } from "./models/jobs-result.js";
export { jobsStepSchema, type JobsStep } from "./models/jobs-step.js";
export { lendingRateSchema, type LendingRate } from "./models/lending-rate.js";
export { LendingRateType, lendingRateTypeSchema } from "./models/lending-rate-type.js";
export { linksSchema, type Links } from "./models/links.js";
export { links1Schema, type Links1 } from "./models/links1.js";
export {
  links1ConnectConsentsApiSchema,
  type Links1ConnectConsentsApi,
} from "./models/links1-connect-consents-api.js";
export {
  links1ConnectTransactionsApiSchema,
  type Links1ConnectTransactionsApi,
} from "./models/links1-connect-transactions-api.js";
export { links1EnrichApiSchema, type Links1EnrichApi } from "./models/links1-enrich-api.js";
export { links1InsightsApiSchema, type Links1InsightsApi } from "./models/links1-insights-api.js";
export {
  links1PlatformEventsApiSchema,
  type Links1PlatformEventsApi,
} from "./models/links1-platform-events-api.js";
export { links2Schema, type Links2 } from "./models/links2.js";
export { links2ConnectJobsApiSchema, type Links2ConnectJobsApi } from "./models/links2-connect-jobs-api.js";
export {
  links2PlatformPayeesApiSchema,
  type Links2PlatformPayeesApi,
} from "./models/links2-platform-payees-api.js";
export {
  links2ReportingReportsApiSchema,
  type Links2ReportingReportsApi,
} from "./models/links2-reporting-reports-api.js";
export { links3Schema, type Links3 } from "./models/links3.js";
export {
  links3ReportingReportsApiSchema,
  type Links3ReportingReportsApi,
} from "./models/links3-reporting-reports-api.js";
export { links4Schema, type Links4 } from "./models/links4.js";
export { links4InsightsApiSchema, type Links4InsightsApi } from "./models/links4-insights-api.js";
export {
  links4ReportingReportsApiSchema,
  type Links4ReportingReportsApi,
} from "./models/links4-reporting-reports-api.js";
export { links5Schema, type Links5 } from "./models/links5.js";
export { links6Schema, type Links6 } from "./models/links6.js";
export {
  linksAffordabilityExpensesApiSchema,
  type LinksAffordabilityExpensesApi,
} from "./models/links-affordability-expenses-api.js";
export {
  linksAffordabilityIncomeApiSchema,
  type LinksAffordabilityIncomeApi,
} from "./models/links-affordability-income-api.js";
export {
  linksConnectConsentsApiSchema,
  type LinksConnectConsentsApi,
} from "./models/links-connect-consents-api.js";
export { linksConnectJobsApiSchema, type LinksConnectJobsApi } from "./models/links-connect-jobs-api.js";
export {
  linksConnectTransactionsApiSchema,
  type LinksConnectTransactionsApi,
} from "./models/links-connect-transactions-api.js";
export { linksConnectionsApiSchema, type LinksConnectionsApi } from "./models/links-connections-api.js";
export { linksEnrichApiSchema, type LinksEnrichApi } from "./models/links-enrich-api.js";
export {
  linksIdentityIdentitiesApiSchema,
  type LinksIdentityIdentitiesApi,
} from "./models/links-identity-identities-api.js";
export { linksInsightsApiSchema, type LinksInsightsApi } from "./models/links-insights-api.js";
export {
  linksPlatformConnectorsApiSchema,
  type LinksPlatformConnectorsApi,
} from "./models/links-platform-connectors-api.js";
export {
  linksPlatformEventsApiSchema,
  type LinksPlatformEventsApi,
} from "./models/links-platform-events-api.js";
export {
  linksPlatformPayeesApiSchema,
  type LinksPlatformPayeesApi,
} from "./models/links-platform-payees-api.js";
export { linksWebhooksApiSchema, type LinksWebhooksApi } from "./models/links-webhooks-api.js";
export { loanSchema, type Loan } from "./models/loan.js";
export { loanInterestsSchema, type LoanInterests } from "./models/loan-interests.js";
export { LoanPurpose, loanPurposeSchema } from "./models/loan-purpose.js";
export { loanRepaymentsSchema, type LoanRepayments } from "./models/loan-repayments.js";
export { locationSchema, type Location } from "./models/location.js";
export { location1Schema, type Location1 } from "./models/location1.js";
export {
  locationReportingReportsApiSchema,
  type LocationReportingReportsApi,
} from "./models/location-reporting-reports-api.js";
export { logoSchema, type Logo } from "./models/logo.js";
export { MatchType, matchTypeSchema } from "./models/match-type.js";
export { MatchType1, matchType1Schema } from "./models/match-type1.js";
export {
  MatchTypeConnectTransactionsApi,
  matchTypeConnectTransactionsApiSchema,
} from "./models/match-type-connect-transactions-api.js";
export { MaturityInstructions, maturityInstructionsSchema } from "./models/maturity-instructions.js";
export { mccSchema, type Mcc } from "./models/mcc.js";
export { merchantSchema, type Merchant } from "./models/merchant.js";
export { merchant1Schema, type Merchant1 } from "./models/merchant1.js";
export { merchantDetailsSchema, type MerchantDetails } from "./models/merchant-details.js";
export {
  merchantNotFoundErrorSchema,
  type MerchantNotFoundError,
} from "./models/merchant-not-found-error.js";
export {
  merchantNotFoundErrorErrorSchema,
  type MerchantNotFoundErrorError,
} from "./models/merchant-not-found-error-error.js";
export {
  merchantReportingReportsApiSchema,
  type MerchantReportingReportsApi,
} from "./models/merchant-reporting-reports-api.js";
export { merchantsResponseSchema, type MerchantsResponse } from "./models/merchants-response.js";
export { metaSchema, type Meta } from "./models/meta.js";
export { metaCoreAnalyticsApiSchema, type MetaCoreAnalyticsApi } from "./models/meta-core-analytics-api.js";
export {
  metaPlatformConnectorsApiSchema,
  type MetaPlatformConnectorsApi,
} from "./models/meta-platform-connectors-api.js";
export { Method, methodSchema } from "./models/method.js";
export { methodDistributionSchema, type MethodDistribution } from "./models/method-distribution.js";
export { methodDistribution1Schema, type MethodDistribution1 } from "./models/method-distribution1.js";
export { metricSchema, type Metric } from "./models/metric.js";
export { nextSchema, type Next } from "./models/next.js";
export { nonDeletedSchema, type NonDeleted } from "./models/non-deleted.js";
export { notFoundErrorSchemaSchema, type NotFoundErrorSchema } from "./models/not-found-error-schema.js";
export {
  notFoundErrorSchemaErrorSchema,
  type NotFoundErrorSchemaError,
} from "./models/not-found-error-schema-error.js";
export {
  notificationsMessagesTestRequestSchema,
  type NotificationsMessagesTestRequest,
} from "./models/notifications-messages-test-request.js";
export {
  notificationsWebhooksMessagesResponseSchema,
  type NotificationsWebhooksMessagesResponse,
} from "./models/notifications-webhooks-messages-response.js";
export {
  notificationsWebhooksMessagesResponse1Schema,
  type NotificationsWebhooksMessagesResponse1,
} from "./models/notifications-webhooks-messages-response1.js";
export {
  notificationsWebhooksRequestSchema,
  type NotificationsWebhooksRequest,
} from "./models/notifications-webhooks-request.js";
export {
  notificationsWebhooksResponseSchema,
  type NotificationsWebhooksResponse,
} from "./models/notifications-webhooks-response.js";
export {
  notificationsWebhooksResponse1Schema,
  type NotificationsWebhooksResponse1,
} from "./models/notifications-webhooks-response1.js";
export { organisationSchema, type Organisation } from "./models/organisation.js";
export { otherCreditSchema, type OtherCredit } from "./models/other-credit.js";
export { overallPercentageSchema, type OverallPercentage } from "./models/overall-percentage.js";
export { pafSchema, type Paf } from "./models/paf.js";
export {
  pafIdentityIdentitiesApiSchema,
  type PafIdentityIdentitiesApi,
} from "./models/paf-identity-identities-api.js";
export { payIdSchema, type PayId } from "./models/pay-id.js";
export { PayeeAccountUType, payeeAccountUTypeSchema } from "./models/payee-account-utype.js";
export { payeeDetailsResponseSchema, type PayeeDetailsResponse } from "./models/payee-details-response.js";
export { payeeSummarySchema, type PayeeSummary } from "./models/payee-summary.js";
export { PayeeType, payeeTypeSchema } from "./models/payee-type.js";
export { payeesListResponseSchema, type PayeesListResponse } from "./models/payees-list-response.js";
export { payloadSchema, type Payload } from "./models/payload.js";
export { paymentSchema, type Payment } from "./models/payment.js";
export { paymentDetailsSchema, type PaymentDetails } from "./models/payment-details.js";
export { permissionSchema, type Permission } from "./models/permission.js";
export { phoneNumberSchema, type PhoneNumber } from "./models/phone-number.js";
export { phoneNumber1Schema, type PhoneNumber1 } from "./models/phone-number1.js";
export {
  phoneNumberReportingReportsApiSchema,
  type PhoneNumberReportingReportsApi,
} from "./models/phone-number-reporting-reports-api.js";
export { physicalAddressSchema, type PhysicalAddress } from "./models/physical-address.js";
export { physicalAddressesSchema, type PhysicalAddresses } from "./models/physical-addresses.js";
export { postInsightsRequestSchema, type PostInsightsRequest } from "./models/post-insights-request.js";
export { postInsightsResponseSchema, type PostInsightsResponse } from "./models/post-insights-response.js";
export { previous3MonthsSchema, type Previous3Months } from "./models/previous3-months.js";
export { primarySchema, type Primary } from "./models/primary.js";
export { profileSchema, type Profile } from "./models/profile.js";
export { Provider, providerSchema } from "./models/provider.js";
export { purposeSchema, type Purpose } from "./models/purpose.js";
export { purseSchema, type Purse } from "./models/purse.js";
export { Range, rangeSchema } from "./models/range.js";
export {
  rangeReportingReportsApiSchema,
  type RangeReportingReportsApi,
} from "./models/range-reporting-reports-api.js";
export { RateApplicationMethod, rateApplicationMethodSchema } from "./models/rate-application-method.js";
export { regularSchema, type Regular } from "./models/regular.js";
export { RepaymentType, repaymentTypeSchema } from "./models/repayment-type.js";
export { RepaymentType1, repaymentType1Schema } from "./models/repayment-type1.js";
export { reports400ErrorSchema, type Reports400Error } from "./models/reports400-error.js";
export { reports400Error1Schema, type Reports400Error1 } from "./models/reports400-error1.js";
export { reports400Error2Schema, type Reports400Error2 } from "./models/reports400-error2.js";
export { reports400Error21Schema, type Reports400Error21 } from "./models/reports400-error21.js";
export { reports403ErrorSchema, type Reports403Error } from "./models/reports403-error.js";
export { reports403Error1Schema, type Reports403Error1 } from "./models/reports403-error1.js";
export { reports403Error2Schema, type Reports403Error2 } from "./models/reports403-error2.js";
export { reports403Error21Schema, type Reports403Error21 } from "./models/reports403-error21.js";
export { reports403Error3Schema, type Reports403Error3 } from "./models/reports403-error3.js";
export { reports403Error31Schema, type Reports403Error31 } from "./models/reports403-error31.js";
export { reports404ErrorSchema, type Reports404Error } from "./models/reports404-error.js";
export { reports404Error1Schema, type Reports404Error1 } from "./models/reports404-error1.js";
export { reports404Error2Schema, type Reports404Error2 } from "./models/reports404-error2.js";
export { reports404Error21Schema, type Reports404Error21 } from "./models/reports404-error21.js";
export { reports404Error3Schema, type Reports404Error3 } from "./models/reports404-error3.js";
export { reports404Error31Schema, type Reports404Error31 } from "./models/reports404-error31.js";
export { reports500ErrorSchema, type Reports500Error } from "./models/reports500-error.js";
export { reports500Error1Schema, type Reports500Error1 } from "./models/reports500-error1.js";
export { reports500Error2Schema, type Reports500Error2 } from "./models/reports500-error2.js";
export { reports500Error21Schema, type Reports500Error21 } from "./models/reports500-error21.js";
export { reports500Error3Schema, type Reports500Error3 } from "./models/reports500-error3.js";
export { reports500Error31Schema, type Reports500Error31 } from "./models/reports500-error31.js";
export { reportsRequestSchema, type ReportsRequest } from "./models/reports-request.js";
export { reportsResponseSchema, type ReportsResponse } from "./models/reports-response.js";
export { reportsResponse1Schema, type ReportsResponse1 } from "./models/reports-response1.js";
export { reportsResponse11Schema, type ReportsResponse11 } from "./models/reports-response11.js";
export { reportsResponse12Schema, type ReportsResponse12 } from "./models/unions/reports-response12.js";
export { reportsResponse2Schema, type ReportsResponse2 } from "./models/reports-response2.js";
export { reportsResponse3Schema, type ReportsResponse3 } from "./models/reports-response3.js";
export {
  reportsTransactions400ErrorSchema,
  type ReportsTransactions400Error,
} from "./models/reports-transactions400-error.js";
export {
  reportsTransactions400Error1Schema,
  type ReportsTransactions400Error1,
} from "./models/reports-transactions400-error1.js";
export {
  reportsTransactions403ErrorSchema,
  type ReportsTransactions403Error,
} from "./models/reports-transactions403-error.js";
export {
  reportsTransactions403Error1Schema,
  type ReportsTransactions403Error1,
} from "./models/reports-transactions403-error1.js";
export {
  reportsTransactions404ErrorSchema,
  type ReportsTransactions404Error,
} from "./models/reports-transactions404-error.js";
export {
  reportsTransactions404Error1Schema,
  type ReportsTransactions404Error1,
} from "./models/reports-transactions404-error1.js";
export {
  reportsTransactions500ErrorSchema,
  type ReportsTransactions500Error,
} from "./models/reports-transactions500-error.js";
export {
  reportsTransactions500Error1Schema,
  type ReportsTransactions500Error1,
} from "./models/reports-transactions500-error1.js";
export { reportsTypes400ErrorSchema, type ReportsTypes400Error } from "./models/reports-types400-error.js";
export { reportsTypes400Error1Schema, type ReportsTypes400Error1 } from "./models/reports-types400-error1.js";
export { reportsTypes403ErrorSchema, type ReportsTypes403Error } from "./models/reports-types403-error.js";
export { reportsTypes403Error1Schema, type ReportsTypes403Error1 } from "./models/reports-types403-error1.js";
export { reportsTypes404ErrorSchema, type ReportsTypes404Error } from "./models/reports-types404-error.js";
export { reportsTypes404Error1Schema, type ReportsTypes404Error1 } from "./models/reports-types404-error1.js";
export { reportsTypes500ErrorSchema, type ReportsTypes500Error } from "./models/reports-types500-error.js";
export { reportsTypes500Error1Schema, type ReportsTypes500Error1 } from "./models/reports-types500-error1.js";
export { reportsTypesResponseSchema, type ReportsTypesResponse } from "./models/reports-types-response.js";
export { resourceAccountLinkSchema, type ResourceAccountLink } from "./models/resource-account-link.js";
export { resourceLinkSchema, type ResourceLink } from "./models/resource-link.js";
export { resultSchema, type Result } from "./models/result.js";
export { result1Schema, type Result1 } from "./models/result1.js";
export { resultConnectJobsApiSchema, type ResultConnectJobsApi } from "./models/result-connect-jobs-api.js";
export {
  resultReportingReportsApiSchema,
  type ResultReportingReportsApi,
} from "./models/result-reporting-reports-api.js";
export { simpleSchema, type Simple } from "./models/simple.js";
export {
  singleMerchantResponseSchema,
  type SingleMerchantResponse,
} from "./models/single-merchant-response.js";
export { sourceSchema, type Source } from "./models/source.js";
export { source2Schema, type Source2 } from "./models/source2.js";
export {
  source2ReportingReportsApiSchema,
  type Source2ReportingReportsApi,
} from "./models/source2-reporting-reports-api.js";
export {
  sourceConnectAuthenticationApiSchema,
  type SourceConnectAuthenticationApi,
} from "./models/source-connect-authentication-api.js";
export {
  sourceCoreAnalyticsApiSchema,
  type SourceCoreAnalyticsApi,
} from "./models/source-core-analytics-api.js";
export { sourceInsightsApiSchema, type SourceInsightsApi } from "./models/source-insights-api.js";
export {
  sourcePlatformPayeesApiSchema,
  type SourcePlatformPayeesApi,
} from "./models/source-platform-payees-api.js";
export { statsSchema, type Stats } from "./models/stats.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export { Status2, status2Schema } from "./models/status2.js";
export { statusDistributionSchema, type StatusDistribution } from "./models/status-distribution.js";
export { StatusConnectJobsApi, statusConnectJobsApiSchema } from "./models/status-connect-jobs-api.js";
export {
  StatusConnectTransactionsApi,
  statusConnectTransactionsApiSchema,
} from "./models/status-connect-transactions-api.js";
export { StatusConnectionsApi, statusConnectionsApiSchema } from "./models/status-connections-api.js";
export {
  StatusReportingReportsApi,
  statusReportingReportsApiSchema,
} from "./models/status-reporting-reports-api.js";
export { StatusWebhooksApi, statusWebhooksApiSchema } from "./models/status-webhooks-api.js";
export { stepSchema, type Step } from "./models/step.js";
export { step1Schema, type Step1 } from "./models/step1.js";
export { step2Schema, type Step2 } from "./models/step2.js";
export { subCategorySchema, type SubCategory } from "./models/sub-category.js";
export {
  subClassConnectTransactionsApiSchema,
  type SubClassConnectTransactionsApi,
} from "./models/sub-class-connect-transactions-api.js";
export { subclassSchema, type Subclass } from "./models/subclass.js";
export { subclass1Schema, type Subclass1 } from "./models/subclass1.js";
export { subdivisionSchema, type Subdivision } from "./models/subdivision.js";
export { subdivision1Schema, type Subdivision1 } from "./models/subdivision1.js";
export {
  subdivisionReportingReportsApiSchema,
  type SubdivisionReportingReportsApi,
} from "./models/subdivision-reporting-reports-api.js";
export { subgroupSchema, type Subgroup } from "./models/subgroup.js";
export { summarySchema, type Summary } from "./models/summary.js";
export { summary1Schema, type Summary1 } from "./models/summary1.js";
export {
  summaryReportingReportsApiSchema,
  type SummaryReportingReportsApi,
} from "./models/summary-reporting-reports-api.js";
export { termDepositSchema, type TermDeposit } from "./models/term-deposit.js";
export { tierSchema, type Tier } from "./models/tier.js";
export {
  TierPlatformConnectorsApi,
  tierPlatformConnectorsApiSchema,
} from "./models/tier-platform-connectors-api.js";
export { Title, titleSchema } from "./models/title.js";
export {
  TitleReportingReportsApi,
  titleReportingReportsApiSchema,
} from "./models/title-reporting-reports-api.js";
export { token400ErrorSchema, type Token400Error } from "./models/token400-error.js";
export { token400Error1Schema, type Token400Error1 } from "./models/token400-error1.js";
export { token404ErrorSchema, type Token404Error } from "./models/token404-error.js";
export { token404Error1Schema, type Token404Error1 } from "./models/token404-error1.js";
export { token500ErrorSchema, type Token500Error } from "./models/token500-error.js";
export { token500Error1Schema, type Token500Error1 } from "./models/token500-error1.js";
export { tokenResponseSchema, type TokenResponse } from "./models/token-response.js";
export { transactionSchema, type Transaction } from "./models/transaction.js";
export { transactionIntervalSchema, type TransactionInterval } from "./models/transaction-interval.js";
export {
  transactionIntervalReportingReportsApiSchema,
  type TransactionIntervalReportingReportsApi,
} from "./models/transaction-interval-reporting-reports-api.js";
export {
  transactionsContainerObjectSchema,
  type TransactionsContainerObject,
} from "./models/transactions-container-object.js";
export {
  transactionsContainerObjectConnectTransactionsApiSchema,
  type TransactionsContainerObjectConnectTransactionsApi,
} from "./models/transactions-container-object-connect-transactions-api.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export { Type1PlatformPayeesApi, type1PlatformPayeesApiSchema } from "./models/type1-platform-payees-api.js";
export { TypeCoreAnalyticsApi, typeCoreAnalyticsApiSchema } from "./models/type-core-analytics-api.js";
export { TypeInsightsApi, typeInsightsApiSchema } from "./models/type-insights-api.js";
export {
  TypePlatformConnectorsApi,
  typePlatformConnectorsApiSchema,
} from "./models/type-platform-connectors-api.js";
export { TypePlatformPayeesApi, typePlatformPayeesApiSchema } from "./models/type-platform-payees-api.js";
export {
  unauthorizedErrorSchemaSchema,
  type UnauthorizedErrorSchema,
} from "./models/unauthorized-error-schema.js";
export {
  unauthorizedErrorSchemaErrorSchema,
  type UnauthorizedErrorSchemaError,
} from "./models/unauthorized-error-schema-error.js";
export { UnitOfMeasure, unitOfMeasureSchema } from "./models/unit-of-measure.js";
export {
  userConsentGetResponseSchema,
  type UserConsentGetResponse,
} from "./models/user-consent-get-response.js";
export { userGetAccountSchema, type UserGetAccount } from "./models/user-get-account.js";
export { userGetAccountDataSchema, type UserGetAccountData } from "./models/user-get-account-data.js";
export { userGetConnectionSchema, type UserGetConnection } from "./models/user-get-connection.js";
export { userGetResponseSchema, type UserGetResponse } from "./models/user-get-response.js";
export { userPostResponseSchema, type UserPostResponse } from "./models/user-post-response.js";
export { users400ErrorSchema, type Users400Error } from "./models/users400-error.js";
export { users400Error1Schema, type Users400Error1 } from "./models/users400-error1.js";
export { users401ErrorSchema, type Users401Error } from "./models/users401-error.js";
export { users401Error1Schema, type Users401Error1 } from "./models/users401-error1.js";
export { users403ErrorSchema, type Users403Error } from "./models/users403-error.js";
export { users403Error1Schema, type Users403Error1 } from "./models/users403-error1.js";
export { users404ErrorSchema, type Users404Error } from "./models/users404-error.js";
export { users404Error1Schema, type Users404Error1 } from "./models/users404-error1.js";
export { users500ErrorSchema, type Users500Error } from "./models/users500-error.js";
export { users500Error1Schema, type Users500Error1 } from "./models/users500-error1.js";
export { users503ErrorSchema, type Users503Error } from "./models/users503-error.js";
export { users503Error1Schema, type Users503Error1 } from "./models/users503-error1.js";
export { usersAccounts400ErrorSchema, type UsersAccounts400Error } from "./models/users-accounts400-error.js";
export {
  usersAccounts400Error1Schema,
  type UsersAccounts400Error1,
} from "./models/users-accounts400-error1.js";
export { usersAccounts403ErrorSchema, type UsersAccounts403Error } from "./models/users-accounts403-error.js";
export {
  usersAccounts403Error1Schema,
  type UsersAccounts403Error1,
} from "./models/users-accounts403-error1.js";
export { usersAccounts404ErrorSchema, type UsersAccounts404Error } from "./models/users-accounts404-error.js";
export {
  usersAccounts404Error1Schema,
  type UsersAccounts404Error1,
} from "./models/users-accounts404-error1.js";
export { usersAccounts500ErrorSchema, type UsersAccounts500Error } from "./models/users-accounts500-error.js";
export {
  usersAccounts500Error1Schema,
  type UsersAccounts500Error1,
} from "./models/users-accounts500-error1.js";
export { usersAccountsResponseSchema, type UsersAccountsResponse } from "./models/users-accounts-response.js";
export {
  usersAuthLink400ErrorSchema,
  type UsersAuthLink400Error,
} from "./models/users-auth-link400-error.js";
export {
  usersAuthLink400Error1Schema,
  type UsersAuthLink400Error1,
} from "./models/users-auth-link400-error1.js";
export {
  usersAuthLink401ErrorSchema,
  type UsersAuthLink401Error,
} from "./models/users-auth-link401-error.js";
export {
  usersAuthLink401Error1Schema,
  type UsersAuthLink401Error1,
} from "./models/users-auth-link401-error1.js";
export {
  usersAuthLink403ErrorSchema,
  type UsersAuthLink403Error,
} from "./models/users-auth-link403-error.js";
export {
  usersAuthLink403Error1Schema,
  type UsersAuthLink403Error1,
} from "./models/users-auth-link403-error1.js";
export {
  usersAuthLink404ErrorSchema,
  type UsersAuthLink404Error,
} from "./models/users-auth-link404-error.js";
export {
  usersAuthLink404Error1Schema,
  type UsersAuthLink404Error1,
} from "./models/users-auth-link404-error1.js";
export {
  usersAuthLink410ErrorSchema,
  type UsersAuthLink410Error,
} from "./models/users-auth-link410-error.js";
export {
  usersAuthLink410Error1Schema,
  type UsersAuthLink410Error1,
} from "./models/users-auth-link410-error1.js";
export {
  usersAuthLink500ErrorSchema,
  type UsersAuthLink500Error,
} from "./models/users-auth-link500-error.js";
export {
  usersAuthLink500Error1Schema,
  type UsersAuthLink500Error1,
} from "./models/users-auth-link500-error1.js";
export {
  usersAuthLink503ErrorSchema,
  type UsersAuthLink503Error,
} from "./models/users-auth-link503-error.js";
export {
  usersAuthLink503Error1Schema,
  type UsersAuthLink503Error1,
} from "./models/users-auth-link503-error1.js";
export { usersAuthLinkRequestSchema, type UsersAuthLinkRequest } from "./models/users-auth-link-request.js";
export {
  usersAuthLinkResponseSchema,
  type UsersAuthLinkResponse,
} from "./models/users-auth-link-response.js";
export {
  usersAuthLinkResponse1Schema,
  type UsersAuthLinkResponse1,
} from "./models/users-auth-link-response1.js";
export {
  usersConnections400ErrorSchema,
  type UsersConnections400Error,
} from "./models/users-connections400-error.js";
export {
  usersConnections400Error1Schema,
  type UsersConnections400Error1,
} from "./models/users-connections400-error1.js";
export {
  usersConnections401ErrorSchema,
  type UsersConnections401Error,
} from "./models/users-connections401-error.js";
export {
  usersConnections401Error1Schema,
  type UsersConnections401Error1,
} from "./models/users-connections401-error1.js";
export {
  usersConnections403ErrorSchema,
  type UsersConnections403Error,
} from "./models/users-connections403-error.js";
export {
  usersConnections403Error1Schema,
  type UsersConnections403Error1,
} from "./models/users-connections403-error1.js";
export {
  usersConnections404ErrorSchema,
  type UsersConnections404Error,
} from "./models/users-connections404-error.js";
export {
  usersConnections404Error1Schema,
  type UsersConnections404Error1,
} from "./models/users-connections404-error1.js";
export {
  usersConnections500ErrorSchema,
  type UsersConnections500Error,
} from "./models/users-connections500-error.js";
export {
  usersConnections500Error1Schema,
  type UsersConnections500Error1,
} from "./models/users-connections500-error1.js";
export {
  usersConnections503ErrorSchema,
  type UsersConnections503Error,
} from "./models/users-connections503-error.js";
export {
  usersConnections503Error1Schema,
  type UsersConnections503Error1,
} from "./models/users-connections503-error1.js";
export {
  usersConnectionsPurge400ErrorSchema,
  type UsersConnectionsPurge400Error,
} from "./models/users-connections-purge400-error.js";
export {
  usersConnectionsPurge400Error1Schema,
  type UsersConnectionsPurge400Error1,
} from "./models/users-connections-purge400-error1.js";
export {
  usersConnectionsPurge403ErrorSchema,
  type UsersConnectionsPurge403Error,
} from "./models/users-connections-purge403-error.js";
export {
  usersConnectionsPurge403Error1Schema,
  type UsersConnectionsPurge403Error1,
} from "./models/users-connections-purge403-error1.js";
export {
  usersConnectionsPurge404ErrorSchema,
  type UsersConnectionsPurge404Error,
} from "./models/users-connections-purge404-error.js";
export {
  usersConnectionsPurge404Error1Schema,
  type UsersConnectionsPurge404Error1,
} from "./models/users-connections-purge404-error1.js";
export {
  usersConnectionsPurge500ErrorSchema,
  type UsersConnectionsPurge500Error,
} from "./models/users-connections-purge500-error.js";
export {
  usersConnectionsPurge500Error1Schema,
  type UsersConnectionsPurge500Error1,
} from "./models/users-connections-purge500-error1.js";
export {
  usersConnectionsPurge503ErrorSchema,
  type UsersConnectionsPurge503Error,
} from "./models/users-connections-purge503-error.js";
export {
  usersConnectionsPurge503Error1Schema,
  type UsersConnectionsPurge503Error1,
} from "./models/users-connections-purge503-error1.js";
export {
  usersConnectionsRefresh400ErrorSchema,
  type UsersConnectionsRefresh400Error,
} from "./models/users-connections-refresh400-error.js";
export {
  usersConnectionsRefresh400Error1Schema,
  type UsersConnectionsRefresh400Error1,
} from "./models/users-connections-refresh400-error1.js";
export {
  usersConnectionsRefresh403ErrorSchema,
  type UsersConnectionsRefresh403Error,
} from "./models/users-connections-refresh403-error.js";
export {
  usersConnectionsRefresh403Error1Schema,
  type UsersConnectionsRefresh403Error1,
} from "./models/users-connections-refresh403-error1.js";
export {
  usersConnectionsRefresh404ErrorSchema,
  type UsersConnectionsRefresh404Error,
} from "./models/users-connections-refresh404-error.js";
export {
  usersConnectionsRefresh404Error1Schema,
  type UsersConnectionsRefresh404Error1,
} from "./models/users-connections-refresh404-error1.js";
export {
  usersConnectionsRefresh500ErrorSchema,
  type UsersConnectionsRefresh500Error,
} from "./models/users-connections-refresh500-error.js";
export {
  usersConnectionsRefresh500Error1Schema,
  type UsersConnectionsRefresh500Error1,
} from "./models/users-connections-refresh500-error1.js";
export {
  usersConnectionsRefresh503ErrorSchema,
  type UsersConnectionsRefresh503Error,
} from "./models/users-connections-refresh503-error.js";
export {
  usersConnectionsRefresh503Error1Schema,
  type UsersConnectionsRefresh503Error1,
} from "./models/users-connections-refresh503-error1.js";
export { usersConsents400ErrorSchema, type UsersConsents400Error } from "./models/users-consents400-error.js";
export {
  usersConsents400Error1Schema,
  type UsersConsents400Error1,
} from "./models/users-consents400-error1.js";
export { usersConsents401ErrorSchema, type UsersConsents401Error } from "./models/users-consents401-error.js";
export {
  usersConsents401Error1Schema,
  type UsersConsents401Error1,
} from "./models/users-consents401-error1.js";
export { usersConsents403ErrorSchema, type UsersConsents403Error } from "./models/users-consents403-error.js";
export {
  usersConsents403Error1Schema,
  type UsersConsents403Error1,
} from "./models/users-consents403-error1.js";
export { usersConsents404ErrorSchema, type UsersConsents404Error } from "./models/users-consents404-error.js";
export {
  usersConsents404Error1Schema,
  type UsersConsents404Error1,
} from "./models/users-consents404-error1.js";
export { usersConsents500ErrorSchema, type UsersConsents500Error } from "./models/users-consents500-error.js";
export {
  usersConsents500Error1Schema,
  type UsersConsents500Error1,
} from "./models/users-consents500-error1.js";
export { usersConsents503ErrorSchema, type UsersConsents503Error } from "./models/users-consents503-error.js";
export {
  usersConsents503Error1Schema,
  type UsersConsents503Error1,
} from "./models/users-consents503-error1.js";
export { usersConsentsResponseSchema, type UsersConsentsResponse } from "./models/users-consents-response.js";
export { usersExpenses400ErrorSchema, type UsersExpenses400Error } from "./models/users-expenses400-error.js";
export {
  usersExpenses400Error1Schema,
  type UsersExpenses400Error1,
} from "./models/users-expenses400-error1.js";
export { usersExpenses403ErrorSchema, type UsersExpenses403Error } from "./models/users-expenses403-error.js";
export {
  usersExpenses403Error1Schema,
  type UsersExpenses403Error1,
} from "./models/users-expenses403-error1.js";
export { usersExpenses404ErrorSchema, type UsersExpenses404Error } from "./models/users-expenses404-error.js";
export {
  usersExpenses404Error1Schema,
  type UsersExpenses404Error1,
} from "./models/users-expenses404-error1.js";
export { usersExpenses500ErrorSchema, type UsersExpenses500Error } from "./models/users-expenses500-error.js";
export {
  usersExpenses500Error1Schema,
  type UsersExpenses500Error1,
} from "./models/users-expenses500-error1.js";
export { usersExpensesRequestSchema, type UsersExpensesRequest } from "./models/users-expenses-request.js";
export { usersExpensesResponseSchema, type UsersExpensesResponse } from "./models/users-expenses-response.js";
export {
  usersExpensesResponse1Schema,
  type UsersExpensesResponse1,
} from "./models/users-expenses-response1.js";
export {
  usersExpensesResponse2Schema,
  type UsersExpensesResponse2,
} from "./models/users-expenses-response2.js";
export {
  usersIdentities400ErrorSchema,
  type UsersIdentities400Error,
} from "./models/users-identities400-error.js";
export {
  usersIdentities400Error1Schema,
  type UsersIdentities400Error1,
} from "./models/users-identities400-error1.js";
export {
  usersIdentities403ErrorSchema,
  type UsersIdentities403Error,
} from "./models/users-identities403-error.js";
export {
  usersIdentities403Error1Schema,
  type UsersIdentities403Error1,
} from "./models/users-identities403-error1.js";
export {
  usersIdentities404ErrorSchema,
  type UsersIdentities404Error,
} from "./models/users-identities404-error.js";
export {
  usersIdentities404Error1Schema,
  type UsersIdentities404Error1,
} from "./models/users-identities404-error1.js";
export {
  usersIdentities500ErrorSchema,
  type UsersIdentities500Error,
} from "./models/users-identities500-error.js";
export {
  usersIdentities500Error1Schema,
  type UsersIdentities500Error1,
} from "./models/users-identities500-error1.js";
export {
  usersIdentitiesResponseSchema,
  type UsersIdentitiesResponse,
} from "./models/users-identities-response.js";
export { usersIncome400ErrorSchema, type UsersIncome400Error } from "./models/users-income400-error.js";
export { usersIncome400Error1Schema, type UsersIncome400Error1 } from "./models/users-income400-error1.js";
export { usersIncome403ErrorSchema, type UsersIncome403Error } from "./models/users-income403-error.js";
export { usersIncome403Error1Schema, type UsersIncome403Error1 } from "./models/users-income403-error1.js";
export { usersIncome404ErrorSchema, type UsersIncome404Error } from "./models/users-income404-error.js";
export { usersIncome404Error1Schema, type UsersIncome404Error1 } from "./models/users-income404-error1.js";
export { usersIncome500ErrorSchema, type UsersIncome500Error } from "./models/users-income500-error.js";
export { usersIncome500Error1Schema, type UsersIncome500Error1 } from "./models/users-income500-error1.js";
export { usersIncomeRequestSchema, type UsersIncomeRequest } from "./models/users-income-request.js";
export {
  usersInsightsAccountRequestSchema,
  type UsersInsightsAccountRequest,
} from "./models/users-insights-account-request.js";
export { usersJobs400ErrorSchema, type UsersJobs400Error } from "./models/users-jobs400-error.js";
export { usersJobs400Error1Schema, type UsersJobs400Error1 } from "./models/users-jobs400-error1.js";
export { usersJobs401ErrorSchema, type UsersJobs401Error } from "./models/users-jobs401-error.js";
export { usersJobs401Error1Schema, type UsersJobs401Error1 } from "./models/users-jobs401-error1.js";
export { usersJobs403ErrorSchema, type UsersJobs403Error } from "./models/users-jobs403-error.js";
export { usersJobs403Error1Schema, type UsersJobs403Error1 } from "./models/users-jobs403-error1.js";
export { usersJobs404ErrorSchema, type UsersJobs404Error } from "./models/users-jobs404-error.js";
export { usersJobs404Error1Schema, type UsersJobs404Error1 } from "./models/users-jobs404-error1.js";
export { usersJobs500ErrorSchema, type UsersJobs500Error } from "./models/users-jobs500-error.js";
export { usersJobs500Error1Schema, type UsersJobs500Error1 } from "./models/users-jobs500-error1.js";
export { usersJobsResponseSchema, type UsersJobsResponse } from "./models/users-jobs-response.js";
export { usersRequestSchema, type UsersRequest } from "./models/users-request.js";
export { usersRequest1Schema, type UsersRequest1 } from "./models/users-request1.js";
export {
  usersStatements400ErrorSchema,
  type UsersStatements400Error,
} from "./models/users-statements400-error.js";
export {
  usersStatements400Error1Schema,
  type UsersStatements400Error1,
} from "./models/users-statements400-error1.js";
export {
  usersStatements403ErrorSchema,
  type UsersStatements403Error,
} from "./models/users-statements403-error.js";
export {
  usersStatements403Error1Schema,
  type UsersStatements403Error1,
} from "./models/users-statements403-error1.js";
export {
  usersStatements404ErrorSchema,
  type UsersStatements404Error,
} from "./models/users-statements404-error.js";
export {
  usersStatements404Error1Schema,
  type UsersStatements404Error1,
} from "./models/users-statements404-error1.js";
export {
  usersStatements500ErrorSchema,
  type UsersStatements500Error,
} from "./models/users-statements500-error.js";
export {
  usersStatements500Error1Schema,
  type UsersStatements500Error1,
} from "./models/users-statements500-error1.js";
export {
  usersStatements503ErrorSchema,
  type UsersStatements503Error,
} from "./models/users-statements503-error.js";
export {
  usersStatements503Error1Schema,
  type UsersStatements503Error1,
} from "./models/users-statements503-error1.js";
export {
  usersStatementsResponseSchema,
  type UsersStatementsResponse,
} from "./models/users-statements-response.js";
export {
  usersTransactions400ErrorSchema,
  type UsersTransactions400Error,
} from "./models/users-transactions400-error.js";
export {
  usersTransactions400Error1Schema,
  type UsersTransactions400Error1,
} from "./models/users-transactions400-error1.js";
export {
  usersTransactions403ErrorSchema,
  type UsersTransactions403Error,
} from "./models/users-transactions403-error.js";
export {
  usersTransactions403Error1Schema,
  type UsersTransactions403Error1,
} from "./models/users-transactions403-error1.js";
export {
  usersTransactions404ErrorSchema,
  type UsersTransactions404Error,
} from "./models/users-transactions404-error.js";
export {
  usersTransactions404Error1Schema,
  type UsersTransactions404Error1,
} from "./models/users-transactions404-error1.js";
export {
  usersTransactions500ErrorSchema,
  type UsersTransactions500Error,
} from "./models/users-transactions500-error.js";
export {
  usersTransactions500Error1Schema,
  type UsersTransactions500Error1,
} from "./models/users-transactions500-error1.js";
export {
  usersTransactions503ErrorSchema,
  type UsersTransactions503Error,
} from "./models/users-transactions503-error.js";
export {
  usersTransactions503Error1Schema,
  type UsersTransactions503Error1,
} from "./models/users-transactions503-error1.js";
export {
  usersTransactionsResponseSchema,
  type UsersTransactionsResponse,
} from "./models/users-transactions-response.js";
export { valueSchema, type Value } from "./models/unions/value.js";
export { value1Schema, type Value1 } from "./models/unions/value1.js";
export { verificationResultSchema, type VerificationResult } from "./models/verification-result.js";
export { verificationResult1Schema, type VerificationResult1 } from "./models/verification-result1.js";
export { verificationResult2Schema, type VerificationResult2 } from "./models/verification-result2.js";
export { verificationResult4Schema, type VerificationResult4 } from "./models/verification-result4.js";
export { webhookStatsSchema, type WebhookStats } from "./models/webhook-stats.js";
export { Interval, intervalSchema } from "./models/interval.js";
export { TypeId, typeIdSchema } from "./models/type-id.js";

export {
  CoreError as BasiqError,
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
