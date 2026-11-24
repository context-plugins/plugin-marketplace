export { GoogleCloudTalentSolutionClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export {
  PkceMethod,
  type SecretProvider,
  type OAuth2AuthorizationCodeCredentials,
  type AuthorizationCodePrompt,
} from "./core/auth/credentials.js";
export type {
  OAuth2RefreshableTokenStrategy,
  OAuthToken,
  OAuth2CredentialPlacement,
  OAuthTokenRefreshable,
} from "./core/auth/oauth2-strategies.js";

export { applicationInfoSchema, type ApplicationInfo } from "./models/application-info.js";
export { applicationInfo2Schema, type ApplicationInfo2 } from "./models/application-info2.js";
export {
  batchCreateJobsRequestSchema,
  type BatchCreateJobsRequest,
} from "./models/batch-create-jobs-request.js";
export {
  batchDeleteJobsRequestSchema,
  type BatchDeleteJobsRequest,
} from "./models/batch-delete-jobs-request.js";
export {
  batchUpdateJobsRequestSchema,
  type BatchUpdateJobsRequest,
} from "./models/batch-update-jobs-request.js";
export { clientEventSchema, type ClientEvent } from "./models/client-event.js";
export { commuteFilterSchema, type CommuteFilter } from "./models/commute-filter.js";
export { commuteFilter2Schema, type CommuteFilter2 } from "./models/commute-filter2.js";
export { commuteInfoSchema, type CommuteInfo } from "./models/commute-info.js";
export { commuteInfo1Schema, type CommuteInfo1 } from "./models/commute-info1.js";
export { CommuteMethod, commuteMethodSchema } from "./models/commute-method.js";
export { companySchema, type Company } from "./models/company.js";
export { companyDerivedInfoSchema, type CompanyDerivedInfo } from "./models/company-derived-info.js";
export { companyDerivedInfo2Schema, type CompanyDerivedInfo2 } from "./models/company-derived-info2.js";
export { compensationEntrySchema, type CompensationEntry } from "./models/compensation-entry.js";
export { compensationFilterSchema, type CompensationFilter } from "./models/compensation-filter.js";
export { compensationFilter2Schema, type CompensationFilter2 } from "./models/compensation-filter2.js";
export { compensationInfoSchema, type CompensationInfo } from "./models/compensation-info.js";
export { compensationInfo1Schema, type CompensationInfo1 } from "./models/compensation-info1.js";
export { compensationRangeSchema, type CompensationRange } from "./models/compensation-range.js";
export { compensationRange1Schema, type CompensationRange1 } from "./models/compensation-range1.js";
export { compensationRange5Schema, type CompensationRange5 } from "./models/compensation-range5.js";
export { completeQueryResponseSchema, type CompleteQueryResponse } from "./models/complete-query-response.js";
export { completionResultSchema, type CompletionResult } from "./models/completion-result.js";
export { customAttributeSchema, type CustomAttribute } from "./models/custom-attribute.js";
export { customRankingInfoSchema, type CustomRankingInfo } from "./models/custom-ranking-info.js";
export { customRankingInfo1Schema, type CustomRankingInfo1 } from "./models/custom-ranking-info1.js";
export { DegreeType, degreeTypeSchema } from "./models/degree-type.js";
export { deviceInfoSchema, type DeviceInfo } from "./models/device-info.js";
export { deviceInfo2Schema, type DeviceInfo2 } from "./models/device-info2.js";
export { DeviceType, deviceTypeSchema } from "./models/device-type.js";
export { DiversificationLevel, diversificationLevelSchema } from "./models/diversification-level.js";
export { EmploymentType, employmentTypeSchema } from "./models/employment-type.js";
export { errorSchema, type Error } from "./models/error.js";
export { googleRpcErrorSchema, type GoogleRpcError } from "./models/google-rpc-error.js";
export { googleRpcErrorErrorSchema, type GoogleRpcErrorError } from "./models/google-rpc-error-error.js";
export { histogramQuerySchema, type HistogramQuery } from "./models/histogram-query.js";
export { histogramQueryResultSchema, type HistogramQueryResult } from "./models/histogram-query-result.js";
export { HtmlSanitization, htmlSanitizationSchema } from "./models/html-sanitization.js";
export { ImportanceLevel, importanceLevelSchema } from "./models/importance-level.js";
export { jobSchema, type Job } from "./models/job.js";
export { job1Schema, type Job1 } from "./models/job1.js";
export { JobBenefit, jobBenefitSchema } from "./models/job-benefit.js";
export { JobCategory, jobCategorySchema } from "./models/job-category.js";
export { jobDerivedInfoSchema, type JobDerivedInfo } from "./models/job-derived-info.js";
export { jobDerivedInfo2Schema, type JobDerivedInfo2 } from "./models/job-derived-info2.js";
export { jobEventSchema, type JobEvent } from "./models/job-event.js";
export { JobLevel, jobLevelSchema } from "./models/job-level.js";
export { jobQuerySchema, type JobQuery } from "./models/job-query.js";
export { jobQuery2Schema, type JobQuery2 } from "./models/job-query2.js";
export { JobView, jobViewSchema } from "./models/job-view.js";
export { KeywordMatchMode, keywordMatchModeSchema } from "./models/keyword-match-mode.js";
export { latLngSchema, type LatLng } from "./models/lat-lng.js";
export { latLng1Schema, type LatLng1 } from "./models/lat-lng1.js";
export { latLng2Schema, type LatLng2 } from "./models/lat-lng2.js";
export { latLng4Schema, type LatLng4 } from "./models/lat-lng4.js";
export { listCompaniesResponseSchema, type ListCompaniesResponse } from "./models/list-companies-response.js";
export { listJobsResponseSchema, type ListJobsResponse } from "./models/list-jobs-response.js";
export { listTenantsResponseSchema, type ListTenantsResponse } from "./models/list-tenants-response.js";
export { locationSchema, type Location } from "./models/location.js";
export { location2Schema, type Location2 } from "./models/location2.js";
export { location3Schema, type Location3 } from "./models/location3.js";
export { locationFilterSchema, type LocationFilter } from "./models/location-filter.js";
export { LocationType, locationTypeSchema } from "./models/location-type.js";
export { matchingJobSchema, type MatchingJob } from "./models/matching-job.js";
export { moneySchema, type Money } from "./models/money.js";
export { money1Schema, type Money1 } from "./models/money1.js";
export { money2Schema, type Money2 } from "./models/money2.js";
export { money4Schema, type Money4 } from "./models/money4.js";
export { operationSchema, type Operation } from "./models/operation.js";
export { postalAddressSchema, type PostalAddress } from "./models/postal-address.js";
export { postalAddress2Schema, type PostalAddress2 } from "./models/postal-address2.js";
export { PostingRegion, postingRegionSchema } from "./models/posting-region.js";
export { processingOptionsSchema, type ProcessingOptions } from "./models/processing-options.js";
export { RelevanceThreshold, relevanceThresholdSchema } from "./models/relevance-threshold.js";
export { requestMetadataSchema, type RequestMetadata } from "./models/request-metadata.js";
export { requestMetadata1Schema, type RequestMetadata1 } from "./models/request-metadata1.js";
export { responseMetadataSchema, type ResponseMetadata } from "./models/response-metadata.js";
export { responseMetadata1Schema, type ResponseMetadata1 } from "./models/response-metadata1.js";
export { RoadTraffic, roadTrafficSchema } from "./models/road-traffic.js";
export { searchJobsRequestSchema, type SearchJobsRequest } from "./models/search-jobs-request.js";
export { searchJobsResponseSchema, type SearchJobsResponse } from "./models/search-jobs-response.js";
export { SearchMode, searchModeSchema } from "./models/search-mode.js";
export { Size, sizeSchema } from "./models/size.js";
export { spellingCorrectionSchema, type SpellingCorrection } from "./models/spelling-correction.js";
export { spellingCorrection2Schema, type SpellingCorrection2 } from "./models/spelling-correction2.js";
export { statusSchema, type Status } from "./models/status.js";
export { status2Schema, type Status2 } from "./models/status2.js";
export { TelecommutePreference, telecommutePreferenceSchema } from "./models/telecommute-preference.js";
export { tenantSchema, type Tenant } from "./models/tenant.js";
export { timeOfDaySchema, type TimeOfDay } from "./models/time-of-day.js";
export { timeOfDay1Schema, type TimeOfDay1 } from "./models/time-of-day1.js";
export { timestampRangeSchema, type TimestampRange } from "./models/timestamp-range.js";
export { timestampRange1Schema, type TimestampRange1 } from "./models/timestamp-range1.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export { Type2, type2Schema } from "./models/type2.js";
export { Type3, type3Schema } from "./models/type3.js";
export { Unit, unitSchema } from "./models/unit.js";
export { Unit1, unit1Schema } from "./models/unit1.js";
export { Visibility, visibilitySchema } from "./models/visibility.js";
export { JobView1, jobView1Schema } from "./models/job-view1.js";
export { Scope, scopeSchema } from "./models/scope.js";
export { Type4, type4Schema } from "./models/type4.js";

export {
  CoreError as GoogleCloudTalentSolutionError,
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
