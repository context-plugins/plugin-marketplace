export { BrowserStackClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { BasicAuthCredentials } from "./core/auth/credentials.js";

export { AccessKey } from "./resources/access-key.js";
export { Browsers } from "./resources/browsers.js";
export { Builds } from "./resources/builds.js";
export { PlanApi } from "./resources/plan-api.js";
export { Projects } from "./resources/projects.js";
export { Sessions } from "./resources/sessions.js";

export {
  automateBuildsJsonRequestSchema,
  type AutomateBuildsJsonRequest,
} from "./models/automate-builds-json-request.js";
export {
  automateProjectsJsonRequestSchema,
  type AutomateProjectsJsonRequest,
} from "./models/automate-projects-json-request.js";
export {
  automateRecycleKeyJsonResponseSchema,
  type AutomateRecycleKeyJsonResponse,
} from "./models/automate-recycle-key-json-response.js";
export {
  automateSessionsJsonRequestSchema,
  type AutomateSessionsJsonRequest,
} from "./models/automate-sessions-json-request.js";
export { browserSchema, type Browser } from "./models/browser.js";
export { buildSchema, type Build } from "./models/build.js";
export { planSchema, type Plan } from "./models/plan.js";
export { projectSchema, type Project } from "./models/project.js";
export { projectDetailSchema, type ProjectDetail } from "./models/project-detail.js";
export { sessionSchema, type Session } from "./models/session.js";
export { statusMessageSchema, type StatusMessage } from "./models/status-message.js";
export {
  StatusBrowserStackAutomateRestSessionsApi,
  statusBrowserStackAutomateRestSessionsApiSchema,
} from "./models/status-browser-stack-automate-rest-sessions-api.js";
export { Status, statusSchema } from "./models/status.js";

export {
  CoreError as BrowserStackError,
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
