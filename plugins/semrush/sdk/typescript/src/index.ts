export { SemrushClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { HermesPartnerApi } from "./resources/hermes-partner-api.js";
export { JwtIssuer } from "./resources/jwt-issuer.js";
export { PartnerService } from "./resources/partner-service.js";

export { dataSchema, type Data } from "./models/data.js";
export { data1Schema, type Data1 } from "./models/data1.js";
export { data2Schema, type Data2 } from "./models/data2.js";
export {
  dataSemrushPartnerServiceApiSchema,
  type DataSemrushPartnerServiceApi,
} from "./models/data-semrush-partner-service-api.js";
export { subscriptionSchema, type Subscription } from "./models/subscription.js";
export { actionNotificationSchema, type ActionNotification } from "./models/action-notification.js";
export {
  appSubscriptionsResponseSchema,
  type AppSubscriptionsResponse,
} from "./models/app-subscriptions-response.js";
export {
  appUserSubscriptionStatusResponseSchema,
  type AppUserSubscriptionStatusResponse,
} from "./models/app-user-subscription-status-response.js";
export { createEventRequestSchema, type CreateEventRequest } from "./models/create-event-request.js";
export { eventActionSchema, type EventAction } from "./models/event-action.js";
export { eventAttachmentSchema, type EventAttachment } from "./models/event-attachment.js";
export { eventResponseSchema, type EventResponse } from "./models/event-response.js";
export { EventState, eventStateSchema } from "./models/event-state.js";
export { issuerJwtRequestSchema, type IssuerJwtRequest } from "./models/issuer-jwt-request.js";
export { issuerJwtResponseSchema, type IssuerJwtResponse } from "./models/issuer-jwt-response.js";
export { responseMetaSchema, type ResponseMeta } from "./models/response-meta.js";
export { viewerActiveProductSchema, type ViewerActiveProduct } from "./models/viewer-active-product.js";
export { viewerStatusRequestSchema, type ViewerStatusRequest } from "./models/viewer-status-request.js";
export { viewerStatusResponseSchema, type ViewerStatusResponse } from "./models/viewer-status-response.js";

export {
  CoreError as SemrushError,
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
