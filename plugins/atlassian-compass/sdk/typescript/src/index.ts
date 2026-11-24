export { AtlassianCompassClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { BasicAuthCredentials } from "./core/auth/credentials.js";

export { AttachmentRestController } from "./resources/attachment-rest-controller.js";
export { EntitlementRestController } from "./resources/entitlement-rest-controller.js";
export { Events } from "./resources/events.js";
export { IncomingWebhooksRestController } from "./resources/incoming-webhooks-rest-controller.js";
export { Metrics } from "./resources/metrics.js";
export { PackageDependencies } from "./resources/package-dependencies.js";

export { attachmentSchema, type Attachment } from "./models/attachment.js";
export { Category, categorySchema } from "./models/category.js";
export {
  compassV1MetricsRequestSchema,
  type CompassV1MetricsRequest,
} from "./models/unions/compass-v1-metrics-request.js";
export {
  compassAlertEventPropertiesInputDtoSchema,
  type CompassAlertEventPropertiesInputDto,
} from "./models/compass-alert-event-properties-input-dto.js";
export {
  compassBuildEventPipelineInputDtoSchema,
  type CompassBuildEventPipelineInputDto,
} from "./models/compass-build-event-pipeline-input-dto.js";
export {
  compassBuildEventPropertiesInputDtoSchema,
  type CompassBuildEventPropertiesInputDto,
} from "./models/compass-build-event-properties-input-dto.js";
export {
  compassCreateAlertEventInputDtoSchema,
  type CompassCreateAlertEventInputDto,
} from "./models/compass-create-alert-event-input-dto.js";
export {
  compassCreateBuildEventInputDtoSchema,
  type CompassCreateBuildEventInputDto,
} from "./models/compass-create-build-event-input-dto.js";
export {
  compassCreateCustomEventInputDtoSchema,
  type CompassCreateCustomEventInputDto,
} from "./models/compass-create-custom-event-input-dto.js";
export {
  compassCreateDeploymentEventInputDtoSchema,
  type CompassCreateDeploymentEventInputDto,
} from "./models/compass-create-deployment-event-input-dto.js";
export {
  compassCreateDeploymentEventPropertiesInputDtoSchema,
  type CompassCreateDeploymentEventPropertiesInputDto,
} from "./models/compass-create-deployment-event-properties-input-dto.js";
export {
  compassCreateFlagEventInputDtoSchema,
  type CompassCreateFlagEventInputDto,
} from "./models/compass-create-flag-event-input-dto.js";
export {
  compassCreateFlagEventPropertiesInputDtoSchema,
  type CompassCreateFlagEventPropertiesInputDto,
} from "./models/compass-create-flag-event-properties-input-dto.js";
export {
  compassCreateIncidentEventInputDtoSchema,
  type CompassCreateIncidentEventInputDto,
} from "./models/compass-create-incident-event-input-dto.js";
export {
  compassCreateIncidentEventPropertiesInputDtoSchema,
  type CompassCreateIncidentEventPropertiesInputDto,
} from "./models/compass-create-incident-event-properties-input-dto.js";
export {
  compassCreateLifecycleEventInputDtoSchema,
  type CompassCreateLifecycleEventInputDto,
} from "./models/compass-create-lifecycle-event-input-dto.js";
export {
  compassCreatePullRequestEventInputDtoSchema,
  type CompassCreatePullRequestEventInputDto,
} from "./models/compass-create-pull-request-event-input-dto.js";
export {
  compassCreatePushEventInputDtoSchema,
  type CompassCreatePushEventInputDto,
} from "./models/compass-create-push-event-input-dto.js";
export {
  compassCreateVulnerabilityEventInputDtoSchema,
  type CompassCreateVulnerabilityEventInputDto,
} from "./models/compass-create-vulnerability-event-input-dto.js";
export {
  compassCreateVulnerabilityEventPropertiesInputDtoSchema,
  type CompassCreateVulnerabilityEventPropertiesInputDto,
} from "./models/compass-create-vulnerability-event-properties-input-dto.js";
export {
  compassCustomEventPropertiesInputDtoSchema,
  type CompassCustomEventPropertiesInputDto,
} from "./models/compass-custom-event-properties-input-dto.js";
export {
  compassDeploymentEventEnvironmentInputDtoSchema,
  type CompassDeploymentEventEnvironmentInputDto,
} from "./models/compass-deployment-event-environment-input-dto.js";
export {
  compassDeploymentEventPipelineInputDtoSchema,
  type CompassDeploymentEventPipelineInputDto,
} from "./models/compass-deployment-event-pipeline-input-dto.js";
export { compassEventInputDtoSchema, type CompassEventInputDto } from "./models/compass-event-input-dto.js";
export {
  compassIncidentEventSeverityInputDtoSchema,
  type CompassIncidentEventSeverityInputDto,
} from "./models/compass-incident-event-severity-input-dto.js";
export {
  compassLifecycleEventInputPropertiesDtoSchema,
  type CompassLifecycleEventInputPropertiesDto,
} from "./models/compass-lifecycle-event-input-properties-dto.js";
export {
  compassPullRequestInputPropertiesDtoSchema,
  type CompassPullRequestInputPropertiesDto,
} from "./models/compass-pull-request-input-properties-dto.js";
export {
  compassPullRequestInputPropertiesDto1Schema,
  type CompassPullRequestInputPropertiesDto1,
} from "./models/compass-pull-request-input-properties-dto1.js";
export {
  compassPushEventAuthorInputDtoSchema,
  type CompassPushEventAuthorInputDto,
} from "./models/compass-push-event-author-input-dto.js";
export {
  compassPushEventInputPropertiesDtoSchema,
  type CompassPushEventInputPropertiesDto,
} from "./models/compass-push-event-input-properties-dto.js";
export {
  compassVulnerabilityEventSeverityInputDtoSchema,
  type CompassVulnerabilityEventSeverityInputDto,
} from "./models/compass-vulnerability-event-severity-input-dto.js";
export {
  compassVulnerabilityEventSeverityInputDto2Schema,
  type CompassVulnerabilityEventSeverityInputDto2,
} from "./models/compass-vulnerability-event-severity-input-dto2.js";
export {
  createStreamlinedEventRequestSchema,
  type CreateStreamlinedEventRequest,
} from "./models/create-streamlined-event-request.js";
export { entitlementRequestDtoSchema, type EntitlementRequestDto } from "./models/entitlement-request-dto.js";
export {
  entitlementResponseDtoSchema,
  type EntitlementResponseDto,
} from "./models/entitlement-response-dto.js";
export { entitlementResultDtoSchema, type EntitlementResultDto } from "./models/entitlement-result-dto.js";
export { errorDtoSchema, type ErrorDto } from "./models/error-dto.js";
export { errorResponseDtoSchema, type ErrorResponseDto } from "./models/error-response-dto.js";
export {
  errorResponseDtoErrorSchema,
  type ErrorResponseDtoError,
} from "./models/error-response-dto-error.js";
export { Icon, iconSchema } from "./models/icon.js";
export {
  insertMetricByMetricDefinitionRequestDtoSchema,
  type InsertMetricByMetricDefinitionRequestDto,
} from "./models/insert-metric-by-metric-definition-request-dto.js";
export {
  insertMetricByMetricSourceRequestDtoSchema,
  type InsertMetricByMetricSourceRequestDto,
} from "./models/insert-metric-by-metric-source-request-dto.js";
export {
  insertMetricRequestDtoSchema,
  type InsertMetricRequestDto,
} from "./models/insert-metric-request-dto.js";
export {
  insertMetricResponseDtoSchema,
  type InsertMetricResponseDto,
} from "./models/insert-metric-response-dto.js";
export {
  insertMetricResponseDtoErrorSchema,
  type InsertMetricResponseDtoError,
} from "./models/insert-metric-response-dto-error.js";
export { Level, levelSchema } from "./models/level.js";
export { Level1, level1Schema } from "./models/level1.js";
export { Priority, prioritySchema } from "./models/priority.js";
export { Stage, stageSchema } from "./models/stage.js";
export { State, stateSchema } from "./models/state.js";
export { State1, state1Schema } from "./models/state1.js";
export { State2, state2Schema } from "./models/state2.js";
export { State3, state3Schema } from "./models/state3.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";

export {
  CoreError as AtlassianCompassError,
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
