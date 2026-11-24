export { ClixClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { audienceSchema, type Audience } from "./models/audience.js";
export {
  clixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBodySchema,
  type ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody,
} from "./models/clix-external-service-create-or-update-users-properties-by-device-id-body.js";
export {
  clixExternalServiceSetProjectUserIdForDeviceBodySchema,
  type ClixExternalServiceSetProjectUserIdForDeviceBody,
} from "./models/clix-external-service-set-project-user-id-for-device-body.js";
export {
  createEventsRequestEventForRequestSchema,
  type CreateEventsRequestEventForRequest,
} from "./models/create-events-request-event-for-request.js";
export {
  createOrUpdateDevicesRequestDeviceForRequestSchema,
  type CreateOrUpdateDevicesRequestDeviceForRequest,
} from "./models/create-or-update-devices-request-device-for-request.js";
export { targetSchema, type Target } from "./models/target.js";
export {
  clixexternalv1DeliveryResultSchema,
  type Clixexternalv1DeliveryResult,
} from "./models/clixexternalv1-delivery-result.js";
export {
  clixexternalv1DeliveryResultAdditionalParamsSchema,
  type Clixexternalv1DeliveryResultAdditionalParams,
} from "./models/clixexternalv1-delivery-result-additional-params.js";
export {
  clixexternalv1DeliveryResultAdditionalParams2Schema,
  type Clixexternalv1DeliveryResultAdditionalParams2,
} from "./models/clixexternalv1-delivery-result-additional-params2.js";
export {
  Clixexternalv1DeliveryResultStatus,
  clixexternalv1DeliveryResultStatusSchema,
} from "./models/clixexternalv1-delivery-result-status.js";
export {
  Clixexternalv1DeliveryResultStatus2,
  clixexternalv1DeliveryResultStatus2Schema,
} from "./models/clixexternalv1-delivery-result-status2.js";
export { clixexternalv1DeviceSchema, type Clixexternalv1Device } from "./models/clixexternalv1-device.js";
export {
  clixexternalv1EventPropertySchema,
  type Clixexternalv1EventProperty,
} from "./models/clixexternalv1-event-property.js";
export {
  clixexternalv1HealthCheckResponseSchema,
  type Clixexternalv1HealthCheckResponse,
} from "./models/clixexternalv1-health-check-response.js";
export {
  clixexternalv1LiveActivitySchema,
  type Clixexternalv1LiveActivity,
} from "./models/clixexternalv1-live-activity.js";
export {
  clixexternalv1LiveActivityAlertSchema,
  type Clixexternalv1LiveActivityAlert,
} from "./models/clixexternalv1-live-activity-alert.js";
export {
  clixexternalv1LiveActivityAlert1Schema,
  type Clixexternalv1LiveActivityAlert1,
} from "./models/clixexternalv1-live-activity-alert1.js";
export {
  clixexternalv1LiveActivityTargetSchema,
  type Clixexternalv1LiveActivityTarget,
} from "./models/clixexternalv1-live-activity-target.js";
export {
  clixexternalv1LiveActivityTarget1Schema,
  type Clixexternalv1LiveActivityTarget1,
} from "./models/clixexternalv1-live-activity-target1.js";
export {
  clixexternalv1LiveActivityTarget2Schema,
  type Clixexternalv1LiveActivityTarget2,
} from "./models/clixexternalv1-live-activity-target2.js";
export {
  clixexternalv1LiveActivityTarget3Schema,
  type Clixexternalv1LiveActivityTarget3,
} from "./models/unions/clixexternalv1-live-activity-target3.js";
export {
  clixexternalv1LiveActivityTarget31Schema,
  type Clixexternalv1LiveActivityTarget31,
} from "./models/unions/clixexternalv1-live-activity-target31.js";
export {
  clixexternalv1PushNotificationSchema,
  type Clixexternalv1PushNotification,
} from "./models/clixexternalv1-push-notification.js";
export {
  clixexternalv1PushNotificationTargetSchema,
  type Clixexternalv1PushNotificationTarget,
} from "./models/clixexternalv1-push-notification-target.js";
export {
  clixexternalv1PushNotificationTarget1Schema,
  type Clixexternalv1PushNotificationTarget1,
} from "./models/clixexternalv1-push-notification-target1.js";
export {
  clixexternalv1PushNotificationTarget2Schema,
  type Clixexternalv1PushNotificationTarget2,
} from "./models/clixexternalv1-push-notification-target2.js";
export {
  clixexternalv1PushNotificationTarget3Schema,
  type Clixexternalv1PushNotificationTarget3,
} from "./models/unions/clixexternalv1-push-notification-target3.js";
export {
  clixexternalv1PushNotificationTarget31Schema,
  type Clixexternalv1PushNotificationTarget31,
} from "./models/unions/clixexternalv1-push-notification-target31.js";
export {
  clixexternalv1UserPropertySchema,
  type Clixexternalv1UserProperty,
} from "./models/clixexternalv1-user-property.js";
export {
  Clixexternalv1UserPropertyType,
  clixexternalv1UserPropertyTypeSchema,
} from "./models/clixexternalv1-user-property-type.js";
export { protobufAnySchema, type ProtobufAny } from "./models/protobuf-any.js";
export { rpcStatusSchema, type RpcStatus } from "./models/rpc-status.js";
export { rpcStatusErrorSchema, type RpcStatusError } from "./models/rpc-status-error.js";
export {
  v1CreateEventsRequestSchema,
  type V1CreateEventsRequest,
} from "./models/v1-create-events-request.js";
export {
  v1CreateEventsResponseSchema,
  type V1CreateEventsResponse,
} from "./models/v1-create-events-response.js";
export {
  v1CreateOrUpdateDevicesRequestSchema,
  type V1CreateOrUpdateDevicesRequest,
} from "./models/v1-create-or-update-devices-request.js";
export {
  v1CreateOrUpdateDevicesResponseSchema,
  type V1CreateOrUpdateDevicesResponse,
} from "./models/v1-create-or-update-devices-response.js";
export {
  v1CreateOrUpdateUsersPropertiesByDeviceIdResponseSchema,
  type V1CreateOrUpdateUsersPropertiesByDeviceIdResponse,
} from "./models/v1-create-or-update-users-properties-by-device-id-response.js";
export { v1CreateUserRequestSchema, type V1CreateUserRequest } from "./models/v1-create-user-request.js";
export { v1CreateUserResponseSchema, type V1CreateUserResponse } from "./models/v1-create-user-response.js";
export { v1EventSchema, type V1Event } from "./models/v1-event.js";
export {
  v1SendPushNotificationsRequestSchema,
  type V1SendPushNotificationsRequest,
} from "./models/v1-send-push-notifications-request.js";
export {
  v1SendPushNotificationsResponseSchema,
  type V1SendPushNotificationsResponse,
} from "./models/v1-send-push-notifications-response.js";
export {
  v1SetProjectUserIdForDeviceResponseSchema,
  type V1SetProjectUserIdForDeviceResponse,
} from "./models/v1-set-project-user-id-for-device-response.js";
export {
  v1StartLiveActivitiesRequestSchema,
  type V1StartLiveActivitiesRequest,
} from "./models/v1-start-live-activities-request.js";
export {
  v1StartLiveActivitiesResponseSchema,
  type V1StartLiveActivitiesResponse,
} from "./models/v1-start-live-activities-response.js";
export {
  v1TriggerCampaignRequestSchema,
  type V1TriggerCampaignRequest,
} from "./models/v1-trigger-campaign-request.js";
export {
  v1TriggerCampaignResponseSchema,
  type V1TriggerCampaignResponse,
} from "./models/v1-trigger-campaign-response.js";
export { v1UpdateUserRequestSchema, type V1UpdateUserRequest } from "./models/v1-update-user-request.js";
export { v1UpdateUserResponseSchema, type V1UpdateUserResponse } from "./models/v1-update-user-response.js";

export {
  CoreError as ClixError,
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
