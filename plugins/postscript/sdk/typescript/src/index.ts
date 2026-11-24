export { PostscriptClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Compliance } from "./resources/compliance.js";
export { Events } from "./resources/events.js";
export { Identity } from "./resources/identity.js";
export { Keywords } from "./resources/keywords.js";
export { Messages } from "./resources/messages.js";
export { Subscribers } from "./resources/subscribers.js";
export { Webhooks } from "./resources/webhooks.js";

export {
  apiV2ComplianceRedact403ErrorSchema,
  type ApiV2ComplianceRedact403Error,
} from "./models/api-v2-compliance-redact403-error.js";
export {
  apiV2ComplianceRedact403Error1Schema,
  type ApiV2ComplianceRedact403Error1,
} from "./models/api-v2-compliance-redact403-error1.js";
export {
  apiV2ComplianceRedactRequestSchema,
  type ApiV2ComplianceRedactRequest,
} from "./models/api-v2-compliance-redact-request.js";
export {
  apiV2ComplianceRedactResponseSchema,
  type ApiV2ComplianceRedactResponse,
} from "./models/api-v2-compliance-redact-response.js";
export {
  apiV2ComplianceUnsubscribe403ErrorSchema,
  type ApiV2ComplianceUnsubscribe403Error,
} from "./models/api-v2-compliance-unsubscribe403-error.js";
export {
  apiV2ComplianceUnsubscribe403Error1Schema,
  type ApiV2ComplianceUnsubscribe403Error1,
} from "./models/api-v2-compliance-unsubscribe403-error1.js";
export {
  apiV2ComplianceUnsubscribeRequestSchema,
  type ApiV2ComplianceUnsubscribeRequest,
} from "./models/api-v2-compliance-unsubscribe-request.js";
export {
  apiV2ComplianceUnsubscribeResponseSchema,
  type ApiV2ComplianceUnsubscribeResponse,
} from "./models/api-v2-compliance-unsubscribe-response.js";
export { apiV2EventsRequestSchema, type ApiV2EventsRequest } from "./models/api-v2-events-request.js";
export { apiV2EventsResponseSchema, type ApiV2EventsResponse } from "./models/api-v2-events-response.js";
export {
  apiV2Keywords403ErrorSchema,
  type ApiV2Keywords403Error,
} from "./models/api-v2-keywords403-error.js";
export {
  apiV2Keywords403Error1Schema,
  type ApiV2Keywords403Error1,
} from "./models/api-v2-keywords403-error1.js";
export {
  apiV2Keywords404ErrorSchema,
  type ApiV2Keywords404Error,
} from "./models/api-v2-keywords404-error.js";
export {
  apiV2Keywords404Error1Schema,
  type ApiV2Keywords404Error1,
} from "./models/api-v2-keywords404-error1.js";
export {
  apiV2KeywordsResponseSchema,
  type ApiV2KeywordsResponse,
} from "./models/api-v2-keywords-response.js";
export {
  apiV2KeywordsResponse1Schema,
  type ApiV2KeywordsResponse1,
} from "./models/api-v2-keywords-response1.js";
export { apiV2Me400ErrorSchema, type ApiV2Me400Error } from "./models/api-v2-me400-error.js";
export { apiV2Me400Error1Schema, type ApiV2Me400Error1 } from "./models/api-v2-me400-error1.js";
export { apiV2MeResponseSchema, type ApiV2MeResponse } from "./models/api-v2-me-response.js";
export {
  apiV2MessageRequestsRequestSchema,
  type ApiV2MessageRequestsRequest,
} from "./models/api-v2-message-requests-request.js";
export {
  apiV2MessageRequestsResponseSchema,
  type ApiV2MessageRequestsResponse,
} from "./models/api-v2-message-requests-response.js";
export {
  apiV2SentMessages400ErrorSchema,
  type ApiV2SentMessages400Error,
} from "./models/api-v2-sent-messages400-error.js";
export {
  apiV2SentMessages400Error1Schema,
  type ApiV2SentMessages400Error1,
} from "./models/api-v2-sent-messages400-error1.js";
export {
  apiV2SentMessagesResponseSchema,
  type ApiV2SentMessagesResponse,
} from "./models/api-v2-sent-messages-response.js";
export {
  apiV2SubscribersRequestSchema,
  type ApiV2SubscribersRequest,
} from "./models/api-v2-subscribers-request.js";
export {
  apiV2WebhooksExampleResponseSchema,
  type ApiV2WebhooksExampleResponse,
} from "./models/api-v2-webhooks-example-response.js";
export { apiV2WebhooksRequestSchema, type ApiV2WebhooksRequest } from "./models/api-v2-webhooks-request.js";
export {
  apiV2WebhooksRequest1Schema,
  type ApiV2WebhooksRequest1,
} from "./models/api-v2-webhooks-request1.js";
export {
  apiV2WebhooksTest400ErrorSchema,
  type ApiV2WebhooksTest400Error,
} from "./models/api-v2-webhooks-test400-error.js";
export {
  apiV2WebhooksTest400Error1Schema,
  type ApiV2WebhooksTest400Error1,
} from "./models/api-v2-webhooks-test400-error1.js";
export {
  apiV2WebhooksTestRequestSchema,
  type ApiV2WebhooksTestRequest,
} from "./models/api-v2-webhooks-test-request.js";
export {
  apiV2WebhooksTestResponseSchema,
  type ApiV2WebhooksTestResponse,
} from "./models/api-v2-webhooks-test-response.js";
export {
  apiV2WebhooksTokenResponseSchema,
  type ApiV2WebhooksTokenResponse,
} from "./models/api-v2-webhooks-token-response.js";
export { Category, categorySchema } from "./models/category.js";
export { errorSchema, type Error } from "./models/error.js";
export {
  errorPostscriptPartnerIdentityApiSchema,
  type ErrorPostscriptPartnerIdentityApi,
} from "./models/error-postscript-partner-identity-api.js";
export { Event, eventSchema } from "./models/event.js";
export { Event2, event2Schema } from "./models/event2.js";
export { eventDataSchema, type EventData } from "./models/event-data.js";
export { keywordSchema, type Keyword } from "./models/keyword.js";
export { propertiesSchema, type Properties } from "./models/properties.js";
export { sentMessageSchema, type SentMessage } from "./models/sent-message.js";
export { Event1, event1Schema } from "./models/event1.js";

export {
  CoreError as PostscriptError,
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
