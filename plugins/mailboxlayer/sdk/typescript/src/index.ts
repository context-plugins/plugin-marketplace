export { MailboxlayerClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { BulkCheck } from "./resources/bulk-check.js";
export { Check } from "./resources/check.js";

export { apiErrorModelSchema, type ApiErrorModel } from "./models/api-error-model.js";
export { apiErrorErrorSchema, type ApiErrorError } from "./models/api-error-error.js";
export { bulkCheckResponseSchema, type BulkCheckResponse } from "./models/unions/bulk-check-response.js";
export { checkResponseSchema, type CheckResponse } from "./models/unions/check-response.js";
export { detailSchema, type Detail } from "./models/detail.js";
export {
  emailValidationResponseSchema,
  type EmailValidationResponse,
} from "./models/email-validation-response.js";
export { errorSchema, type Error } from "./models/error.js";
export {
  requestValidationErrorSchema,
  type RequestValidationError,
} from "./models/request-validation-error.js";
export {
  requestValidationErrorErrorSchema,
  type RequestValidationErrorError,
} from "./models/request-validation-error-error.js";
export { CatchAll, catchAllSchema } from "./models/catch-all.js";
export { Format, formatSchema } from "./models/format.js";
export { Smtp, smtpSchema } from "./models/smtp.js";

export {
  CoreError as MailboxlayerError,
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
