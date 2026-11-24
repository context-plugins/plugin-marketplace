export { AwsXRayClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Creategroup } from "./resources/creategroup.js";
export { Createsamplingrule } from "./resources/createsamplingrule.js";
export { DeleteGroup } from "./resources/delete-group.js";
export { Deleteresourcepolicy } from "./resources/deleteresourcepolicy.js";
export { Deletesamplingrule } from "./resources/deletesamplingrule.js";
export { EncryptionconfigApi } from "./resources/encryptionconfig-api.js";
export { GetGroup } from "./resources/get-group.js";
export { Getsamplingrules } from "./resources/getsamplingrules.js";
export { Groups } from "./resources/groups.js";
export { InsightApi } from "./resources/insight-api.js";
export { Insightevents } from "./resources/insightevents.js";
export { Insightimpactgraph } from "./resources/insightimpactgraph.js";
export { Insightsummaries } from "./resources/insightsummaries.js";
export { ListTagsForResource } from "./resources/list-tags-for-resource.js";
export { Listresourcepolicies } from "./resources/listresourcepolicies.js";
export { Operations } from "./resources/operations.js";
export { Putencryptionconfig } from "./resources/putencryptionconfig.js";
export { Putresourcepolicy } from "./resources/putresourcepolicy.js";
export { Sampling } from "./resources/sampling.js";
export { Samplingstatisticsummaries } from "./resources/samplingstatisticsummaries.js";
export { Samplingtargets } from "./resources/samplingtargets.js";
export { ServiceGraph } from "./resources/service-graph.js";
export { TagResource } from "./resources/tag-resource.js";
export { Telemetryrecords } from "./resources/telemetryrecords.js";
export { TimeseriesservicestatisticsApi } from "./resources/timeseriesservicestatistics-api.js";
export { Tracegraph } from "./resources/tracegraph.js";
export { Traces } from "./resources/traces.js";
export { Tracesegments } from "./resources/tracesegments.js";
export { Tracesummaries } from "./resources/tracesummaries.js";
export { UntagResource } from "./resources/untag-resource.js";
export { UpdateGroup } from "./resources/update-group.js";
export { Updatesamplingrule } from "./resources/updatesamplingrule.js";

