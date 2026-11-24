export { CompabaseClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Companies } from "./resources/companies.js";
export { Financials } from "./resources/financials.js";
export { Health } from "./resources/health.js";
export { News } from "./resources/news.js";
export { Persons } from "./resources/persons.js";
export { Registers } from "./resources/registers.js";
export { Tenders } from "./resources/tenders.js";
export { Usage } from "./resources/usage.js";
export { Watchlist } from "./resources/watchlist.js";

export { changeSchema, type Change } from "./models/change.js";
export { Code, codeSchema } from "./models/code.js";
export {
  companiesKrsBeneficiariesResponseSchema,
  type CompaniesKrsBeneficiariesResponse,
} from "./models/companies-krs-beneficiaries-response.js";
export {
  companiesKrsCourtGazetteResponseSchema,
  type CompaniesKrsCourtGazetteResponse,
} from "./models/companies-krs-court-gazette-response.js";
export {
  companiesKrsEnergyLicensesResponseSchema,
  type CompaniesKrsEnergyLicensesResponse,
} from "./models/companies-krs-energy-licenses-response.js";
export {
  companiesKrsEuFundsResponseSchema,
  type CompaniesKrsEuFundsResponse,
} from "./models/companies-krs-eu-funds-response.js";
export {
  companiesKrsEuGrantsResponseSchema,
  type CompaniesKrsEuGrantsResponse,
} from "./models/companies-krs-eu-grants-response.js";
export {
  companiesKrsFilingTimelinessResponseSchema,
  type CompaniesKrsFilingTimelinessResponse,
} from "./models/companies-krs-filing-timeliness-response.js";
export {
  companiesKrsFinancialLicensesResponseSchema,
  type CompaniesKrsFinancialLicensesResponse,
} from "./models/companies-krs-financial-licenses-response.js";
export {
  companiesKrsInsolvencyResponseSchema,
  type CompaniesKrsInsolvencyResponse,
} from "./models/companies-krs-insolvency-response.js";
export {
  companiesKrsProcurementCounterpartiesResponseSchema,
  type CompaniesKrsProcurementCounterpartiesResponse,
} from "./models/companies-krs-procurement-counterparties-response.js";
export {
  companiesKrsPublicAidResponseSchema,
  type CompaniesKrsPublicAidResponse,
} from "./models/companies-krs-public-aid-response.js";
export {
  companiesKrsRealEstateResponseSchema,
  type CompaniesKrsRealEstateResponse,
} from "./models/companies-krs-real-estate-response.js";
export {
  companiesKrsSanctionsResponseSchema,
  type CompaniesKrsSanctionsResponse,
} from "./models/companies-krs-sanctions-response.js";
export {
  companiesKrsSecuredLiabilitiesResponseSchema,
  type CompaniesKrsSecuredLiabilitiesResponse,
} from "./models/companies-krs-secured-liabilities-response.js";
export {
  companiesKrsTendersResponseSchema,
  type CompaniesKrsTendersResponse,
} from "./models/companies-krs-tenders-response.js";
export {
  companiesKrsWasteRegistryResponseSchema,
  type CompaniesKrsWasteRegistryResponse,
} from "./models/companies-krs-waste-registry-response.js";
export { companySchema, type Company } from "./models/company.js";
export { companyCountResponseSchema, type CompanyCountResponse } from "./models/company-count-response.js";
export { companyListItemSchema, type CompanyListItem } from "./models/company-list-item.js";
export { companyListPaginationSchema, type CompanyListPagination } from "./models/company-list-pagination.js";
export { companyListResponseSchema, type CompanyListResponse } from "./models/company-list-response.js";
export {
  companyCompabaseWatchlistApiSchema,
  type CompanyCompabaseWatchlistApi,
} from "./models/company-compabase-watchlist-api.js";
export { dataSchema, type Data } from "./models/data.js";
export { entryModelSchema, type EntryModel } from "./models/entry-model.js";
export { errorSchema, type Error } from "./models/error.js";
export { errorResponseSchema, type ErrorResponse } from "./models/error-response.js";
export { errorResponseErrorSchema, type ErrorResponseError } from "./models/error-response-error.js";
export { Event, eventSchema } from "./models/event.js";
export { healthResponseSchema, type HealthResponse } from "./models/health-response.js";
export { justificationI18NSchema, type JustificationI18N } from "./models/justification-i18-n.js";
export { measuresI18NSchema, type MeasuresI18N } from "./models/measures-i18-n.js";
export {
  personConnectionsResponseSchema,
  type PersonConnectionsResponse,
} from "./models/person-connections-response.js";
export { personSearchItemSchema, type PersonSearchItem } from "./models/person-search-item.js";
export { personsSearchResponseSchema, type PersonsSearchResponse } from "./models/persons-search-response.js";
export { relationshipSchema, type Relationship } from "./models/relationship.js";
export { sanctionsSchema, type Sanctions } from "./models/sanctions.js";
export { usageResponseSchema, type UsageResponse } from "./models/usage-response.js";
export { watchlistAddResponseSchema, type WatchlistAddResponse } from "./models/watchlist-add-response.js";
export { watchlistWebhookEventSchema, type WatchlistWebhookEvent } from "./models/watchlist-webhook-event.js";
export { Currency, currencySchema } from "./models/currency.js";
export { Dir, dirSchema } from "./models/dir.js";
export { Industry, industrySchema } from "./models/industry.js";
export { Kind, kindSchema } from "./models/kind.js";
export { Limit, limitSchema } from "./models/limit.js";
export { Locale, localeSchema } from "./models/locale.js";
export { Min, minSchema } from "./models/min.js";
export { Sort, sortSchema } from "./models/sort.js";
export { Source, sourceSchema } from "./models/source.js";
export { Status, statusSchema } from "./models/status.js";

export {
  parseCompabaseWebhookEvent,
  type CompabaseWebhookEvent,
} from "./webhooks/compabase-webhook-event.js";
export {
  WebhookRequest,
  type RequestBodyStream,
  type RequestHeaders,
} from "./core/webhooks/webhook-request.js";

export {
  CoreError as CompabaseError,
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
