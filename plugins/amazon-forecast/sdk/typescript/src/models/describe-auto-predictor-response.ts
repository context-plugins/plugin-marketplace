import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataConfigSchema, type DataConfig } from "./data-config.js";
import { encryptionConfigSchema, type EncryptionConfig } from "./encryption-config.js";
import { explainabilityInfoSchema, type ExplainabilityInfo } from "./explainability-info.js";
import { monitorInfoSchema, type MonitorInfo } from "./monitor-info.js";
import { optimizationMetricSchema, type OptimizationMetric } from "./optimization-metric.js";
import {
  referencePredictorSummarySchema,
  type ReferencePredictorSummary,
} from "./reference-predictor-summary.js";
import { timeAlignmentBoundarySchema, type TimeAlignmentBoundary } from "./time-alignment-boundary.js";

export type DescribeAutoPredictorResponse = {
  /** The Amazon Resource Name (ARN) of the predictor */
  predictorArn?: string;
  /** The name of the predictor. */
  predictorName?: string;
  /**
   * The number of time-steps that the model predicts. The forecast horizon is also called the
   * prediction length.
   */
  forecastHorizon?: number;
  /** The forecast types used during predictor training. Default value is ["0.1","0.5","0.9"]. */
  forecastTypes?: string[];
  /**
   * The frequency of predictions in a forecast. Valid intervals are Y (Year), M (Month), W (Week),
   * D (Day), H (Hour), 30min (30 minutes), 15min (15 minutes), 10min (10 minutes), 5min (5
   * minutes), and 1min (1 minute). For example, "Y" indicates every year and "5min" indicates every
   * five minutes.
   */
  forecastFrequency?: string;
  /**
   * An array of dimension (field) names that specify the attributes used to group your time series.
   */
  forecastDimensions?: string[];
  /**
   * An array of the ARNs of the dataset import jobs used to import training data for the predictor.
   */
  datasetImportJobArns?: string[];
  dataConfig?: DataConfig;
  encryptionConfig?: EncryptionConfig;
  referencePredictorSummary?: ReferencePredictorSummary;
  /** The estimated time remaining in minutes for the predictor training job to complete. */
  estimatedTimeRemainingInMinutes?: number;
  /**
   * The status of the predictor. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS,
   * CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED
   */
  status?: string;
  /** In the event of an error, a message detailing the cause of the error. */
  message?: string;
  /** The timestamp of the CreateAutoPredictor request. */
  creationTime?: Date;
  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   * CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING
   * - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When
   * the job finished or failed.
   */
  lastModificationTime?: Date;
  /** The accuracy metric used to optimize the predictor. */
  optimizationMetric?: OptimizationMetric;
  explainabilityInfo?: ExplainabilityInfo;
  monitorInfo?: MonitorInfo;
  timeAlignmentBoundary?: TimeAlignmentBoundary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeAutoPredictorResponseSchema: Schema<DescribeAutoPredictorResponse> =
  s.object<DescribeAutoPredictorResponse>(
    {
      predictorArn: s.optional(s.string()),
      predictorName: s.optional(s.string()),
      forecastHorizon: s.optional(s.int()),
      forecastTypes: s.optional(s.array(s.string())),
      forecastFrequency: s.optional(s.string()),
      forecastDimensions: s.optional(s.array(s.string())),
      datasetImportJobArns: s.optional(s.array(s.string())),
      dataConfig: s.optional(s.lazy(() => dataConfigSchema)),
      encryptionConfig: s.optional(s.lazy(() => encryptionConfigSchema)),
      referencePredictorSummary: s.optional(s.lazy(() => referencePredictorSummarySchema)),
      estimatedTimeRemainingInMinutes: s.optional(s.int()),
      status: s.optional(s.string()),
      message: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModificationTime: s.optional(s.dateTime()),
      optimizationMetric: s.optional(s.lazy(() => optimizationMetricSchema)),
      explainabilityInfo: s.optional(s.lazy(() => explainabilityInfoSchema)),
      monitorInfo: s.optional(s.lazy(() => monitorInfoSchema)),
      timeAlignmentBoundary: s.optional(s.lazy(() => timeAlignmentBoundarySchema)),
      _keysMap: {
        predictorArn: "PredictorArn",
        predictorName: "PredictorName",
        forecastHorizon: "ForecastHorizon",
        forecastTypes: "ForecastTypes",
        forecastFrequency: "ForecastFrequency",
        forecastDimensions: "ForecastDimensions",
        datasetImportJobArns: "DatasetImportJobArns",
        dataConfig: "DataConfig",
        encryptionConfig: "EncryptionConfig",
        referencePredictorSummary: "ReferencePredictorSummary",
        estimatedTimeRemainingInMinutes: "EstimatedTimeRemainingInMinutes",
        status: "Status",
        message: "Message",
        creationTime: "CreationTime",
        lastModificationTime: "LastModificationTime",
        optimizationMetric: "OptimizationMetric",
        explainabilityInfo: "ExplainabilityInfo",
        monitorInfo: "MonitorInfo",
        timeAlignmentBoundary: "TimeAlignmentBoundary",
      },
    },
    { additionalProperties: s.json() },
  );
