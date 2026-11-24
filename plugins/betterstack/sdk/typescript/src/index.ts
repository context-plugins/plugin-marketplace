export { BetterStackClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { ServerEnvironment } from "./servers.js";

export { Heartbeats } from "./resources/heartbeats.js";
export { Incidents } from "./resources/incidents.js";
export { Monitors } from "./resources/monitors.js";
export { StatusPages } from "./resources/status-pages.js";

export { heartbeatCreateSchema, type HeartbeatCreate } from "./models/heartbeat-create.js";
export { incidentCreateSchema, type IncidentCreate } from "./models/incident-create.js";
export { jsonApiResourceSchema, type JsonApiResource } from "./models/json-api-resource.js";
export { monitorCreateSchema, type MonitorCreate } from "./models/monitor-create.js";
export { monitorListSchema, type MonitorList } from "./models/monitor-list.js";
export { monitorResourceSchema, type MonitorResource } from "./models/monitor-resource.js";
export { MonitorType, monitorTypeSchema } from "./models/monitor-type.js";
export { requestHeaderSchema, type RequestHeader } from "./models/request-header.js";
export { statusPageCreateSchema, type StatusPageCreate } from "./models/status-page-create.js";

export {
  CoreError as BetterStackError,
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
