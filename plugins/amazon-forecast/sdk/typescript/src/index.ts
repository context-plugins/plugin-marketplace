export { AmazonForecastClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { DatasetGroups } from "./resources/dataset-groups.js";
export { DatasetImportJob } from "./resources/dataset-import-job.js";
export { Datasets } from "./resources/datasets.js";
export { Explainability } from "./resources/explainability.js";
export { ExplainabilityExport } from "./resources/explainability-export.js";
export { ExportJobs } from "./resources/export-jobs.js";
export { ForecastExportJob } from "./resources/forecast-export-job.js";
export { Forecasts } from "./resources/forecasts.js";
export { Monitor } from "./resources/monitor.js";
export { Operations } from "./resources/operations.js";
export { PredictorBacktestExportJob } from "./resources/predictor-backtest-export-job.js";
export { Predictors } from "./resources/predictors.js";
export { Resource } from "./resources/resource.js";
export { Tags } from "./resources/tags.js";
export { WhatIfAnalysis } from "./resources/what-if-analysis.js";
export { WhatIfForecast } from "./resources/what-if-forecast.js";
export { WhatIfForecastExport } from "./resources/what-if-forecast-export.js";

export { actionSchema, type Action } from "./models/action.js";
export { additionalDatasetSchema, type AdditionalDataset } from "./models/additional-dataset.js";
export { attributeConfigSchema, type AttributeConfig } from "./models/attribute-config.js";
export { AttributeType, attributeTypeSchema } from "./models/attribute-type.js";
export { AutoMlOverrideStrategy, autoMlOverrideStrategySchema } from "./models/auto-ml-override-strategy.js";
export {
  AutoMlOverrideStrategyAmazonForecastServicePredictorsApi,
  autoMlOverrideStrategyAmazonForecastServicePredictorsApiSchema,
} from "./models/auto-ml-override-strategy-amazon-forecast-service-predictors-api.js";
export { baselineSchema, type Baseline } from "./models/baseline.js";
export { baselineMetricSchema, type BaselineMetric } from "./models/baseline-metric.js";
export {
  categoricalParameterRangeSchema,
  type CategoricalParameterRange,
} from "./models/categorical-parameter-range.js";
export { Condition, conditionSchema } from "./models/condition.js";
export {
  ConditionAmazonForecastServiceWhatIfForecastApi,
  conditionAmazonForecastServiceWhatIfForecastApiSchema,
} from "./models/condition-amazon-forecast-service-what-if-forecast-api.js";
export {
  continuousParameterRangeSchema,
  type ContinuousParameterRange,
} from "./models/continuous-parameter-range.js";
export {
  createAutoPredictorRequestSchema,
  type CreateAutoPredictorRequest,
} from "./models/create-auto-predictor-request.js";
export {
  createAutoPredictorResponseSchema,
  type CreateAutoPredictorResponse,
} from "./models/create-auto-predictor-response.js";
export {
  createDatasetGroupRequestSchema,
  type CreateDatasetGroupRequest,
} from "./models/create-dataset-group-request.js";
export {
  createDatasetGroupResponseSchema,
  type CreateDatasetGroupResponse,
} from "./models/create-dataset-group-response.js";
export {
  createDatasetImportJobRequestSchema,
  type CreateDatasetImportJobRequest,
} from "./models/create-dataset-import-job-request.js";
export {
  createDatasetImportJobResponseSchema,
  type CreateDatasetImportJobResponse,
} from "./models/create-dataset-import-job-response.js";
export { createDatasetRequestSchema, type CreateDatasetRequest } from "./models/create-dataset-request.js";
export { createDatasetResponseSchema, type CreateDatasetResponse } from "./models/create-dataset-response.js";
export {
  createExplainabilityExportRequestSchema,
  type CreateExplainabilityExportRequest,
} from "./models/create-explainability-export-request.js";
export {
  createExplainabilityExportResponseSchema,
  type CreateExplainabilityExportResponse,
} from "./models/create-explainability-export-response.js";
export {
  createExplainabilityRequestSchema,
  type CreateExplainabilityRequest,
} from "./models/create-explainability-request.js";
export {
  createExplainabilityResponseSchema,
  type CreateExplainabilityResponse,
} from "./models/create-explainability-response.js";
export {
  createForecastExportJobRequestSchema,
  type CreateForecastExportJobRequest,
} from "./models/create-forecast-export-job-request.js";
export {
  createForecastExportJobResponseSchema,
  type CreateForecastExportJobResponse,
} from "./models/create-forecast-export-job-response.js";
export { createForecastRequestSchema, type CreateForecastRequest } from "./models/create-forecast-request.js";
export {
  createForecastResponseSchema,
  type CreateForecastResponse,
} from "./models/create-forecast-response.js";
export { createMonitorRequestSchema, type CreateMonitorRequest } from "./models/create-monitor-request.js";
export { createMonitorResponseSchema, type CreateMonitorResponse } from "./models/create-monitor-response.js";
export {
  createPredictorBacktestExportJobRequestSchema,
  type CreatePredictorBacktestExportJobRequest,
} from "./models/create-predictor-backtest-export-job-request.js";
export {
  createPredictorBacktestExportJobResponseSchema,
  type CreatePredictorBacktestExportJobResponse,
} from "./models/create-predictor-backtest-export-job-response.js";
export {
  createPredictorRequestSchema,
  type CreatePredictorRequest,
} from "./models/create-predictor-request.js";
export {
  createPredictorResponseSchema,
  type CreatePredictorResponse,
} from "./models/create-predictor-response.js";
export {
  createWhatIfAnalysisRequestSchema,
  type CreateWhatIfAnalysisRequest,
} from "./models/create-what-if-analysis-request.js";
export {
  createWhatIfAnalysisResponseSchema,
  type CreateWhatIfAnalysisResponse,
} from "./models/create-what-if-analysis-response.js";
export {
  createWhatIfForecastExportRequestSchema,
  type CreateWhatIfForecastExportRequest,
} from "./models/create-what-if-forecast-export-request.js";
export {
  createWhatIfForecastExportResponseSchema,
  type CreateWhatIfForecastExportResponse,
} from "./models/create-what-if-forecast-export-response.js";
export {
  createWhatIfForecastRequestSchema,
  type CreateWhatIfForecastRequest,
} from "./models/create-what-if-forecast-request.js";
export {
  createWhatIfForecastResponseSchema,
  type CreateWhatIfForecastResponse,
} from "./models/create-what-if-forecast-response.js";
export { dataConfigSchema, type DataConfig } from "./models/data-config.js";
export { dataDestinationSchema, type DataDestination } from "./models/data-destination.js";
export { dataSourceSchema, type DataSource } from "./models/data-source.js";
export { datasetGroupSummarySchema, type DatasetGroupSummary } from "./models/dataset-group-summary.js";
export {
  datasetImportJobSummarySchema,
  type DatasetImportJobSummary,
} from "./models/dataset-import-job-summary.js";
export { datasetSummarySchema, type DatasetSummary } from "./models/dataset-summary.js";
export { DatasetType, datasetTypeSchema } from "./models/dataset-type.js";
export { DatasetType1, datasetType1Schema } from "./models/dataset-type1.js";
export { DayOfWeek, dayOfWeekSchema } from "./models/day-of-week.js";
export {
  deleteDatasetGroupRequestSchema,
  type DeleteDatasetGroupRequest,
} from "./models/delete-dataset-group-request.js";
export {
  deleteDatasetImportJobRequestSchema,
  type DeleteDatasetImportJobRequest,
} from "./models/delete-dataset-import-job-request.js";
export { deleteDatasetRequestSchema, type DeleteDatasetRequest } from "./models/delete-dataset-request.js";
export {
  deleteExplainabilityExportRequestSchema,
  type DeleteExplainabilityExportRequest,
} from "./models/delete-explainability-export-request.js";
export {
  deleteExplainabilityRequestSchema,
  type DeleteExplainabilityRequest,
} from "./models/delete-explainability-request.js";
export {
  deleteForecastExportJobRequestSchema,
  type DeleteForecastExportJobRequest,
} from "./models/delete-forecast-export-job-request.js";
export { deleteForecastRequestSchema, type DeleteForecastRequest } from "./models/delete-forecast-request.js";
export { deleteMonitorRequestSchema, type DeleteMonitorRequest } from "./models/delete-monitor-request.js";
export {
  deletePredictorBacktestExportJobRequestSchema,
  type DeletePredictorBacktestExportJobRequest,
} from "./models/delete-predictor-backtest-export-job-request.js";
export {
  deletePredictorRequestSchema,
  type DeletePredictorRequest,
} from "./models/delete-predictor-request.js";
export {
  deleteResourceTreeRequestSchema,
  type DeleteResourceTreeRequest,
} from "./models/delete-resource-tree-request.js";
export {
  deleteWhatIfAnalysisRequestSchema,
  type DeleteWhatIfAnalysisRequest,
} from "./models/delete-what-if-analysis-request.js";
export {
  deleteWhatIfForecastExportRequestSchema,
  type DeleteWhatIfForecastExportRequest,
} from "./models/delete-what-if-forecast-export-request.js";
export {
  deleteWhatIfForecastRequestSchema,
  type DeleteWhatIfForecastRequest,
} from "./models/delete-what-if-forecast-request.js";
export {
  describeAutoPredictorRequestSchema,
  type DescribeAutoPredictorRequest,
} from "./models/describe-auto-predictor-request.js";
export {
  describeAutoPredictorResponseSchema,
  type DescribeAutoPredictorResponse,
} from "./models/describe-auto-predictor-response.js";
export {
  describeDatasetGroupRequestSchema,
  type DescribeDatasetGroupRequest,
} from "./models/describe-dataset-group-request.js";
export {
  describeDatasetGroupResponseSchema,
  type DescribeDatasetGroupResponse,
} from "./models/describe-dataset-group-response.js";
export {
  describeDatasetImportJobRequestSchema,
  type DescribeDatasetImportJobRequest,
} from "./models/describe-dataset-import-job-request.js";
export {
  describeDatasetImportJobResponseSchema,
  type DescribeDatasetImportJobResponse,
} from "./models/describe-dataset-import-job-response.js";
export {
  describeDatasetRequestSchema,
  type DescribeDatasetRequest,
} from "./models/describe-dataset-request.js";
export {
  describeDatasetResponseSchema,
  type DescribeDatasetResponse,
} from "./models/describe-dataset-response.js";
export {
  describeExplainabilityExportRequestSchema,
  type DescribeExplainabilityExportRequest,
} from "./models/describe-explainability-export-request.js";
export {
  describeExplainabilityExportResponseSchema,
  type DescribeExplainabilityExportResponse,
} from "./models/describe-explainability-export-response.js";
export {
  describeExplainabilityRequestSchema,
  type DescribeExplainabilityRequest,
} from "./models/describe-explainability-request.js";
export {
  describeExplainabilityResponseSchema,
  type DescribeExplainabilityResponse,
} from "./models/describe-explainability-response.js";
export {
  describeForecastExportJobRequestSchema,
  type DescribeForecastExportJobRequest,
} from "./models/describe-forecast-export-job-request.js";
export {
  describeForecastExportJobResponseSchema,
  type DescribeForecastExportJobResponse,
} from "./models/describe-forecast-export-job-response.js";
export {
  describeForecastRequestSchema,
  type DescribeForecastRequest,
} from "./models/describe-forecast-request.js";
export {
  describeForecastResponseSchema,
  type DescribeForecastResponse,
} from "./models/describe-forecast-response.js";
export {
  describeMonitorRequestSchema,
  type DescribeMonitorRequest,
} from "./models/describe-monitor-request.js";
export {
  describeMonitorResponseSchema,
  type DescribeMonitorResponse,
} from "./models/describe-monitor-response.js";
export {
  describePredictorBacktestExportJobRequestSchema,
  type DescribePredictorBacktestExportJobRequest,
} from "./models/describe-predictor-backtest-export-job-request.js";
export {
  describePredictorBacktestExportJobResponseSchema,
  type DescribePredictorBacktestExportJobResponse,
} from "./models/describe-predictor-backtest-export-job-response.js";
export {
  describePredictorRequestSchema,
  type DescribePredictorRequest,
} from "./models/describe-predictor-request.js";
export {
  describePredictorResponseSchema,
  type DescribePredictorResponse,
} from "./models/describe-predictor-response.js";
export {
  describeWhatIfAnalysisRequestSchema,
  type DescribeWhatIfAnalysisRequest,
} from "./models/describe-what-if-analysis-request.js";
export {
  describeWhatIfAnalysisResponseSchema,
  type DescribeWhatIfAnalysisResponse,
} from "./models/describe-what-if-analysis-response.js";
export {
  describeWhatIfForecastExportRequestSchema,
  type DescribeWhatIfForecastExportRequest,
} from "./models/describe-what-if-forecast-export-request.js";
export {
  describeWhatIfForecastExportResponseSchema,
  type DescribeWhatIfForecastExportResponse,
} from "./models/describe-what-if-forecast-export-response.js";
export {
  describeWhatIfForecastRequestSchema,
  type DescribeWhatIfForecastRequest,
} from "./models/describe-what-if-forecast-request.js";
export {
  describeWhatIfForecastResponseSchema,
  type DescribeWhatIfForecastResponse,
} from "./models/describe-what-if-forecast-response.js";
export { Domain, domainSchema } from "./models/domain.js";
export { Domain1, domain1Schema } from "./models/domain1.js";
export {
  Domain1AmazonForecastServiceDatasetsApi,
  domain1AmazonForecastServiceDatasetsApiSchema,
} from "./models/domain1-amazon-forecast-service-datasets-api.js";
export {
  DomainAmazonForecastServiceDatasetsApi,
  domainAmazonForecastServiceDatasetsApiSchema,
} from "./models/domain-amazon-forecast-service-datasets-api.js";
export { encryptionConfigSchema, type EncryptionConfig } from "./models/encryption-config.js";
export { errorMetricSchema, type ErrorMetric } from "./models/error-metric.js";
export { evaluationParametersSchema, type EvaluationParameters } from "./models/evaluation-parameters.js";
export { evaluationResultSchema, type EvaluationResult } from "./models/evaluation-result.js";
export { EvaluationType, evaluationTypeSchema } from "./models/evaluation-type.js";
export { explainabilityConfigSchema, type ExplainabilityConfig } from "./models/explainability-config.js";
export {
  explainabilityExportSummarySchema,
  type ExplainabilityExportSummary,
} from "./models/explainability-export-summary.js";
export { explainabilityInfoSchema, type ExplainabilityInfo } from "./models/explainability-info.js";
export { explainabilitySummarySchema, type ExplainabilitySummary } from "./models/explainability-summary.js";
export { featurizationSchema, type Featurization } from "./models/featurization.js";
export { featurizationConfigSchema, type FeaturizationConfig } from "./models/featurization-config.js";
export { featurizationMethodSchema, type FeaturizationMethod } from "./models/featurization-method.js";
export { filterSchema, type Filter } from "./models/filter.js";
export {
  forecastExportJobSummarySchema,
  type ForecastExportJobSummary,
} from "./models/forecast-export-job-summary.js";
export { forecastSummarySchema, type ForecastSummary } from "./models/forecast-summary.js";
export {
  getAccuracyMetricsRequestSchema,
  type GetAccuracyMetricsRequest,
} from "./models/get-accuracy-metrics-request.js";
export {
  getAccuracyMetricsResponseSchema,
  type GetAccuracyMetricsResponse,
} from "./models/get-accuracy-metrics-response.js";
export {
  hyperParameterTuningJobConfigSchema,
  type HyperParameterTuningJobConfig,
} from "./models/hyper-parameter-tuning-job-config.js";
export { ImportMode, importModeSchema } from "./models/import-mode.js";
export { ImportMode1, importMode1Schema } from "./models/import-mode1.js";
export { inputDataConfigSchema, type InputDataConfig } from "./models/input-data-config.js";
export { integerParameterRangeSchema, type IntegerParameterRange } from "./models/integer-parameter-range.js";
export { invalidInputExceptionSchema, type InvalidInputException } from "./models/invalid-input-exception.js";
export {
  invalidInputExceptionErrorSchema,
  type InvalidInputExceptionError,
} from "./models/invalid-input-exception-error.js";
export {
  invalidNextTokenExceptionSchema,
  type InvalidNextTokenException,
} from "./models/invalid-next-token-exception.js";
export {
  invalidNextTokenExceptionErrorSchema,
  type InvalidNextTokenExceptionError,
} from "./models/invalid-next-token-exception-error.js";
export {
  limitExceededExceptionSchema,
  type LimitExceededException,
} from "./models/limit-exceeded-exception.js";
export {
  limitExceededExceptionErrorSchema,
  type LimitExceededExceptionError,
} from "./models/limit-exceeded-exception-error.js";
export {
  listDatasetGroupsRequestSchema,
  type ListDatasetGroupsRequest,
} from "./models/list-dataset-groups-request.js";
export {
  listDatasetGroupsResponseSchema,
  type ListDatasetGroupsResponse,
} from "./models/list-dataset-groups-response.js";
export {
  listDatasetImportJobsRequestSchema,
  type ListDatasetImportJobsRequest,
} from "./models/list-dataset-import-jobs-request.js";
export {
  listDatasetImportJobsResponseSchema,
  type ListDatasetImportJobsResponse,
} from "./models/list-dataset-import-jobs-response.js";
export { listDatasetsRequestSchema, type ListDatasetsRequest } from "./models/list-datasets-request.js";
export { listDatasetsResponseSchema, type ListDatasetsResponse } from "./models/list-datasets-response.js";
export {
  listExplainabilitiesRequestSchema,
  type ListExplainabilitiesRequest,
} from "./models/list-explainabilities-request.js";
export {
  listExplainabilitiesResponseSchema,
  type ListExplainabilitiesResponse,
} from "./models/list-explainabilities-response.js";
export {
  listExplainabilityExportsRequestSchema,
  type ListExplainabilityExportsRequest,
} from "./models/list-explainability-exports-request.js";
export {
  listExplainabilityExportsResponseSchema,
  type ListExplainabilityExportsResponse,
} from "./models/list-explainability-exports-response.js";
export {
  listForecastExportJobsRequestSchema,
  type ListForecastExportJobsRequest,
} from "./models/list-forecast-export-jobs-request.js";
export {
  listForecastExportJobsResponseSchema,
  type ListForecastExportJobsResponse,
} from "./models/list-forecast-export-jobs-response.js";
export { listForecastsRequestSchema, type ListForecastsRequest } from "./models/list-forecasts-request.js";
export { listForecastsResponseSchema, type ListForecastsResponse } from "./models/list-forecasts-response.js";
export {
  listMonitorEvaluationsRequestSchema,
  type ListMonitorEvaluationsRequest,
} from "./models/list-monitor-evaluations-request.js";
export {
  listMonitorEvaluationsResponseSchema,
  type ListMonitorEvaluationsResponse,
} from "./models/list-monitor-evaluations-response.js";
export { listMonitorsRequestSchema, type ListMonitorsRequest } from "./models/list-monitors-request.js";
export { listMonitorsResponseSchema, type ListMonitorsResponse } from "./models/list-monitors-response.js";
export {
  listPredictorBacktestExportJobsRequestSchema,
  type ListPredictorBacktestExportJobsRequest,
} from "./models/list-predictor-backtest-export-jobs-request.js";
export {
  listPredictorBacktestExportJobsResponseSchema,
  type ListPredictorBacktestExportJobsResponse,
} from "./models/list-predictor-backtest-export-jobs-response.js";
export { listPredictorsRequestSchema, type ListPredictorsRequest } from "./models/list-predictors-request.js";
export {
  listPredictorsResponseSchema,
  type ListPredictorsResponse,
} from "./models/list-predictors-response.js";
export {
  listTagsForResourceRequestSchema,
  type ListTagsForResourceRequest,
} from "./models/list-tags-for-resource-request.js";
export {
  listTagsForResourceResponseSchema,
  type ListTagsForResourceResponse,
} from "./models/list-tags-for-resource-response.js";
export {
  listWhatIfAnalysesRequestSchema,
  type ListWhatIfAnalysesRequest,
} from "./models/list-what-if-analyses-request.js";
export {
  listWhatIfAnalysesResponseSchema,
  type ListWhatIfAnalysesResponse,
} from "./models/list-what-if-analyses-response.js";
export {
  listWhatIfForecastExportsRequestSchema,
  type ListWhatIfForecastExportsRequest,
} from "./models/list-what-if-forecast-exports-request.js";
export {
  listWhatIfForecastExportsResponseSchema,
  type ListWhatIfForecastExportsResponse,
} from "./models/list-what-if-forecast-exports-response.js";
export {
  listWhatIfForecastsRequestSchema,
  type ListWhatIfForecastsRequest,
} from "./models/list-what-if-forecasts-request.js";
export {
  listWhatIfForecastsResponseSchema,
  type ListWhatIfForecastsResponse,
} from "./models/list-what-if-forecasts-response.js";
export { metricResultSchema, type MetricResult } from "./models/metric-result.js";
export { metricsSchema, type Metrics } from "./models/metrics.js";
export { monitorConfigSchema, type MonitorConfig } from "./models/monitor-config.js";
export { monitorDataSourceSchema, type MonitorDataSource } from "./models/monitor-data-source.js";
export { monitorInfoSchema, type MonitorInfo } from "./models/monitor-info.js";
export { monitorSummarySchema, type MonitorSummary } from "./models/monitor-summary.js";
export { Month, monthSchema } from "./models/month.js";
export { Operation, operationSchema } from "./models/operation.js";
export { OptimizationMetric, optimizationMetricSchema } from "./models/optimization-metric.js";
export { parameterRangesSchema, type ParameterRanges } from "./models/parameter-ranges.js";
export {
  predictorBacktestExportJobSummarySchema,
  type PredictorBacktestExportJobSummary,
} from "./models/predictor-backtest-export-job-summary.js";
export { predictorBaselineSchema, type PredictorBaseline } from "./models/predictor-baseline.js";
export { predictorEventSchema, type PredictorEvent } from "./models/predictor-event.js";
export { predictorExecutionSchema, type PredictorExecution } from "./models/predictor-execution.js";
export {
  predictorExecutionDetailsSchema,
  type PredictorExecutionDetails,
} from "./models/predictor-execution-details.js";
export {
  predictorMonitorEvaluationSchema,
  type PredictorMonitorEvaluation,
} from "./models/predictor-monitor-evaluation.js";
export { predictorSummarySchema, type PredictorSummary } from "./models/predictor-summary.js";
export {
  referencePredictorSummarySchema,
  type ReferencePredictorSummary,
} from "./models/reference-predictor-summary.js";
export {
  resourceAlreadyExistsExceptionSchema,
  type ResourceAlreadyExistsException,
} from "./models/resource-already-exists-exception.js";
export {
  resourceAlreadyExistsExceptionErrorSchema,
  type ResourceAlreadyExistsExceptionError,
} from "./models/resource-already-exists-exception-error.js";
export {
  resourceInUseExceptionSchema,
  type ResourceInUseException,
} from "./models/resource-in-use-exception.js";
export {
  resourceInUseExceptionErrorSchema,
  type ResourceInUseExceptionError,
} from "./models/resource-in-use-exception-error.js";
export {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "./models/resource-not-found-exception.js";
export {
  resourceNotFoundExceptionErrorSchema,
  type ResourceNotFoundExceptionError,
} from "./models/resource-not-found-exception-error.js";
export { resumeResourceRequestSchema, type ResumeResourceRequest } from "./models/resume-resource-request.js";
export { s3ConfigSchema, type S3Config } from "./models/s3-config.js";
export { ScalingType, scalingTypeSchema } from "./models/scaling-type.js";
export { ScalingType1, scalingType1Schema } from "./models/scaling-type1.js";
export { schemaModelSchema, type SchemaModel } from "./models/schema-model.js";
export { schemaAttributeSchema, type SchemaAttribute } from "./models/schema-attribute.js";
export { State, stateSchema } from "./models/state.js";
export { statisticsSchema, type Statistics } from "./models/statistics.js";
export { stopResourceRequestSchema, type StopResourceRequest } from "./models/stop-resource-request.js";
export { supplementaryFeatureSchema, type SupplementaryFeature } from "./models/supplementary-feature.js";
export { tagSchema, type Tag } from "./models/tag.js";
export { tagResourceRequestSchema, type TagResourceRequest } from "./models/tag-resource-request.js";
export { testWindowSummarySchema, type TestWindowSummary } from "./models/test-window-summary.js";
export { timeAlignmentBoundarySchema, type TimeAlignmentBoundary } from "./models/time-alignment-boundary.js";
export { TimePointGranularity, timePointGranularitySchema } from "./models/time-point-granularity.js";
export { timeSeriesConditionSchema, type TimeSeriesCondition } from "./models/time-series-condition.js";
export { TimeSeriesGranularity, timeSeriesGranularitySchema } from "./models/time-series-granularity.js";
export { timeSeriesIdentifiersSchema, type TimeSeriesIdentifiers } from "./models/time-series-identifiers.js";
export {
  timeSeriesReplacementsDataSourceSchema,
  type TimeSeriesReplacementsDataSource,
} from "./models/time-series-replacements-data-source.js";
export { timeSeriesSelectorSchema, type TimeSeriesSelector } from "./models/time-series-selector.js";
export {
  timeSeriesTransformationSchema,
  type TimeSeriesTransformation,
} from "./models/time-series-transformation.js";
export { untagResourceRequestSchema, type UntagResourceRequest } from "./models/untag-resource-request.js";
export {
  updateDatasetGroupRequestSchema,
  type UpdateDatasetGroupRequest,
} from "./models/update-dataset-group-request.js";
export { weightedQuantileLossSchema, type WeightedQuantileLoss } from "./models/weighted-quantile-loss.js";
export {
  whatIfAnalysisSummarySchema,
  type WhatIfAnalysisSummary,
} from "./models/what-if-analysis-summary.js";
export {
  whatIfForecastExportSummarySchema,
  type WhatIfForecastExportSummary,
} from "./models/what-if-forecast-export-summary.js";
export {
  whatIfForecastSummarySchema,
  type WhatIfForecastSummary,
} from "./models/what-if-forecast-summary.js";
export { windowSummarySchema, type WindowSummary } from "./models/window-summary.js";
export { XAmzTarget, xAmzTargetSchema } from "./models/xamz-target.js";
export { XAmzTarget1, xAmzTarget1Schema } from "./models/xamz-target1.js";
export {
  XAmzTarget1AmazonForecastServiceDatasetImportJobApi,
  xAmzTarget1AmazonForecastServiceDatasetImportJobApiSchema,
} from "./models/xamz-target1-amazon-forecast-service-dataset-import-job-api.js";
export {
  XAmzTarget1AmazonForecastServiceDatasetsApi,
  xAmzTarget1AmazonForecastServiceDatasetsApiSchema,
} from "./models/xamz-target1-amazon-forecast-service-datasets-api.js";
export {
  XAmzTarget1AmazonForecastServiceExplainabilityApi,
  xAmzTarget1AmazonForecastServiceExplainabilityApiSchema,
} from "./models/xamz-target1-amazon-forecast-service-explainability-api.js";
export {
  XAmzTarget1AmazonForecastServiceExplainabilityExportApi,
  xAmzTarget1AmazonForecastServiceExplainabilityExportApiSchema,
} from "./models/xamz-target1-amazon-forecast-service-explainability-export-api.js";
export {
  XAmzTarget1AmazonForecastServiceForecastExportJobApi,
  xAmzTarget1AmazonForecastServiceForecastExportJobApiSchema,
} from "./models/xamz-target1-amazon-forecast-service-forecast-export-job-api.js";
export {
  XAmzTarget1AmazonForecastServiceForecastsApi,
  xAmzTarget1AmazonForecastServiceForecastsApiSchema,
} from "./models/xamz-target1-amazon-forecast-service-forecasts-api.js";
export {
  XAmzTarget1AmazonForecastServiceMonitorApi,
  xAmzTarget1AmazonForecastServiceMonitorApiSchema,
} from "./models/xamz-target1-amazon-forecast-service-monitor-api.js";
export {
  XAmzTarget1AmazonForecastServiceOperationsApi,
  xAmzTarget1AmazonForecastServiceOperationsApiSchema,
} from "./models/xamz-target1-amazon-forecast-service-operations-api.js";
export {
  XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi,
  xAmzTarget1AmazonForecastServicePredictorBacktestExportJobApiSchema,
} from "./models/xamz-target1-amazon-forecast-service-predictor-backtest-export-job-api.js";
export {
  XAmzTarget1AmazonForecastServicePredictorsApi,
  xAmzTarget1AmazonForecastServicePredictorsApiSchema,
} from "./models/xamz-target1-amazon-forecast-service-predictors-api.js";
export {
  XAmzTarget1AmazonForecastServiceResourceApi,
  xAmzTarget1AmazonForecastServiceResourceApiSchema,
} from "./models/xamz-target1-amazon-forecast-service-resource-api.js";
export {
  XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi,
  xAmzTarget1AmazonForecastServiceWhatIfAnalysisApiSchema,
} from "./models/xamz-target1-amazon-forecast-service-what-if-analysis-api.js";
export {
  XAmzTarget1AmazonForecastServiceWhatIfForecastApi,
  xAmzTarget1AmazonForecastServiceWhatIfForecastApiSchema,
} from "./models/xamz-target1-amazon-forecast-service-what-if-forecast-api.js";
export {
  XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi,
  xAmzTarget1AmazonForecastServiceWhatIfForecastExportApiSchema,
} from "./models/xamz-target1-amazon-forecast-service-what-if-forecast-export-api.js";
export { XAmzTarget2, xAmzTarget2Schema } from "./models/xamz-target2.js";
export {
  XAmzTarget2AmazonForecastServiceDatasetImportJobApi,
  xAmzTarget2AmazonForecastServiceDatasetImportJobApiSchema,
} from "./models/xamz-target2-amazon-forecast-service-dataset-import-job-api.js";
export {
  XAmzTarget2AmazonForecastServiceDatasetsApi,
  xAmzTarget2AmazonForecastServiceDatasetsApiSchema,
} from "./models/xamz-target2-amazon-forecast-service-datasets-api.js";
export {
  XAmzTarget2AmazonForecastServiceExplainabilityApi,
  xAmzTarget2AmazonForecastServiceExplainabilityApiSchema,
} from "./models/xamz-target2-amazon-forecast-service-explainability-api.js";
export {
  XAmzTarget2AmazonForecastServiceExplainabilityExportApi,
  xAmzTarget2AmazonForecastServiceExplainabilityExportApiSchema,
} from "./models/xamz-target2-amazon-forecast-service-explainability-export-api.js";
export {
  XAmzTarget2AmazonForecastServiceForecastExportJobApi,
  xAmzTarget2AmazonForecastServiceForecastExportJobApiSchema,
} from "./models/xamz-target2-amazon-forecast-service-forecast-export-job-api.js";
export {
  XAmzTarget2AmazonForecastServiceForecastsApi,
  xAmzTarget2AmazonForecastServiceForecastsApiSchema,
} from "./models/xamz-target2-amazon-forecast-service-forecasts-api.js";
export {
  XAmzTarget2AmazonForecastServiceMonitorApi,
  xAmzTarget2AmazonForecastServiceMonitorApiSchema,
} from "./models/xamz-target2-amazon-forecast-service-monitor-api.js";
export {
  XAmzTarget2AmazonForecastServiceOperationsApi,
  xAmzTarget2AmazonForecastServiceOperationsApiSchema,
} from "./models/xamz-target2-amazon-forecast-service-operations-api.js";
export {
  XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi,
  xAmzTarget2AmazonForecastServicePredictorBacktestExportJobApiSchema,
} from "./models/xamz-target2-amazon-forecast-service-predictor-backtest-export-job-api.js";
export {
  XAmzTarget2AmazonForecastServicePredictorsApi,
  xAmzTarget2AmazonForecastServicePredictorsApiSchema,
} from "./models/xamz-target2-amazon-forecast-service-predictors-api.js";
export {
  XAmzTarget2AmazonForecastServiceResourceApi,
  xAmzTarget2AmazonForecastServiceResourceApiSchema,
} from "./models/xamz-target2-amazon-forecast-service-resource-api.js";
export {
  XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi,
  xAmzTarget2AmazonForecastServiceWhatIfAnalysisApiSchema,
} from "./models/xamz-target2-amazon-forecast-service-what-if-analysis-api.js";
export {
  XAmzTarget2AmazonForecastServiceWhatIfForecastApi,
  xAmzTarget2AmazonForecastServiceWhatIfForecastApiSchema,
} from "./models/xamz-target2-amazon-forecast-service-what-if-forecast-api.js";
export {
  XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi,
  xAmzTarget2AmazonForecastServiceWhatIfForecastExportApiSchema,
} from "./models/xamz-target2-amazon-forecast-service-what-if-forecast-export-api.js";
export { XAmzTarget3, xAmzTarget3Schema } from "./models/xamz-target3.js";
export {
  XAmzTarget3AmazonForecastServiceDatasetImportJobApi,
  xAmzTarget3AmazonForecastServiceDatasetImportJobApiSchema,
} from "./models/xamz-target3-amazon-forecast-service-dataset-import-job-api.js";
export {
  XAmzTarget3AmazonForecastServiceDatasetsApi,
  xAmzTarget3AmazonForecastServiceDatasetsApiSchema,
} from "./models/xamz-target3-amazon-forecast-service-datasets-api.js";
export {
  XAmzTarget3AmazonForecastServiceExplainabilityApi,
  xAmzTarget3AmazonForecastServiceExplainabilityApiSchema,
} from "./models/xamz-target3-amazon-forecast-service-explainability-api.js";
export {
  XAmzTarget3AmazonForecastServiceExplainabilityExportApi,
  xAmzTarget3AmazonForecastServiceExplainabilityExportApiSchema,
} from "./models/xamz-target3-amazon-forecast-service-explainability-export-api.js";
export {
  XAmzTarget3AmazonForecastServiceForecastExportJobApi,
  xAmzTarget3AmazonForecastServiceForecastExportJobApiSchema,
} from "./models/xamz-target3-amazon-forecast-service-forecast-export-job-api.js";
export {
  XAmzTarget3AmazonForecastServiceForecastsApi,
  xAmzTarget3AmazonForecastServiceForecastsApiSchema,
} from "./models/xamz-target3-amazon-forecast-service-forecasts-api.js";
export {
  XAmzTarget3AmazonForecastServiceMonitorApi,
  xAmzTarget3AmazonForecastServiceMonitorApiSchema,
} from "./models/xamz-target3-amazon-forecast-service-monitor-api.js";
export {
  XAmzTarget3AmazonForecastServiceOperationsApi,
  xAmzTarget3AmazonForecastServiceOperationsApiSchema,
} from "./models/xamz-target3-amazon-forecast-service-operations-api.js";
export {
  XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi,
  xAmzTarget3AmazonForecastServicePredictorBacktestExportJobApiSchema,
} from "./models/xamz-target3-amazon-forecast-service-predictor-backtest-export-job-api.js";
export {
  XAmzTarget3AmazonForecastServicePredictorsApi,
  xAmzTarget3AmazonForecastServicePredictorsApiSchema,
} from "./models/xamz-target3-amazon-forecast-service-predictors-api.js";
export {
  XAmzTarget3AmazonForecastServiceWhatIfForecastApi,
  xAmzTarget3AmazonForecastServiceWhatIfForecastApiSchema,
} from "./models/xamz-target3-amazon-forecast-service-what-if-forecast-api.js";
export {
  XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi,
  xAmzTarget3AmazonForecastServiceWhatIfForecastExportApiSchema,
} from "./models/xamz-target3-amazon-forecast-service-what-if-forecast-export-api.js";
export { XAmzTarget4, xAmzTarget4Schema } from "./models/xamz-target4.js";
export {
  XAmzTarget4AmazonForecastServiceOperationsApi,
  xAmzTarget4AmazonForecastServiceOperationsApiSchema,
} from "./models/xamz-target4-amazon-forecast-service-operations-api.js";
export { XAmzTarget5, xAmzTarget5Schema } from "./models/xamz-target5.js";
export { XAmzTarget6, xAmzTarget6Schema } from "./models/xamz-target6.js";
export {
  XAmzTargetAmazonForecastServiceDatasetImportJobApi,
  xAmzTargetAmazonForecastServiceDatasetImportJobApiSchema,
} from "./models/xamz-target-amazon-forecast-service-dataset-import-job-api.js";
export {
  XAmzTargetAmazonForecastServiceDatasetsApi,
  xAmzTargetAmazonForecastServiceDatasetsApiSchema,
} from "./models/xamz-target-amazon-forecast-service-datasets-api.js";
export {
  XAmzTargetAmazonForecastServiceExplainabilityApi,
  xAmzTargetAmazonForecastServiceExplainabilityApiSchema,
} from "./models/xamz-target-amazon-forecast-service-explainability-api.js";
export {
  XAmzTargetAmazonForecastServiceExplainabilityExportApi,
  xAmzTargetAmazonForecastServiceExplainabilityExportApiSchema,
} from "./models/xamz-target-amazon-forecast-service-explainability-export-api.js";
export {
  XAmzTargetAmazonForecastServiceExportJobsApi,
  xAmzTargetAmazonForecastServiceExportJobsApiSchema,
} from "./models/xamz-target-amazon-forecast-service-export-jobs-api.js";
export {
  XAmzTargetAmazonForecastServiceForecastsApi,
  xAmzTargetAmazonForecastServiceForecastsApiSchema,
} from "./models/xamz-target-amazon-forecast-service-forecasts-api.js";
export {
  XAmzTargetAmazonForecastServiceMonitorApi,
  xAmzTargetAmazonForecastServiceMonitorApiSchema,
} from "./models/xamz-target-amazon-forecast-service-monitor-api.js";
export {
  XAmzTargetAmazonForecastServiceOperationsApi,
  xAmzTargetAmazonForecastServiceOperationsApiSchema,
} from "./models/xamz-target-amazon-forecast-service-operations-api.js";
export {
  XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi,
  xAmzTargetAmazonForecastServicePredictorBacktestExportJobApiSchema,
} from "./models/xamz-target-amazon-forecast-service-predictor-backtest-export-job-api.js";
export {
  XAmzTargetAmazonForecastServicePredictorsApi,
  xAmzTargetAmazonForecastServicePredictorsApiSchema,
} from "./models/xamz-target-amazon-forecast-service-predictors-api.js";
export {
  XAmzTargetAmazonForecastServiceResourceApi,
  xAmzTargetAmazonForecastServiceResourceApiSchema,
} from "./models/xamz-target-amazon-forecast-service-resource-api.js";
export {
  XAmzTargetAmazonForecastServiceTagsApi,
  xAmzTargetAmazonForecastServiceTagsApiSchema,
} from "./models/xamz-target-amazon-forecast-service-tags-api.js";
export {
  XAmzTargetAmazonForecastServiceWhatIfAnalysisApi,
  xAmzTargetAmazonForecastServiceWhatIfAnalysisApiSchema,
} from "./models/xamz-target-amazon-forecast-service-what-if-analysis-api.js";
export {
  XAmzTargetAmazonForecastServiceWhatIfForecastApi,
  xAmzTargetAmazonForecastServiceWhatIfForecastApiSchema,
} from "./models/xamz-target-amazon-forecast-service-what-if-forecast-api.js";
export {
  XAmzTargetAmazonForecastServiceWhatIfForecastExportApi,
  xAmzTargetAmazonForecastServiceWhatIfForecastExportApiSchema,
} from "./models/xamz-target-amazon-forecast-service-what-if-forecast-export-api.js";

export {
  CoreError as AmazonForecastError,
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
