export { JusttrackClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { AppEvents } from "./resources/app-events.js";
export { AppPartnerConnectionApi } from "./resources/app-partner-connection-api.js";
export { Apps } from "./resources/apps.js";
export { Bids } from "./resources/bids.js";
export { Campaigns } from "./resources/campaigns.js";
export { PartnerConfigurations } from "./resources/partner-configurations.js";
export { Partners } from "./resources/partners.js";

export { appSchema, type App } from "./models/app.js";
export { appEventSchema, type AppEvent } from "./models/app-event.js";
export { appEvent1Schema, type AppEvent1 } from "./models/app-event1.js";
export { appEvent2Schema, type AppEvent2 } from "./models/unions/app-event2.js";
export { appEventBatchSchema, type AppEventBatch } from "./models/app-event-batch.js";
export { appOutputSchema, type AppOutput } from "./models/app-output.js";
export { appPartnerConnectionSchema, type AppPartnerConnection } from "./models/app-partner-connection.js";
export { appVersionSchema, type AppVersion } from "./models/app-version.js";
export { batchErrorResponseSchema, type BatchErrorResponse } from "./models/batch-error-response.js";
export { bidOutputSchema, type BidOutput } from "./models/bid-output.js";
export { campaignOutputSchema, type CampaignOutput } from "./models/campaign-output.js";
export { createAppRequestSchema, type CreateAppRequest } from "./models/create-app-request.js";
export { createCampaignRequestSchema, type CreateCampaignRequest } from "./models/create-campaign-request.js";
export { errorResponseSchema, type ErrorResponse } from "./models/error-response.js";
export { errorResponseErrorSchema, type ErrorResponseError } from "./models/error-response-error.js";
export { Feature, featureSchema } from "./models/feature.js";
export { invalidBidOutputSchema, type InvalidBidOutput } from "./models/invalid-bid-output.js";
export { listAppsRequestSchema, type ListAppsRequest } from "./models/list-apps-request.js";
export { listAppsResponseSchema, type ListAppsResponse } from "./models/list-apps-response.js";
export { listBidsFilterSchema, type ListBidsFilter } from "./models/list-bids-filter.js";
export { listBidsRequestSchema, type ListBidsRequest } from "./models/list-bids-request.js";
export { listBidsResponseSchema, type ListBidsResponse } from "./models/list-bids-response.js";
export { listCampaignsFilterSchema, type ListCampaignsFilter } from "./models/list-campaigns-filter.js";
export { listCampaignsRequestSchema, type ListCampaignsRequest } from "./models/list-campaigns-request.js";
export {
  listPartnerConfigurationFeaturesFilterSchema,
  type ListPartnerConfigurationFeaturesFilter,
} from "./models/list-partner-configuration-features-filter.js";
export {
  listPartnerConfigurationFeaturesRequestSchema,
  type ListPartnerConfigurationFeaturesRequest,
} from "./models/list-partner-configuration-features-request.js";
export {
  listPartnerConfigurationFeaturesResponseSchema,
  type ListPartnerConfigurationFeaturesResponse,
} from "./models/list-partner-configuration-features-response.js";
export {
  listPartnerConfigurationsFilterSchema,
  type ListPartnerConfigurationsFilter,
} from "./models/list-partner-configurations-filter.js";
export {
  listPartnerConfigurationsRequestSchema,
  type ListPartnerConfigurationsRequest,
} from "./models/list-partner-configurations-request.js";
export {
  listPartnerConfigurationsResponseSchema,
  type ListPartnerConfigurationsResponse,
} from "./models/list-partner-configurations-response.js";
export { listPartnersFilterSchema, type ListPartnersFilter } from "./models/list-partners-filter.js";
export { listPartnersRequestSchema, type ListPartnersRequest } from "./models/list-partners-request.js";
export { listPartnersResponseSchema, type ListPartnersResponse } from "./models/list-partners-response.js";
export {
  partnerConfigurationFeatureSchema,
  type PartnerConfigurationFeature,
} from "./models/partner-configuration-feature.js";
export {
  partnerConfigurationFeatureOutputSchema,
  type PartnerConfigurationFeatureOutput,
} from "./models/partner-configuration-feature-output.js";
export {
  partnerConfigurationOutputSchema,
  type PartnerConfigurationOutput,
} from "./models/partner-configuration-output.js";
export { partnerOutputSchema, type PartnerOutput } from "./models/partner-output.js";
export { RequiredCampaignType, requiredCampaignTypeSchema } from "./models/required-campaign-type.js";
export { RequiredFeature, requiredFeatureSchema } from "./models/required-feature.js";
export { requiredPageSchema, type RequiredPage } from "./models/required-page.js";
export { RequiredPlatform, requiredPlatformSchema } from "./models/required-platform.js";
export { Unit, unitSchema } from "./models/unit.js";
export { uploadBidInputSchema, type UploadBidInput } from "./models/upload-bid-input.js";
export {
  uploadBidsInvalidBidResponseSchema,
  type UploadBidsInvalidBidResponse,
} from "./models/upload-bids-invalid-bid-response.js";
export {
  uploadBidsInvalidBidResponseErrorSchema,
  type UploadBidsInvalidBidResponseError,
} from "./models/upload-bids-invalid-bid-response-error.js";
export {
  upsertPartnerConfigurationFeaturesRequestSchema,
  type UpsertPartnerConfigurationFeaturesRequest,
} from "./models/upsert-partner-configuration-features-request.js";
export { userSchema, type User } from "./models/user.js";
export { user1Schema, type User1 } from "./models/user1.js";
export { user2Schema, type User2 } from "./models/user2.js";
export { user3Schema, type User3 } from "./models/user3.js";
export { user4Schema, type User4 } from "./models/unions/user4.js";

export {
  CoreError as JusttrackError,
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
