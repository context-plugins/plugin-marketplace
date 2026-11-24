export { CelestiaClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Blob } from "./resources/blob.js";
export { Contact } from "./resources/contact.js";
export { HealthApi } from "./resources/health-api.js";
export { Subscribe } from "./resources/subscribe.js";

export { contactInputSchema, type ContactInput } from "./models/contact-input.js";
export { errorSchema, type Error } from "./models/error.js";
export {
  errorCelestiaWebsiteContactApiSchema,
  type ErrorCelestiaWebsiteContactApi,
} from "./models/error-celestia-website-contact-api.js";
export { errorErrorSchema, type ErrorError } from "./models/error-error.js";
export { healthSchema, type Health } from "./models/health.js";
export { idSchema, type Id } from "./models/unions/id.js";
export { jsonRpcRequestSchema, type JsonRpcRequest } from "./models/json-rpc-request.js";
export { jsonRpcResponseSchema, type JsonRpcResponse } from "./models/json-rpc-response.js";
export { Method, methodSchema } from "./models/method.js";
export { subscriptionInputSchema, type SubscriptionInput } from "./models/subscription-input.js";
export { successSchema, type Success } from "./models/success.js";

export {
  CoreError as CelestiaError,
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
