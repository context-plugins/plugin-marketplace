export { HightouchClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Campaigns } from "./resources/campaigns.js";
export { DecisionEngine } from "./resources/decision-engine.js";
export { Destinations } from "./resources/destinations.js";
export { Events } from "./resources/events.js";
export { IdGraphs } from "./resources/id-graphs.js";
export { Idr } from "./resources/idr.js";
export { Models } from "./resources/models.js";
export { Signups } from "./resources/signups.js";
export { Sources } from "./resources/sources.js";
export { SyncSequences } from "./resources/sync-sequences.js";
export { SyncTemplates } from "./resources/sync-templates.js";
export { Syncs } from "./resources/syncs.js";

export { accountSchema, type Account } from "./models/account.js";
export {
  approveSyncDraftInputSchema,
  type ApproveSyncDraftInput,
} from "./models/approve-sync-draft-input.js";
export { audienceSizeJobSchema, type AudienceSizeJob } from "./models/audience-size-job.js";
export { AudienceSizeStatus, audienceSizeStatusSchema } from "./models/audience-size-status.js";
export { AudienceSizeStatus1, audienceSizeStatus1Schema } from "./models/audience-size-status1.js";
export {
  batchSendStatusRequestSchema,
  type BatchSendStatusRequest,
} from "./models/batch-send-status-request.js";
export {
  batchSendStatusResponseSchema,
  type BatchSendStatusResponse,
} from "./models/batch-send-status-response.js";
export {
  batchSendStatusResultSchema,
  type BatchSendStatusResult,
} from "./models/batch-send-status-result.js";
export { campaignRecipientSchema, type CampaignRecipient } from "./models/unions/campaign-recipient.js";
export { campaignSendResultSchema, type CampaignSendResult } from "./models/campaign-send-result.js";
export {
  campaignsTriggerResponseSchema,
  type CampaignsTriggerResponse,
} from "./models/unions/campaigns-trigger-response.js";
export { configSchema, type Config } from "./models/config.js";
export { createSignupRequestSchema, type CreateSignupRequest } from "./models/create-signup-request.js";
export { createSignupResponseSchema, type CreateSignupResponse } from "./models/create-signup-response.js";
export { cronScheduleSchema, type CronSchedule } from "./models/cron-schedule.js";
export { customSchema, type Custom } from "./models/custom.js";
export { dbtScheduleSchema, type DbtSchedule } from "./models/dbt-schedule.js";
export { dbtSchema, type Dbt } from "./models/dbt.js";
export { dbt1Schema, type Dbt1 } from "./models/dbt1.js";
export { dbtCloudSchema, type DbtCloud } from "./models/dbt-cloud.js";
export { dbtCloud1Schema, type DbtCloud1 } from "./models/dbt-cloud1.js";
export {
  decisionEngineFlowMessages500ErrorSchema,
  type DecisionEngineFlowMessages500Error,
} from "./models/decision-engine-flow-messages500-error.js";
export {
  decisionEngineFlowMessagesClone500ErrorSchema,
  type DecisionEngineFlowMessagesClone500Error,
} from "./models/decision-engine-flow-messages-clone500-error.js";
export {
  decisionEngineFlowMessagesCloneResponseSchema,
  type DecisionEngineFlowMessagesCloneResponse,
} from "./models/unions/decision-engine-flow-messages-clone-response.js";
export {
  decisionEngineFlowMessagesCloneResponse1Schema,
  type DecisionEngineFlowMessagesCloneResponse1,
} from "./models/unions/decision-engine-flow-messages-clone-response1.js";
export {
  decisionEngineFlowMessagesResponseSchema,
  type DecisionEngineFlowMessagesResponse,
} from "./models/decision-engine-flow-messages-response.js";
export {
  decisionEngineFlowMessagesResponse1Schema,
  type DecisionEngineFlowMessagesResponse1,
} from "./models/unions/decision-engine-flow-messages-response1.js";
export {
  decisionEngineFlowMessagesResponse11Schema,
  type DecisionEngineFlowMessagesResponse11,
} from "./models/unions/decision-engine-flow-messages-response11.js";
export {
  decisionEngineFlowMessagesResponse13Schema,
  type DecisionEngineFlowMessagesResponse13,
} from "./models/unions/decision-engine-flow-messages-response13.js";
export {
  decisionEngineFlowMessagesResponse14Schema,
  type DecisionEngineFlowMessagesResponse14,
} from "./models/unions/decision-engine-flow-messages-response14.js";
export {
  decisionEngineFlowResponseSchema,
  type DecisionEngineFlowResponse,
} from "./models/unions/decision-engine-flow-response.js";
export {
  decisionEngineFlowRunResponseSchema,
  type DecisionEngineFlowRunResponse,
} from "./models/unions/decision-engine-flow-run-response.js";
export {
  decisionEngineFlowsResponseSchema,
  type DecisionEngineFlowsResponse,
} from "./models/decision-engine-flows-response.js";
export {
  decisionEngineFlowsResponse1Schema,
  type DecisionEngineFlowsResponse1,
} from "./models/unions/decision-engine-flows-response1.js";
export {
  decisionEngineErrorResponseSchema,
  type DecisionEngineErrorResponse,
} from "./models/decision-engine-error-response.js";
export {
  decisionEngineErrorResponseErrorSchema,
  type DecisionEngineErrorResponseError,
} from "./models/decision-engine-error-response-error.js";
export { decisionEngineFlowSchema, type DecisionEngineFlow } from "./models/decision-engine-flow.js";
export { decisionEngineMessageSchema, type DecisionEngineMessage } from "./models/decision-engine-message.js";
export {
  decisionEngineMessageCloneSchema,
  type DecisionEngineMessageClone,
} from "./models/decision-engine-message-clone.js";
export {
  decisionEngineMessageCreateSchema,
  type DecisionEngineMessageCreate,
} from "./models/decision-engine-message-create.js";
export {
  decisionEngineMessageGuardrailsSchema,
  type DecisionEngineMessageGuardrails,
} from "./models/decision-engine-message-guardrails.js";
export {
  decisionEngineMessageUpdateSchema,
  type DecisionEngineMessageUpdate,
} from "./models/decision-engine-message-update.js";
export {
  decisionEngineRunResponseSchema,
  type DecisionEngineRunResponse,
} from "./models/decision-engine-run-response.js";
export {
  decisionEngineVariableSchema,
  type DecisionEngineVariable,
} from "./models/decision-engine-variable.js";
export {
  decisionEngineVariableVariantSchema,
  type DecisionEngineVariableVariant,
} from "./models/decision-engine-variable-variant.js";
export { destinationSchema, type Destination } from "./models/destination.js";
export { destinationCreateSchema, type DestinationCreate } from "./models/destination-create.js";
export { destinationUpdateSchema, type DestinationUpdate } from "./models/destination-update.js";
export { destinationsResponseSchema, type DestinationsResponse } from "./models/destinations-response.js";
export {
  destinationsResponse1Schema,
  type DestinationsResponse1,
} from "./models/unions/destinations-response1.js";
export {
  draftReviewMetadataInputSchema,
  type DraftReviewMetadataInput,
} from "./models/draft-review-metadata-input.js";
export { eventSchema, type Event } from "./models/event.js";
export { event2Schema, type Event2 } from "./models/event2.js";
export { eventContractSchema, type EventContract } from "./models/event-contract.js";
export { eventContractCreateSchema, type EventContractCreate } from "./models/event-contract-create.js";
export { eventContractUpdateSchema, type EventContractUpdate } from "./models/event-contract-update.js";
export { eventDomainSchema, type EventDomain } from "./models/event-domain.js";
export { eventDomainComponentSchema, type EventDomainComponent } from "./models/event-domain-component.js";
export { eventDomainCreateSchema, type EventDomainCreate } from "./models/event-domain-create.js";
export { eventDomainUpdateSchema, type EventDomainUpdate } from "./models/event-domain-update.js";
export { eventSourceSchema, type EventSource } from "./models/event-source.js";
export {
  eventsContractsResponseSchema,
  type EventsContractsResponse,
} from "./models/events-contracts-response.js";
export {
  eventsContractsResponse1Schema,
  type EventsContractsResponse1,
} from "./models/unions/events-contracts-response1.js";
export {
  eventsContractsResponse11Schema,
  type EventsContractsResponse11,
} from "./models/unions/events-contracts-response11.js";
export { eventsDomainsResponseSchema, type EventsDomainsResponse } from "./models/events-domains-response.js";
export {
  eventsDomainsResponse1Schema,
  type EventsDomainsResponse1,
} from "./models/unions/events-domains-response1.js";
export { expressionSchema, type Expression } from "./models/expression.js";
export { externalSegmentSchema, type ExternalSegment } from "./models/external-segment.js";
export { failedRowsSchema, type FailedRows } from "./models/failed-rows.js";
export {
  handleCampaignRecipientSchema,
  type HandleCampaignRecipient,
} from "./models/handle-campaign-recipient.js";
export { identifierSchema, type Identifier } from "./models/identifier.js";
export {
  idrQueueForReprocessingInputSchema,
  type IdrQueueForReprocessingInput,
} from "./models/idr-queue-for-reprocessing-input.js";
export {
  idrQueueForReprocessingOutputSchema,
  type IdrQueueForReprocessingOutput,
} from "./models/idr-queue-for-reprocessing-output.js";
export {
  idrReprocessStatusOutputSchema,
  type IdrReprocessStatusOutput,
} from "./models/idr-reprocess-status-output.js";
export { idrRunSchema, type IdrRun } from "./models/idr-run.js";
export { idrRunStatsSchema, type IdrRunStats } from "./models/idr-run-stats.js";
export {
  idrRunStatsByThresholdSchema,
  type IdrRunStatsByThreshold,
} from "./models/idr-run-stats-by-threshold.js";
export {
  idrRunStatsByThreshold2Schema,
  type IdrRunStatsByThreshold2,
} from "./models/idr-run-stats-by-threshold2.js";
export { InternalServerError, internalServerErrorSchema } from "./models/internal-server-error.js";
export {
  internalServerErrorErrorSchema,
  type InternalServerErrorError,
} from "./models/internal-server-error-error.js";
export { intervalSchema, type Interval } from "./models/interval.js";
export { intervalScheduleSchema, type IntervalSchedule } from "./models/interval-schedule.js";
export { IntervalUnit, intervalUnitSchema } from "./models/interval-unit.js";
export { jobSchema, type Job } from "./models/job.js";
export { listIdrRunsOutputSchema, type ListIdrRunsOutput } from "./models/list-idr-runs-output.js";
export {
  listMatchBoosterRunsOutputSchema,
  type ListMatchBoosterRunsOutput,
} from "./models/list-match-booster-runs-output.js";
export { matchBoosterRunSchema, type MatchBoosterRun } from "./models/match-booster-run.js";
export {
  matchBoosterTriggerInputSchema,
  type MatchBoosterTriggerInput,
} from "./models/match-booster-trigger-input.js";
export {
  matchBoosterTriggerOutputSchema,
  type MatchBoosterTriggerOutput,
} from "./models/match-booster-trigger-output.js";
export { Message, messageSchema } from "./models/message.js";
export { modelSchema, type Model } from "./models/model.js";
export { modelCreateSchema, type ModelCreate } from "./models/model-create.js";
export { modelUpdateSchema, type ModelUpdate } from "./models/model-update.js";
export {
  modelsMatchBoosterRunsResponseSchema,
  type ModelsMatchBoosterRunsResponse,
} from "./models/unions/models-match-booster-runs-response.js";
export {
  modelsMatchBoosterTriggerResponseSchema,
  type ModelsMatchBoosterTriggerResponse,
} from "./models/unions/models-match-booster-trigger-response.js";
export { modelsResponseSchema, type ModelsResponse } from "./models/models-response.js";
export { modelsResponse1Schema, type ModelsResponse1 } from "./models/unions/models-response1.js";
export { modelsResponse11Schema, type ModelsResponse11 } from "./models/unions/models-response11.js";
export { modelsSizeResponseSchema, type ModelsSizeResponse } from "./models/unions/models-size-response.js";
export {
  modelsSizeResponse1Schema,
  type ModelsSizeResponse1,
} from "./models/unions/models-size-response1.js";
export { OnSchemaViolation, onSchemaViolationSchema } from "./models/on-schema-violation.js";
export { OnUndeclaredFields, onUndeclaredFieldsSchema } from "./models/on-undeclared-fields.js";
export { OnUndeclaredSchema, onUndeclaredSchemaSchema } from "./models/on-undeclared-schema.js";
export { OnUndeclaredSchema2, onUndeclaredSchema2Schema } from "./models/on-undeclared-schema2.js";
export { Operation, operationSchema } from "./models/operation.js";
export { Operation2, operation2Schema } from "./models/operation2.js";
export { OptIn, optInSchema } from "./models/opt-in.js";
export { plannedRowsSchema, type PlannedRows } from "./models/planned-rows.js";
export {
  profileCampaignRecipientSchema,
  type ProfileCampaignRecipient,
} from "./models/profile-campaign-recipient.js";
export { rawSchema, type Raw } from "./models/raw.js";
export { Reason, reasonSchema } from "./models/reason.js";
export {
  recordDayBooleanOrUndefinedSchema,
  type RecordDayBooleanOrUndefined,
} from "./models/record-day-boolean-or-undefined.js";
export { Region, regionSchema } from "./models/region.js";
export { rejectSyncDraftInputSchema, type RejectSyncDraftInput } from "./models/reject-sync-draft-input.js";
export { relatedDraftSchema, type RelatedDraft } from "./models/related-draft.js";
export { reviewMetadataSchema, type ReviewMetadata } from "./models/review-metadata.js";
export { scheduleSchema, type Schedule } from "./models/schedule.js";
export { schedule1Schema, type Schedule1 } from "./models/unions/schedule1.js";
export { SendStatus, sendStatusSchema } from "./models/send-status.js";
export { SendStatusReasonCode, sendStatusReasonCodeSchema } from "./models/send-status-reason-code.js";
export { SendStatusReasonCode1, sendStatusReasonCode1Schema } from "./models/send-status-reason-code1.js";
export { SignupChannel, signupChannelSchema } from "./models/signup-channel.js";
export { signupErrorResponseSchema, type SignupErrorResponse } from "./models/signup-error-response.js";
export {
  signupErrorResponseErrorSchema,
  type SignupErrorResponseError,
} from "./models/signup-error-response-error.js";
export {
  signupTraitsRequestSchema,
  type SignupTraitsRequest,
} from "./models/unions/signup-traits-request.js";
export { signups422ErrorSchema, type Signups422Error } from "./models/signups422-error.js";
export { signupsResponseSchema, type SignupsResponse } from "./models/unions/signups-response.js";
export { signupsResponse1Schema, type SignupsResponse1 } from "./models/unions/signups-response1.js";
export { sourceSchema, type Source } from "./models/source.js";
export { sourceCreateSchema, type SourceCreate } from "./models/source-create.js";
export { sourceUpdateSchema, type SourceUpdate } from "./models/source-update.js";
export { sourcesResponseSchema, type SourcesResponse } from "./models/sources-response.js";
export { sourcesResponse1Schema, type SourcesResponse1 } from "./models/unions/sources-response1.js";
export {
  startAudienceSizeJobOutputSchema,
  type StartAudienceSizeJobOutput,
} from "./models/start-audience-size-job-output.js";
export { startCampaignRequestSchema, type StartCampaignRequest } from "./models/start-campaign-request.js";
export { startCampaignResponseSchema, type StartCampaignResponse } from "./models/start-campaign-response.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export { StatusHightouchIdrApi, statusHightouchIdrApiSchema } from "./models/status-hightouch-idr-api.js";
export {
  StatusHightouchSignupsApi,
  statusHightouchSignupsApiSchema,
} from "./models/status-hightouch-signups-api.js";
export { successfulRowsSchema, type SuccessfulRows } from "./models/successful-rows.js";
export { syncSchema, type Sync } from "./models/sync.js";
export { syncTemplatesResponseSchema, type SyncTemplatesResponse } from "./models/sync-templates-response.js";
export {
  syncTemplatesResponse1Schema,
  type SyncTemplatesResponse1,
} from "./models/unions/sync-templates-response1.js";
export { syncCreateSchema, type SyncCreate } from "./models/sync-create.js";
export { syncDraftSchema, type SyncDraft } from "./models/sync-draft.js";
export { syncDraftDetailSchema, type SyncDraftDetail } from "./models/sync-draft-detail.js";
export { syncDraftListSchema, type SyncDraftList } from "./models/sync-draft-list.js";
export { SyncDraftStatus, syncDraftStatusSchema } from "./models/sync-draft-status.js";
export { syncRunSchema, type SyncRun } from "./models/sync-run.js";
export { SyncRunStatus, syncRunStatusSchema } from "./models/sync-run-status.js";
export { SyncRunStatus1, syncRunStatus1Schema } from "./models/sync-run-status1.js";
export {
  syncRunHightouchSyncsApiSchema,
  type SyncRunHightouchSyncsApi,
} from "./models/sync-run-hightouch-syncs-api.js";
export {
  SyncSequenceRequestStatus,
  syncSequenceRequestStatusSchema,
} from "./models/sync-sequence-request-status.js";
export {
  syncSequenceStatusOutputSchema,
  type SyncSequenceStatusOutput,
} from "./models/sync-sequence-status-output.js";
export { SyncStatus, syncStatusSchema } from "./models/sync-status.js";
export { SyncStatus2, syncStatus2Schema } from "./models/sync-status2.js";
export { syncTemplateSchema, type SyncTemplate } from "./models/sync-template.js";
export { syncTemplateCreateSchema, type SyncTemplateCreate } from "./models/sync-template-create.js";
export {
  syncTemplateOverrideOptionSchema,
  type SyncTemplateOverrideOption,
} from "./models/sync-template-override-option.js";
export { syncTemplateUpdateSchema, type SyncTemplateUpdate } from "./models/sync-template-update.js";
export { syncUpdateSchema, type SyncUpdate } from "./models/sync-update.js";
export { syncsResponseSchema, type SyncsResponse } from "./models/syncs-response.js";
export { syncsResponse1Schema, type SyncsResponse1 } from "./models/unions/syncs-response1.js";
export { syncsResponse11Schema, type SyncsResponse11 } from "./models/unions/syncs-response11.js";
export { syncsRunsResponseSchema, type SyncsRunsResponse } from "./models/syncs-runs-response.js";
export {
  syncsTriggerResponseSchema,
  type SyncsTriggerResponse,
} from "./models/unions/syncs-trigger-response.js";
export { tableSchema, type Table } from "./models/table.js";
export { triggerErrorResponseSchema, type TriggerErrorResponse } from "./models/trigger-error-response.js";
export {
  triggerErrorResponseErrorSchema,
  type TriggerErrorResponseError,
} from "./models/trigger-error-response-error.js";
export {
  triggerRunCustomInputSchema,
  type TriggerRunCustomInput,
} from "./models/trigger-run-custom-input.js";
export { triggerRunIdrInputSchema, type TriggerRunIdrInput } from "./models/trigger-run-idr-input.js";
export { triggerRunIdrOutputSchema, type TriggerRunIdrOutput } from "./models/trigger-run-idr-output.js";
export { triggerRunInputSchema, type TriggerRunInput } from "./models/trigger-run-input.js";
export { triggerRunOutputSchema, type TriggerRunOutput } from "./models/trigger-run-output.js";
export {
  triggerSequenceRunOutputSchema,
  type TriggerSequenceRunOutput,
} from "./models/trigger-sequence-run-output.js";
export { Type, typeSchema } from "./models/type.js";
export { userReferenceSchema, type UserReference } from "./models/user-reference.js";
export { validateErrorJsonSchema, type ValidateErrorJson } from "./models/validate-error-json.js";
export {
  validateErrorJsonErrorSchema,
  type ValidateErrorJsonError,
} from "./models/validate-error-json-error.js";
export { visualSchema, type Visual } from "./models/visual.js";
export { visualCronScheduleSchema, type VisualCronSchedule } from "./models/visual-cron-schedule.js";
export { OrderBy, orderBySchema } from "./models/order-by.js";
export { OrderBy1, orderBy1Schema } from "./models/order-by1.js";
export {
  OrderByHightouchDestinationsApi,
  orderByHightouchDestinationsApiSchema,
} from "./models/order-by-hightouch-destinations-api.js";
export {
  OrderByHightouchEventsApi,
  orderByHightouchEventsApiSchema,
} from "./models/order-by-hightouch-events-api.js";
export { OrderByHightouchIdrApi, orderByHightouchIdrApiSchema } from "./models/order-by-hightouch-idr-api.js";
export { Region1, region1Schema } from "./models/region1.js";

export {
  CoreError as HightouchError,
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