export { aliasSchema, type Alias } from "./models/alias.js";
export { annotationValueSchema, type AnnotationValue } from "./models/annotation-value.js";
export { anomalousServiceSchema, type AnomalousService } from "./models/anomalous-service.js";
export {
  availabilityZoneDetailSchema,
  type AvailabilityZoneDetail,
} from "./models/availability-zone-detail.js";
export {
  backendConnectionErrorsSchema,
  type BackendConnectionErrors,
} from "./models/backend-connection-errors.js";
export { batchGetTracesResultSchema, type BatchGetTracesResult } from "./models/batch-get-traces-result.js";
export {
  cancelTraceRetrievalRequestSchema,
  type CancelTraceRetrievalRequest,
} from "./models/cancel-trace-retrieval-request.js";
export { Category, categorySchema } from "./models/category.js";
export {
  cloudWatchLogsConfigurationSchema,
  type CloudWatchLogsConfiguration,
} from "./models/cloud-watch-logs-configuration.js";
export { createGroupRequestSchema, type CreateGroupRequest } from "./models/create-group-request.js";
export { createGroupResultSchema, type CreateGroupResult } from "./models/create-group-result.js";
export {
  createSamplingRuleRequestSchema,
  type CreateSamplingRuleRequest,
} from "./models/create-sampling-rule-request.js";
export {
  createSamplingRuleResultSchema,
  type CreateSamplingRuleResult,
} from "./models/create-sampling-rule-result.js";
export { deleteGroupRequestSchema, type DeleteGroupRequest } from "./models/delete-group-request.js";
export {
  deleteResourcePolicyRequestSchema,
  type DeleteResourcePolicyRequest,
} from "./models/delete-resource-policy-request.js";
export {
  deleteSamplingRuleRequestSchema,
  type DeleteSamplingRuleRequest,
} from "./models/delete-sampling-rule-request.js";
export {
  deleteSamplingRuleResultSchema,
  type DeleteSamplingRuleResult,
} from "./models/delete-sampling-rule-result.js";
export { Destination, destinationSchema } from "./models/destination.js";
export { Destination1, destination1Schema } from "./models/destination1.js";
export { Destination2, destination2Schema } from "./models/destination2.js";
export { edgeSchema, type Edge } from "./models/edge.js";
export { edgeStatisticsSchema, type EdgeStatistics } from "./models/edge-statistics.js";
export { encryptionConfigSchema, type EncryptionConfig } from "./models/encryption-config.js";
export { errorRootCauseSchema, type ErrorRootCause } from "./models/error-root-cause.js";
export { errorRootCauseEntitySchema, type ErrorRootCauseEntity } from "./models/error-root-cause-entity.js";
export {
  errorRootCauseServiceSchema,
  type ErrorRootCauseService,
} from "./models/error-root-cause-service.js";
export { errorStatisticsSchema, type ErrorStatistics } from "./models/error-statistics.js";
export { faultRootCauseSchema, type FaultRootCause } from "./models/fault-root-cause.js";
export { faultRootCauseEntitySchema, type FaultRootCauseEntity } from "./models/fault-root-cause-entity.js";
export {
  faultRootCauseServiceSchema,
  type FaultRootCauseService,
} from "./models/fault-root-cause-service.js";
export { faultStatisticsSchema, type FaultStatistics } from "./models/fault-statistics.js";
export { forecastStatisticsSchema, type ForecastStatistics } from "./models/forecast-statistics.js";
export {
  getEncryptionConfigResultSchema,
  type GetEncryptionConfigResult,
} from "./models/get-encryption-config-result.js";
export { getGroupRequestSchema, type GetGroupRequest } from "./models/get-group-request.js";
export { getGroupResultSchema, type GetGroupResult } from "./models/get-group-result.js";
export { getGroupsResultSchema, type GetGroupsResult } from "./models/get-groups-result.js";
export {
  getIndexingRulesRequestSchema,
  type GetIndexingRulesRequest,
} from "./models/get-indexing-rules-request.js";
export {
  getIndexingRulesResultSchema,
  type GetIndexingRulesResult,
} from "./models/get-indexing-rules-result.js";
export {
  getInsightEventsResultSchema,
  type GetInsightEventsResult,
} from "./models/get-insight-events-result.js";
export {
  getInsightImpactGraphResultSchema,
  type GetInsightImpactGraphResult,
} from "./models/get-insight-impact-graph-result.js";
export { getInsightResultSchema, type GetInsightResult } from "./models/get-insight-result.js";
export {
  getInsightSummariesResultSchema,
  type GetInsightSummariesResult,
} from "./models/get-insight-summaries-result.js";
export {
  getRetrievedTracesGraphRequestSchema,
  type GetRetrievedTracesGraphRequest,
} from "./models/get-retrieved-traces-graph-request.js";
export {
  getRetrievedTracesGraphResultSchema,
  type GetRetrievedTracesGraphResult,
} from "./models/get-retrieved-traces-graph-result.js";
export {
  getSamplingRulesRequestSchema,
  type GetSamplingRulesRequest,
} from "./models/get-sampling-rules-request.js";
export {
  getSamplingRulesResultSchema,
  type GetSamplingRulesResult,
} from "./models/get-sampling-rules-result.js";
export {
  getSamplingStatisticSummariesResultSchema,
  type GetSamplingStatisticSummariesResult,
} from "./models/get-sampling-statistic-summaries-result.js";
export {
  getSamplingTargetsResultSchema,
  type GetSamplingTargetsResult,
} from "./models/get-sampling-targets-result.js";
export {
  getServiceGraphResultSchema,
  type GetServiceGraphResult,
} from "./models/get-service-graph-result.js";
export {
  getTimeSeriesServiceStatisticsResultSchema,
  type GetTimeSeriesServiceStatisticsResult,
} from "./models/get-time-series-service-statistics-result.js";
export { getTraceGraphResultSchema, type GetTraceGraphResult } from "./models/get-trace-graph-result.js";
export {
  getTraceSegmentDestinationResultSchema,
  type GetTraceSegmentDestinationResult,
} from "./models/get-trace-segment-destination-result.js";
export {
  getTraceSummariesResultSchema,
  type GetTraceSummariesResult,
} from "./models/get-trace-summaries-result.js";
export { graphLinkSchema, type GraphLink } from "./models/graph-link.js";
export { groupSchema, type Group } from "./models/group.js";
export { groupSummarySchema, type GroupSummary } from "./models/group-summary.js";
export { groupsRequestSchema, type GroupsRequest } from "./models/groups-request.js";
export { histogramEntrySchema, type HistogramEntry } from "./models/histogram-entry.js";
export { httpSchema, type Http } from "./models/http.js";
export { indexingRuleSchema, type IndexingRule } from "./models/indexing-rule.js";
export { indexingRuleValueSchema, type IndexingRuleValue } from "./models/indexing-rule-value.js";
export {
  indexingRuleValueUpdateSchema,
  type IndexingRuleValueUpdate,
} from "./models/indexing-rule-value-update.js";
export { insightSchema, type Insight } from "./models/insight.js";
export { insightRequestSchema, type InsightRequest } from "./models/insight-request.js";
export { insightEventSchema, type InsightEvent } from "./models/insight-event.js";
export { insightEventsRequestSchema, type InsightEventsRequest } from "./models/insight-events-request.js";
export {
  insightImpactGraphRequestSchema,
  type InsightImpactGraphRequest,
} from "./models/insight-impact-graph-request.js";
export {
  insightImpactGraphEdgeSchema,
  type InsightImpactGraphEdge,
} from "./models/insight-impact-graph-edge.js";
export {
  insightImpactGraphServiceSchema,
  type InsightImpactGraphService,
} from "./models/insight-impact-graph-service.js";
export {
  insightSummariesRequestSchema,
  type InsightSummariesRequest,
} from "./models/insight-summaries-request.js";
export { insightSummarySchema, type InsightSummary } from "./models/insight-summary.js";
export { insightsConfigurationSchema, type InsightsConfiguration } from "./models/insights-configuration.js";
export { instanceIdDetailSchema, type InstanceIdDetail } from "./models/instance-id-detail.js";
export {
  invalidPolicyRevisionIdExceptionSchema,
  type InvalidPolicyRevisionIdException,
} from "./models/invalid-policy-revision-id-exception.js";
export {
  invalidPolicyRevisionIdExceptionErrorSchema,
  type InvalidPolicyRevisionIdExceptionError,
} from "./models/invalid-policy-revision-id-exception-error.js";
export {
  invalidRequestExceptionSchema,
  type InvalidRequestException,
} from "./models/invalid-request-exception.js";
export {
  invalidRequestExceptionErrorSchema,
  type InvalidRequestExceptionError,
} from "./models/invalid-request-exception-error.js";
export {
  listResourcePoliciesRequestSchema,
  type ListResourcePoliciesRequest,
} from "./models/list-resource-policies-request.js";
export {
  listResourcePoliciesResultSchema,
  type ListResourcePoliciesResult,
} from "./models/list-resource-policies-result.js";
export {
  listRetrievedTracesRequestSchema,
  type ListRetrievedTracesRequest,
} from "./models/list-retrieved-traces-request.js";
export {
  listRetrievedTracesResultSchema,
  type ListRetrievedTracesResult,
} from "./models/list-retrieved-traces-result.js";
export {
  listTagsForResourceRequestSchema,
  type ListTagsForResourceRequest,
} from "./models/list-tags-for-resource-request.js";
export {
  listTagsForResourceResponseSchema,
  type ListTagsForResourceResponse,
} from "./models/list-tags-for-resource-response.js";
export { Name, nameSchema } from "./models/name.js";
export {
  probabilisticRuleValueSchema,
  type ProbabilisticRuleValue,
} from "./models/probabilistic-rule-value.js";
export {
  probabilisticRuleValueUpdateSchema,
  type ProbabilisticRuleValueUpdate,
} from "./models/probabilistic-rule-value-update.js";
export {
  putEncryptionConfigRequestSchema,
  type PutEncryptionConfigRequest,
} from "./models/put-encryption-config-request.js";
export {
  putEncryptionConfigResultSchema,
  type PutEncryptionConfigResult,
} from "./models/put-encryption-config-result.js";
export {
  putResourcePolicyRequestSchema,
  type PutResourcePolicyRequest,
} from "./models/put-resource-policy-request.js";
export {
  putResourcePolicyResultSchema,
  type PutResourcePolicyResult,
} from "./models/put-resource-policy-result.js";
export {
  putTraceSegmentsResultSchema,
  type PutTraceSegmentsResult,
} from "./models/put-trace-segments-result.js";
export {
  requestImpactStatisticsSchema,
  type RequestImpactStatistics,
} from "./models/request-impact-statistics.js";
export { resourceArnDetailSchema, type ResourceArnDetail } from "./models/resource-arn-detail.js";
export {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "./models/resource-not-found-exception.js";
export {
  resourceNotFoundExceptionErrorSchema,
  type ResourceNotFoundExceptionError,
} from "./models/resource-not-found-exception-error.js";
export { resourcePolicySchema, type ResourcePolicy } from "./models/resource-policy.js";
export {
  responseTimeRootCauseSchema,
  type ResponseTimeRootCause,
} from "./models/response-time-root-cause.js";
export {
  responseTimeRootCauseEntitySchema,
  type ResponseTimeRootCauseEntity,
} from "./models/response-time-root-cause-entity.js";
export {
  responseTimeRootCauseServiceSchema,
  type ResponseTimeRootCauseService,
} from "./models/response-time-root-cause-service.js";
export { RetrievalStatus, retrievalStatusSchema } from "./models/retrieval-status.js";
export { retrievedServiceSchema, type RetrievedService } from "./models/retrieved-service.js";
export { retrievedTraceSchema, type RetrievedTrace } from "./models/retrieved-trace.js";
export { rootCauseExceptionSchema, type RootCauseException } from "./models/root-cause-exception.js";
export { samplingBoostSchema, type SamplingBoost } from "./models/sampling-boost.js";
export {
  samplingBoostStatisticsDocumentSchema,
  type SamplingBoostStatisticsDocument,
} from "./models/sampling-boost-statistics-document.js";
export { samplingRateBoostSchema, type SamplingRateBoost } from "./models/sampling-rate-boost.js";
export { samplingRuleSchema, type SamplingRule } from "./models/sampling-rule.js";
export { samplingRuleRecordSchema, type SamplingRuleRecord } from "./models/sampling-rule-record.js";
export { samplingRuleUpdateSchema, type SamplingRuleUpdate } from "./models/sampling-rule-update.js";
export {
  samplingStatisticSummariesRequestSchema,
  type SamplingStatisticSummariesRequest,
} from "./models/sampling-statistic-summaries-request.js";
export {
  samplingStatisticSummarySchema,
  type SamplingStatisticSummary,
} from "./models/sampling-statistic-summary.js";
export {
  samplingStatisticsDocumentSchema,
  type SamplingStatisticsDocument,
} from "./models/sampling-statistics-document.js";
export { samplingStrategySchema, type SamplingStrategy } from "./models/sampling-strategy.js";
export {
  samplingTargetDocumentSchema,
  type SamplingTargetDocument,
} from "./models/sampling-target-document.js";
export {
  samplingTargetsRequestSchema,
  type SamplingTargetsRequest,
} from "./models/sampling-targets-request.js";
export { segmentSchema, type Segment } from "./models/segment.js";
export { serviceSchema, type Service } from "./models/service.js";
export { serviceGraphRequestSchema, type ServiceGraphRequest } from "./models/service-graph-request.js";
export { serviceIdSchema, type ServiceId } from "./models/service-id.js";
export { serviceStatisticsSchema, type ServiceStatistics } from "./models/service-statistics.js";
export { spanSchema, type Span } from "./models/span.js";
export {
  startTraceRetrievalRequestSchema,
  type StartTraceRetrievalRequest,
} from "./models/start-trace-retrieval-request.js";
export {
  startTraceRetrievalResultSchema,
  type StartTraceRetrievalResult,
} from "./models/start-trace-retrieval-result.js";
export { State, stateSchema } from "./models/state.js";
export { State1, state1Schema } from "./models/state1.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export {
  StatusAwsXRayOperationsApi,
  statusAwsXRayOperationsApiSchema,
} from "./models/status-aws-xray-operations-api.js";
export { tagSchema, type Tag } from "./models/tag.js";
export { tagResourceRequestSchema, type TagResourceRequest } from "./models/tag-resource-request.js";
export { telemetryRecordSchema, type TelemetryRecord } from "./models/telemetry-record.js";
export {
  telemetryRecordsRequestSchema,
  type TelemetryRecordsRequest,
} from "./models/telemetry-records-request.js";
export { throttledExceptionSchema, type ThrottledException } from "./models/throttled-exception.js";
export {
  throttledExceptionErrorSchema,
  type ThrottledExceptionError,
} from "./models/throttled-exception-error.js";
export { TimeRangeType, timeRangeTypeSchema } from "./models/time-range-type.js";
export {
  timeSeriesServiceStatisticsSchema,
  type TimeSeriesServiceStatistics,
} from "./models/time-series-service-statistics.js";
export {
  timeSeriesServiceStatisticsRequestSchema,
  type TimeSeriesServiceStatisticsRequest,
} from "./models/time-series-service-statistics-request.js";
export { traceSchema, type Trace } from "./models/trace.js";
export { TraceFormat, traceFormatSchema } from "./models/trace-format.js";
export { traceGraphRequestSchema, type TraceGraphRequest } from "./models/trace-graph-request.js";
export { traceSegmentsRequestSchema, type TraceSegmentsRequest } from "./models/trace-segments-request.js";
export { traceSummariesRequestSchema, type TraceSummariesRequest } from "./models/trace-summaries-request.js";
export { traceSummarySchema, type TraceSummary } from "./models/trace-summary.js";
export { traceUserSchema, type TraceUser } from "./models/trace-user.js";
export { tracesRequestSchema, type TracesRequest } from "./models/traces-request.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export { unprocessedStatisticsSchema, type UnprocessedStatistics } from "./models/unprocessed-statistics.js";
export {
  unprocessedTraceSegmentSchema,
  type UnprocessedTraceSegment,
} from "./models/unprocessed-trace-segment.js";
export { untagResourceRequestSchema, type UntagResourceRequest } from "./models/untag-resource-request.js";
export { updateGroupRequestSchema, type UpdateGroupRequest } from "./models/update-group-request.js";
export { updateGroupResultSchema, type UpdateGroupResult } from "./models/update-group-result.js";
export {
  updateIndexingRuleRequestSchema,
  type UpdateIndexingRuleRequest,
} from "./models/update-indexing-rule-request.js";
export {
  updateIndexingRuleResultSchema,
  type UpdateIndexingRuleResult,
} from "./models/update-indexing-rule-result.js";
export {
  updateSamplingRuleRequestSchema,
  type UpdateSamplingRuleRequest,
} from "./models/update-sampling-rule-request.js";
export {
  updateSamplingRuleResultSchema,
  type UpdateSamplingRuleResult,
} from "./models/update-sampling-rule-result.js";
export {
  updateTraceSegmentDestinationRequestSchema,
  type UpdateTraceSegmentDestinationRequest,
} from "./models/update-trace-segment-destination-request.js";
export {
  updateTraceSegmentDestinationResultSchema,
  type UpdateTraceSegmentDestinationResult,
} from "./models/update-trace-segment-destination-result.js";
export { valueWithServiceIdsSchema, type ValueWithServiceIds } from "./models/value-with-service-ids.js";

export {
  CoreError as AwsXRayError,
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
