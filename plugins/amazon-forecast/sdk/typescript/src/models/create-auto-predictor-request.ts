import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataConfigSchema, type DataConfig } from "./data-config.js";
import { encryptionConfigSchema, type EncryptionConfig } from "./encryption-config.js";
import { monitorConfigSchema, type MonitorConfig } from "./monitor-config.js";
import { optimizationMetricSchema, type OptimizationMetric } from "./optimization-metric.js";
import { tagSchema, type Tag } from "./tag.js";
import { timeAlignmentBoundarySchema, type TimeAlignmentBoundary } from "./time-alignment-boundary.js";

export type CreateAutoPredictorRequest = {
  /** A unique name for the predictor */
  predictorName: string;
  /**
   * The number of time-steps that the model predicts. The forecast horizon is also called the
   * prediction length. The maximum forecast horizon is the lesser of 500 time-steps or 1/4 of the
   * TARGET_TIME_SERIES dataset length. If you are retraining an existing AutoPredictor, then the
   * maximum forecast horizon is the lesser of 500 time-steps or 1/3 of the TARGET_TIME_SERIES
   * dataset length. If you are upgrading to an AutoPredictor or retraining an existing
   * AutoPredictor, you cannot update the forecast horizon parameter. You can meet this requirement
   * by providing longer time-series in the dataset.
   */
  forecastHorizon?: number;
  /**
   * The forecast types used to train a predictor. You can specify up to five forecast types.
   * Forecast types can be quantiles from 0.01 to 0.99, by increments of 0.01 or higher. You can
   * also specify the mean forecast with mean.
   */
  forecastTypes?: string[];
  /**
   * An array of dimension (field) names that specify how to group the generated forecast. For
   * example, if you are generating forecasts for item sales across all your stores, and your
   * dataset contains a store_id field, you would specify store_id as a dimension to group sales
   * forecasts for each store.
   */
  forecastDimensions?: string[];
  /**
   * The frequency of predictions in a forecast. Valid intervals are an integer followed by Y
   * (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example, "1D" indicates
   * every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap
   * with the next larger frequency. That means, for example, you cannot specify a frequency of 60
   * minutes, because that is equivalent to 1 hour. The valid values for each frequency are the
   * following: Minute - 1-59 Hour - 1-23 Day - 1-6 Week - 1-4 Month - 1-11 Year - 1 Thus, if you
   * want every other week forecasts, specify "2
   */
  forecastFrequency?: string;
  dataConfig?: DataConfig;
  encryptionConfig?: EncryptionConfig;
  /**
   * The ARN of the predictor to retrain or upgrade. This parameter is only used when retraining or
   * upgrading a predictor. When creating a new predictor, do not specify a value for this
   * parameter. When upgrading or retraining a predictor, only specify values for the
   * ReferencePredictorArn and PredictorName. The value for PredictorName must be a unique predictor
   * name.
   */
  referencePredictorArn?: string;
  /** The accuracy metric used to optimize the predictor. */
  optimizationMetric?: OptimizationMetric;
  /** Create an Explainability resource for the predictor. */
  explainPredictor?: boolean;
  /**
   * Optional metadata to help you categorize and organize your predictors. Each tag consists of a
   * key and an optional value, both of which you define. Tag keys and values are case sensitive.
   * The following restrictions apply to tags: For each resource, each tag key must be unique and
   * each tag key must have one value. Maximum number of tags per resource: 50. Maximum key length:
   * 128 Unicode characters in UTF-8. Maximum value length: 256 Unicode characters in UTF-8.
   * Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : /
   * \@. If your tagging schema is used across o
   */
  tags?: Tag[];
  monitorConfig?: MonitorConfig;
  timeAlignmentBoundary?: TimeAlignmentBoundary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createAutoPredictorRequestSchema: Schema<CreateAutoPredictorRequest> =
  s.object<CreateAutoPredictorRequest>(
    {
      predictorName: s.string(),
      forecastHorizon: s.optional(s.int()),
      forecastTypes: s.optional(s.array(s.string())),
      forecastDimensions: s.optional(s.array(s.string())),
      forecastFrequency: s.optional(s.string()),
      dataConfig: s.optional(s.lazy(() => dataConfigSchema)),
      encryptionConfig: s.optional(s.lazy(() => encryptionConfigSchema)),
      referencePredictorArn: s.optional(s.string()),
      optimizationMetric: s.optional(s.lazy(() => optimizationMetricSchema)),
      explainPredictor: s.optional(s.boolean()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      monitorConfig: s.optional(s.lazy(() => monitorConfigSchema)),
      timeAlignmentBoundary: s.optional(s.lazy(() => timeAlignmentBoundarySchema)),
      _keysMap: {
        predictorName: "PredictorName",
        forecastHorizon: "ForecastHorizon",
        forecastTypes: "ForecastTypes",
        forecastDimensions: "ForecastDimensions",
        forecastFrequency: "ForecastFrequency",
        dataConfig: "DataConfig",
        encryptionConfig: "EncryptionConfig",
        referencePredictorArn: "ReferencePredictorArn",
        optimizationMetric: "OptimizationMetric",
        explainPredictor: "ExplainPredictor",
        tags: "Tags",
        monitorConfig: "MonitorConfig",
        timeAlignmentBoundary: "TimeAlignmentBoundary",
      },
    },
    { additionalProperties: s.json() },
  );
