import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  autoMlOverrideStrategyAmazonForecastServicePredictorsApiSchema,
  type AutoMlOverrideStrategyAmazonForecastServicePredictorsApi,
} from "./auto-ml-override-strategy-amazon-forecast-service-predictors-api.js";
import { encryptionConfigSchema, type EncryptionConfig } from "./encryption-config.js";
import { evaluationParametersSchema, type EvaluationParameters } from "./evaluation-parameters.js";
import { featurizationConfigSchema, type FeaturizationConfig } from "./featurization-config.js";
import {
  hyperParameterTuningJobConfigSchema,
  type HyperParameterTuningJobConfig,
} from "./hyper-parameter-tuning-job-config.js";
import { inputDataConfigSchema, type InputDataConfig } from "./input-data-config.js";
import { optimizationMetricSchema, type OptimizationMetric } from "./optimization-metric.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreatePredictorRequest = {
  /** A name for the predictor. */
  predictorName: string;
  /**
   * The Amazon Resource Name (ARN) of the algorithm to use for model training. Required if
   * PerformAutoML is not set to true. Supported algorithms: arn:aws:forecast:::algorithm/ARIMA
   * arn:aws:forecast:::algorithm/CNN-QR arn:aws:forecast:::algorithm/Deep_AR_Plus
   * arn:aws:forecast:::algorithm/ETS arn:aws:forecast:::algorithm/NPTS
   * arn:aws:forecast:::algorithm/Prophet
   */
  algorithmArn?: string;
  /**
   * Specifies the number of time-steps that the model is trained to predict. The forecast horizon
   * is also called the prediction length. For example, if you configure a dataset for daily data
   * collection (using the DataFrequency parameter of the CreateDataset operation) and set the
   * forecast horizon to 10, the model returns predictions for 10 days. The maximum forecast horizon
   * is the lesser of 500 time-steps or 1/3 of the TARGET_TIME_SERIES dataset length.
   */
  forecastHorizon: number;
  /**
   * Specifies the forecast types used to train a predictor. You can specify up to five forecast
   * types. Forecast types can be quantiles from 0.01 to 0.99, by increments of 0.01 or higher. You
   * can also specify the mean forecast with mean. The default value is ["0.10", "0.50", "0.9"].
   */
  forecastTypes?: string[];
  /**
   * Whether to perform AutoML. When Amazon Forecast performs AutoML, it evaluates the algorithms it
   * provides and chooses the best algorithm and configuration for your training dataset. The
   * default value is false. In this case, you are required to specify an algorithm. Set
   * PerformAutoML to true to have Amazon Forecast perform AutoML. This is a good option if you
   * aren't sure which algorithm is suitable for your training data. In this case, PerformHPO must
   * be false.
   */
  performAutoMl?: boolean;
  /**
   * The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon
   * Web Services Support or your account manager to learn more about access privileges. Used to
   * overide the default AutoML strategy, which is to optimize predictor accuracy. To apply an
   * AutoML strategy that minimizes training time, use LatencyOptimized. This parameter is only
   * valid for predictors trained using AutoML.
   */
  autoMlOverrideStrategy?: AutoMlOverrideStrategyAmazonForecastServicePredictorsApi;
  /**
   * Whether to perform hyperparameter optimization (HPO). HPO finds optimal hyperparameter values
   * for your training data. The process of performing HPO is known as running a hyperparameter
   * tuning job. The default value is false. In this case, Amazon Forecast uses default
   * hyperparameter values from the chosen algorithm. To override the default values, set PerformHPO
   * to true and, optionally, supply the HyperParameterTuningJobConfig object. The tuning job
   * specifies a metric to optimize, which hyperparameters participate in tuning, and the valid
   * range for each tunable hyperparameter. In this case, you
   */
  performHpo?: boolean;
  /**
   * The hyperparameters to override for model training. The hyperparameters that you can override
   * are listed in the individual algorithms. For the list of supported algorithms, see
   * aws-forecast-choosing-recipes.
   */
  trainingParameters?: Record<string, string>;
  evaluationParameters?: EvaluationParameters;
  hpoConfig?: HyperParameterTuningJobConfig;
  inputDataConfig: InputDataConfig;
  featurizationConfig: FeaturizationConfig;
  encryptionConfig?: EncryptionConfig;
  /**
   * The optional metadata that you apply to the predictor to help you categorize and organize them.
   * Each tag consists of a key and an optional value, both of which you define. The following basic
   * restrictions apply to tags: Maximum number of tags per resource - 50. For each resource, each
   * tag key must be unique, and each tag key can have only one value. Maximum key length - 128
   * Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your
   * tagging schema is used across multiple services and resources, remember that other services may
   * have restrictions on allowed chara
   */
  tags?: Tag[];
  /** The accuracy metric used to optimize the predictor. */
  optimizationMetric?: OptimizationMetric;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createPredictorRequestSchema: Schema<CreatePredictorRequest> = s.object<CreatePredictorRequest>(
  {
    predictorName: s.string(),
    algorithmArn: s.optional(s.string()),
    forecastHorizon: s.int(),
    forecastTypes: s.optional(s.array(s.string())),
    performAutoMl: s.optional(s.boolean()),
    autoMlOverrideStrategy: s.optional(
      s.lazy(() => autoMlOverrideStrategyAmazonForecastServicePredictorsApiSchema),
    ),
    performHpo: s.optional(s.boolean()),
    trainingParameters: s.optional(s.record(s.string(), s.string())),
    evaluationParameters: s.optional(s.lazy(() => evaluationParametersSchema)),
    hpoConfig: s.optional(s.lazy(() => hyperParameterTuningJobConfigSchema)),
    inputDataConfig: inputDataConfigSchema,
    featurizationConfig: featurizationConfigSchema,
    encryptionConfig: s.optional(s.lazy(() => encryptionConfigSchema)),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    optimizationMetric: s.optional(s.lazy(() => optimizationMetricSchema)),
    _keysMap: {
      predictorName: "PredictorName",
      algorithmArn: "AlgorithmArn",
      forecastHorizon: "ForecastHorizon",
      forecastTypes: "ForecastTypes",
      performAutoMl: "PerformAutoML",
      autoMlOverrideStrategy: "AutoMLOverrideStrategy",
      performHpo: "PerformHPO",
      trainingParameters: "TrainingParameters",
      evaluationParameters: "EvaluationParameters",
      hpoConfig: "HPOConfig",
      inputDataConfig: "InputDataConfig",
      featurizationConfig: "FeaturizationConfig",
      encryptionConfig: "EncryptionConfig",
      tags: "Tags",
      optimizationMetric: "OptimizationMetric",
    },
  },
  { additionalProperties: s.json() },
);
