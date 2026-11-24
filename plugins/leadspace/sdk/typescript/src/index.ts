export { LeadspaceClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Authorization } from "./resources/authorization.js";
export { Discovery } from "./resources/discovery.js";
export { Enrichment } from "./resources/enrichment.js";
export { Intent } from "./resources/intent.js";
export { Results } from "./resources/results.js";

export { addressSchema, type Address } from "./models/address.js";
export { addressInputSchema, type AddressInput } from "./models/address-input.js";
export { analyticsSchema, type Analytics } from "./models/analytics.js";
export { analytics1Schema, type Analytics1 } from "./models/analytics1.js";
export { authorizationRequestSchema, type AuthorizationRequest } from "./models/authorization-request.js";
export { authorizationResponseSchema, type AuthorizationResponse } from "./models/authorization-response.js";
export { Bucket, bucketSchema } from "./models/bucket.js";
export { bulkAcceptedSchema, type BulkAccepted } from "./models/bulk-accepted.js";
export { bulkCallbackSchema, type BulkCallback } from "./models/bulk-callback.js";
export { bulkEnrichmentRequestSchema, type BulkEnrichmentRequest } from "./models/bulk-enrichment-request.js";
export { bulkResultsSchema, type BulkResults } from "./models/bulk-results.js";
export { BulkStatus, bulkStatusSchema } from "./models/bulk-status.js";
export { callbackMethodSchema, type CallbackMethod } from "./models/callback-method.js";
export { companySchema, type Company } from "./models/company.js";
export { companyFamilyTreeSchema, type CompanyFamilyTree } from "./models/company-family-tree.js";
export { companyFundingSchema, type CompanyFunding } from "./models/company-funding.js";
export { companyInputSchema, type CompanyInput } from "./models/company-input.js";
export { companyInvestorsSchema, type CompanyInvestors } from "./models/company-investors.js";
export { customFieldSchema, type CustomField } from "./models/custom-field.js";
export { datumSchema, type Datum } from "./models/datum.js";
export { departmentSizeSchema, type DepartmentSize } from "./models/department-size.js";
export { discoveryAcceptedSchema, type DiscoveryAccepted } from "./models/discovery-accepted.js";
export { discoveryAccountSchema, type DiscoveryAccount } from "./models/discovery-account.js";
export { discoveryCallbackSchema, type DiscoveryCallback } from "./models/discovery-callback.js";
export {
  discoveryContactCriteriaSchema,
  type DiscoveryContactCriteria,
} from "./models/discovery-contact-criteria.js";
export { discoveryItemSchema, type DiscoveryItem } from "./models/discovery-item.js";
export { discoveryRequestSchema, type DiscoveryRequest } from "./models/discovery-request.js";
export { discoveryResultsSchema, type DiscoveryResults } from "./models/discovery-results.js";
export { employeesSchema, type Employees } from "./models/employees.js";
export { enrichedAddressSchema, type EnrichedAddress } from "./models/enriched-address.js";
export { enrichedCompanySchema, type EnrichedCompany } from "./models/enriched-company.js";
export { enrichedPersonSchema, type EnrichedPerson } from "./models/enriched-person.js";
export { enrichedRecordSchema, type EnrichedRecord } from "./models/enriched-record.js";
export { enrichmentResultSchema, type EnrichmentResult } from "./models/enrichment-result.js";
export { EnrichmentStatus, enrichmentStatusSchema } from "./models/enrichment-status.js";
export { errorSchema, type Error } from "./models/error.js";
export { error2Schema, type Error2 } from "./models/error2.js";
export { errorErrorSchema, type ErrorError } from "./models/error-error.js";
export {
  errorErrorLeadspaceApiV4EnrichmentApiSchema,
  type ErrorErrorLeadspaceApiV4EnrichmentApi,
} from "./models/error-error-leadspace-api-v4-enrichment-api.js";
export {
  errorLeadspaceApiV4EnrichmentApiSchema,
  type ErrorLeadspaceApiV4EnrichmentApi,
} from "./models/error-leadspace-api-v4-enrichment-api.js";
export { intentAcceptedSchema, type IntentAccepted } from "./models/intent-accepted.js";
export { intentCompanyInputSchema, type IntentCompanyInput } from "./models/intent-company-input.js";
export { intentDataSchema, type IntentData } from "./models/intent-data.js";
export { intentModelingSchema, type IntentModeling } from "./models/intent-modeling.js";
export { intentModelingScoresSchema, type IntentModelingScores } from "./models/intent-modeling-scores.js";
export { intentRequestSchema, type IntentRequest } from "./models/intent-request.js";
export { intentResultsSchema, type IntentResults } from "./models/intent-results.js";
export { Level, levelSchema } from "./models/level.js";
export { Level1, level1Schema } from "./models/level1.js";
export { limitsSchema, type Limits } from "./models/limits.js";
export { locationSchema, type Location } from "./models/location.js";
export { matchingConfidenceSchema, type MatchingConfidence } from "./models/matching-confidence.js";
export { ModelLevel, modelLevelSchema } from "./models/model-level.js";
export {
  OriginalEmailVerificationStatus,
  originalEmailVerificationStatusSchema,
} from "./models/original-email-verification-status.js";
export { personInputSchema, type PersonInput } from "./models/person-input.js";
export { profileScoreSchema, type ProfileScore } from "./models/profile-score.js";
export { refreshRequestSchema, type RefreshRequest } from "./models/refresh-request.js";
export { requiredResultsFieldsSchema, type RequiredResultsFields } from "./models/required-results-fields.js";
export { resultSchema, type Result } from "./models/result.js";
export { revenueDollarSchema, type RevenueDollar } from "./models/revenue-dollar.js";
export { scoreSchema, type Score } from "./models/score.js";
export { signalsSchema, type Signals } from "./models/signals.js";
export {
  singleEnrichmentRequestSchema,
  type SingleEnrichmentRequest,
} from "./models/single-enrichment-request.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export { Type, typeSchema } from "./models/type.js";
export { VerificationSource, verificationSourceSchema } from "./models/verification-source.js";
export { VerificationStatus, verificationStatusSchema } from "./models/verification-status.js";

export {
  CoreError as LeadspaceError,
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
