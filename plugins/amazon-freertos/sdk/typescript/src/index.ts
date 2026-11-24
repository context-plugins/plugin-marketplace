export { AmazonFreeRtosClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { OtaUpdates } from "./resources/ota-updates.js";
export { SoftwareConfigurations } from "./resources/software-configurations.js";
export { Tags } from "./resources/tags.js";

export {
  createOtaUpdateRequestSchema,
  type CreateOtaUpdateRequest,
} from "./models/create-ota-update-request.js";
export {
  createSoftwareConfigurationRequestSchema,
  type CreateSoftwareConfigurationRequest,
} from "./models/create-software-configuration-request.js";
export { errorResponseSchema, type ErrorResponse } from "./models/error-response.js";
export { errorResponseErrorSchema, type ErrorResponseError } from "./models/error-response-error.js";
export { otaUpdateSchema, type OtaUpdate } from "./models/ota-update.js";
export { otaUpdateInfoSchema, type OtaUpdateInfo } from "./models/ota-update-info.js";
export { OtaUpdateStatus, otaUpdateStatusSchema } from "./models/ota-update-status.js";
export { otaUpdateSummarySchema, type OtaUpdateSummary } from "./models/ota-update-summary.js";
export { otaUpdatesResponseSchema, type OtaUpdatesResponse } from "./models/ota-updates-response.js";
export { Protocol, protocolSchema } from "./models/protocol.js";
export {
  softwareConfigurationRecordsResponseSchema,
  type SoftwareConfigurationRecordsResponse,
} from "./models/software-configuration-records-response.js";
export { softwareConfigurationSchema, type SoftwareConfiguration } from "./models/software-configuration.js";
export {
  softwareConfigurationSummarySchema,
  type SoftwareConfigurationSummary,
} from "./models/software-configuration-summary.js";
export { Status, statusSchema } from "./models/status.js";
export { tagsRequestSchema, type TagsRequest } from "./models/tags-request.js";
export { tagsResponseSchema, type TagsResponse } from "./models/tags-response.js";
export { TargetSelection, targetSelectionSchema } from "./models/target-selection.js";
export {
  updateSoftwareConfigurationRequestSchema,
  type UpdateSoftwareConfigurationRequest,
} from "./models/update-software-configuration-request.js";

export {
  CoreError as AmazonFreeRtosError,
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
