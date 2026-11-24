export { ReadMeClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { BasicAuthCredentials, SecretProvider } from "./core/auth/credentials.js";

export { ServerEnvironment } from "./servers.js";

export { Analytics } from "./resources/analytics.js";
export { ApiKeys } from "./resources/api-keys.js";
export { ApIs } from "./resources/ap-is.js";
export { Branches } from "./resources/branches.js";
export { Categories } from "./resources/categories.js";
export { Changelog } from "./resources/changelog.js";
export { CustomPages } from "./resources/custom-pages.js";
export { Guides } from "./resources/guides.js";
export { Images } from "./resources/images.js";
export { Metrics } from "./resources/metrics.js";
export { Recipes } from "./resources/recipes.js";
export { Search } from "./resources/search.js";

export { groupSchema, type Group } from "./models/group.js";
export { metricsRequestSchema, type MetricsRequest } from "./models/metrics-request.js";

export {
  CoreError as ReadMeError,
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
