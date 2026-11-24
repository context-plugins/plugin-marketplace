export { LastDatabaseClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { datumSchema, type Datum } from "./models/unions/datum.js";
export { emailLeadSchema, type EmailLead } from "./models/email-lead.js";
export { errorResponseSchema, type ErrorResponse } from "./models/error-response.js";
export { errorResponseErrorSchema, type ErrorResponseError } from "./models/error-response-error.js";
export { faxLeadSchema, type FaxLead } from "./models/fax-lead.js";
export { idSchema, type Id } from "./models/unions/id.js";
export { leadSearchResponseSchema, type LeadSearchResponse } from "./models/lead-search-response.js";
export { optinStatusSchema, type OptinStatus } from "./models/unions/optin-status.js";
export { packageIdSchema, type PackageId } from "./models/unions/package-id.js";
export { phoneLeadSchema, type PhoneLead } from "./models/phone-lead.js";
export { Type, typeSchema } from "./models/type.js";

export {
  CoreError as LastDatabaseError,
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
