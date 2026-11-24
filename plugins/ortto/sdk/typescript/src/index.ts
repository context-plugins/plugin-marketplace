export { OrttoClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { ServerEnvironment } from "./servers.js";

export { Accounts } from "./resources/accounts.js";
export { Activities } from "./resources/activities.js";
export { Campaigns } from "./resources/campaigns.js";
export { People } from "./resources/people.js";
export { Tags } from "./resources/tags.js";
export { Transactional } from "./resources/transactional.js";

export { accountSchema, type Account } from "./models/account.js";
export { accountsMergeRequestSchema, type AccountsMergeRequest } from "./models/accounts-merge-request.js";
export {
  activitiesCreateRequestSchema,
  type ActivitiesCreateRequest,
} from "./models/activities-create-request.js";
export { activitySchema, type Activity } from "./models/activity.js";
export { attachmentSchema, type Attachment } from "./models/attachment.js";
export {
  campaignCalendarRequestSchema,
  type CampaignCalendarRequest,
} from "./models/campaign-calendar-request.js";
export {
  campaignReportsGetRequestSchema,
  type CampaignReportsGetRequest,
} from "./models/campaign-reports-get-request.js";
export { errorSchema, type Error } from "./models/error.js";
export { errorErrorSchema, type ErrorError } from "./models/error-error.js";
export { FindStrategy, findStrategySchema } from "./models/find-strategy.js";
export { MergeStrategy, mergeStrategySchema } from "./models/merge-strategy.js";
export { personSchema, type Person } from "./models/person.js";
export { personDeleteRequestSchema, type PersonDeleteRequest } from "./models/person-delete-request.js";
export {
  personGetByIdsRequestSchema,
  type PersonGetByIdsRequest,
} from "./models/person-get-by-ids-request.js";
export { person1Schema, type Person1 } from "./models/person1.js";
export { personGetRequestSchema, type PersonGetRequest } from "./models/person-get-request.js";
export { personGetResponseSchema, type PersonGetResponse } from "./models/person-get-response.js";
export { personInputSchema, type PersonInput } from "./models/person-input.js";
export { personMergeRequestSchema, type PersonMergeRequest } from "./models/person-merge-request.js";
export { personMergeResponseSchema, type PersonMergeResponse } from "./models/person-merge-response.js";
export {
  personOrttoTransactionalApiSchema,
  type PersonOrttoTransactionalApi,
} from "./models/person-ortto-transactional-api.js";
export { SortOrder, sortOrderSchema } from "./models/sort-order.js";
export { tagsGetRequestSchema, type TagsGetRequest } from "./models/tags-get-request.js";
export { tagsGetResponseSchema, type TagsGetResponse } from "./models/tags-get-response.js";
export {
  transactionalSendSmsRequestSchema,
  type TransactionalSendSmsRequest,
} from "./models/transactional-send-sms-request.js";
export {
  transactionalSendRequestSchema,
  type TransactionalSendRequest,
} from "./models/transactional-send-request.js";

export {
  CoreError as OrttoError,
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
