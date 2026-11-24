export { MrScraperClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Analytic } from "./resources/analytic.js";
export { Auth } from "./resources/auth.js";
export { Gateway } from "./resources/gateway.js";
export { Jobs } from "./resources/jobs.js";
export { Proxies } from "./resources/proxies.js";
export { Results } from "./resources/results.js";
export { Storage } from "./resources/storage.js";
export { Tasks } from "./resources/tasks.js";

export { dataSchema, type Data } from "./models/data.js";
export { data1Schema, type Data1 } from "./models/data1.js";
export {
  getApiV1ProxiesUserRequestsBandwidthResponseSchema,
  type GetApiV1ProxiesUserRequestsBandwidthResponse,
} from "./models/get-api-v1-proxies-user-requests-bandwidth-response.js";
export {
  getApiV1ResultsResultidResponseSchema,
  type GetApiV1ResultsResultidResponse,
} from "./models/get-api-v1-results-resultid-response.js";
export { jobsResponseSchema, type JobsResponse } from "./models/jobs-response.js";
export { jobsResponse1Schema, type JobsResponse1 } from "./models/jobs-response1.js";
export { responseSchema, type Response } from "./models/response.js";
export { storage400ErrorSchema, type Storage400Error } from "./models/storage400-error.js";
export { storage400Error1Schema, type Storage400Error1 } from "./models/storage400-error1.js";
export { storage403ErrorSchema, type Storage403Error } from "./models/storage403-error.js";
export { storage403Error1Schema, type Storage403Error1 } from "./models/storage403-error1.js";
export { storage404ErrorSchema, type Storage404Error } from "./models/storage404-error.js";
export { storage404Error1Schema, type Storage404Error1 } from "./models/storage404-error1.js";
export { storage503ErrorSchema, type Storage503Error } from "./models/storage503-error.js";
export { storage503Error1Schema, type Storage503Error1 } from "./models/storage503-error1.js";
export {
  subscriptionAccountsResponseSchema,
  type SubscriptionAccountsResponse,
} from "./models/subscription-accounts-response.js";
export { taskSchema, type Task } from "./models/task.js";
export { tasksBulkResponseSchema, type TasksBulkResponse } from "./models/tasks-bulk-response.js";
export { tasksBulkResponse1Schema, type TasksBulkResponse1 } from "./models/tasks-bulk-response1.js";
export { tasksResponseSchema, type TasksResponse } from "./models/tasks-response.js";
export { tasksResponse1Schema, type TasksResponse1 } from "./models/tasks-response1.js";
export { tasksResponse2Schema, type TasksResponse2 } from "./models/tasks-response2.js";
export { tasksResponse3Schema, type TasksResponse3 } from "./models/tasks-response3.js";
export { tasksResponse5Schema, type TasksResponse5 } from "./models/tasks-response5.js";
export { tasksStatusResponseSchema, type TasksStatusResponse } from "./models/tasks-status-response.js";
export { tasksStatusResponse1Schema, type TasksStatusResponse1 } from "./models/tasks-status-response1.js";
export { tasksStatusResponse2Schema, type TasksStatusResponse2 } from "./models/tasks-status-response2.js";
export { apiTPaginationMetaSchema, type ApiTPaginationMeta } from "./models/api-tpagination-meta.js";
export {
  authSubscriptionAccountSchema,
  type AuthSubscriptionAccount,
} from "./models/auth-subscription-account.js";
export { authUserSchema, type AuthUser } from "./models/auth-user.js";
export {
  gatewayAsyncTaskResponseSchema,
  type GatewayAsyncTaskResponse,
} from "./models/gateway-async-task-response.js";
export { gatewayRequestBodySchema, type GatewayRequestBody } from "./models/gateway-request-body.js";
export { jobJobSchema, type JobJob } from "./models/job-job.js";
export { JobJobStatus, jobJobStatusSchema } from "./models/job-job-status.js";
export {
  taskBatchCreateRequestSchema,
  type TaskBatchCreateRequest,
} from "./models/task-batch-create-request.js";
export {
  taskBatchCreateResponseSchema,
  type TaskBatchCreateResponse,
} from "./models/task-batch-create-response.js";
export {
  taskBatchUpdateRequestSchema,
  type TaskBatchUpdateRequest,
} from "./models/task-batch-update-request.js";
export {
  taskBatchUpdateTaskSwaggerSchema,
  type TaskBatchUpdateTaskSwagger,
} from "./models/task-batch-update-task-swagger.js";
export { TaskBrowserType, taskBrowserTypeSchema } from "./models/task-browser-type.js";
export { TaskDeviceOs, taskDeviceOsSchema } from "./models/task-device-os.js";
export { taskTaskSchema, type TaskTask } from "./models/task-task.js";
export {
  taskTaskQueuedResponseSchema,
  type TaskTaskQueuedResponse,
} from "./models/task-task-queued-response.js";
export { TaskTaskStatus, taskTaskStatusSchema } from "./models/task-task-status.js";
export { taskTaskSwaggerSchema, type TaskTaskSwagger } from "./models/task-task-swagger.js";
export {
  taskUpdateTaskStatusRequestSchema,
  type TaskUpdateTaskStatusRequest,
} from "./models/task-update-task-status-request.js";

export {
  CoreError as MrScraperError,
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
