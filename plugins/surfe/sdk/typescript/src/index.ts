export { SurfeClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Account } from "./resources/account.js";
export { Companies } from "./resources/companies.js";
export { People } from "./resources/people.js";
export { Recommendations } from "./resources/recommendations.js";

export { AcceptedEmailType, acceptedEmailTypeSchema } from "./models/accepted-email-type.js";
export { companySchema, type Company } from "./models/company.js";
export { company1Schema, type Company1 } from "./models/company1.js";
export {
  companyEnrichmentRequestSchema,
  type CompanyEnrichmentRequest,
} from "./models/company-enrichment-request.js";
export {
  companyEnrichmentResultSchema,
  type CompanyEnrichmentResult,
} from "./models/company-enrichment-result.js";
export { companyFiltersSchema, type CompanyFilters } from "./models/company-filters.js";
export { companySearchRequestSchema, type CompanySearchRequest } from "./models/company-search-request.js";
export { companySearchResponseSchema, type CompanySearchResponse } from "./models/company-search-response.js";
export { creditBalanceSchema, type CreditBalance } from "./models/credit-balance.js";
export { emailRecordSchema, type EmailRecord } from "./models/email-record.js";
export { enrichedPersonSchema, type EnrichedPerson } from "./models/enriched-person.js";
export { enrichmentJobAcceptedSchema, type EnrichmentJobAccepted } from "./models/enrichment-job-accepted.js";
export { enrichmentOptionsSchema, type EnrichmentOptions } from "./models/enrichment-options.js";
export { errorSchema, type Error } from "./models/error.js";
export { errorErrorSchema, type ErrorError } from "./models/error-error.js";
export { fundingRoundSchema, type FundingRound } from "./models/funding-round.js";
export { icpDefinitionSchema, type IcpDefinition } from "./models/icp-definition.js";
export { includeSchema, type Include } from "./models/include.js";
export {
  includeSurfePeopleApiSchema,
  type IncludeSurfePeopleApi,
} from "./models/include-surfe-people-api.js";
export { jobHistoryEntrySchema, type JobHistoryEntry } from "./models/job-history-entry.js";
export { JobStatus, jobStatusSchema } from "./models/job-status.js";
export { notificationOptionsSchema, type NotificationOptions } from "./models/notification-options.js";
export {
  peopleFindByEmailRequestSchema,
  type PeopleFindByEmailRequest,
} from "./models/people-find-by-email-request.js";
export {
  peopleFindByEmailResponseSchema,
  type PeopleFindByEmailResponse,
} from "./models/people-find-by-email-response.js";
export {
  peopleEnrichmentRequestSchema,
  type PeopleEnrichmentRequest,
} from "./models/people-enrichment-request.js";
export {
  peopleEnrichmentResultSchema,
  type PeopleEnrichmentResult,
} from "./models/people-enrichment-result.js";
export { peopleFiltersSchema, type PeopleFilters } from "./models/people-filters.js";
export { peopleSearchRequestSchema, type PeopleSearchRequest } from "./models/people-search-request.js";
export { peopleSearchResponseSchema, type PeopleSearchResponse } from "./models/people-search-response.js";
export { personSchema, type Person } from "./models/person.js";
export { personInputSchema, type PersonInput } from "./models/person-input.js";
export { phoneRecordSchema, type PhoneRecord } from "./models/phone-record.js";
export { rangeSchema, type Range } from "./models/range.js";
export {
  recommendationsFetchRequestSchema,
  type RecommendationsFetchRequest,
} from "./models/recommendations-fetch-request.js";
export {
  recommendationsFetchResponseSchema,
  type RecommendationsFetchResponse,
} from "./models/recommendations-fetch-response.js";
export { Type, typeSchema } from "./models/type.js";

export {
  CoreError as SurfeError,
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
