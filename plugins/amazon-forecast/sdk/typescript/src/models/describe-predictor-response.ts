import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { autoMlOverrideStrategySchema, type AutoMlOverrideStrategy } from "./auto-ml-override-strategy.js";
import { encryptionConfigSchema, type EncryptionConfig } from "./encryption-config.js";
import { evaluationParametersSchema, type EvaluationParameters } from "./evaluation-parameters.js";
import { featurizationConfigSchema, type FeaturizationConfig } from "./featurization-config.js";
import {
  hyperParameterTuningJobConfigSchema,
  type HyperParameterTuningJobConfig,
} from "./hyper-parameter-tuning-job-config.js";
import { inputDataConfigSchema, type InputDataConfig } from "./input-data-config.js";
import { optimizationMetricSchema, type OptimizationMetric } from "./optimization-metric.js";
import {
  predictorExecutionDetailsSchema,
  type PredictorExecutionDetails,
} from "./predictor-execution-details.js";

export type DescribePredictorResponse = {
  /** The ARN of the predictor. */
  predictorArn?: string;
  /** The name of the predictor. */
  predictorName?: string;
  /** The Amazon Resource Name (ARN) of the algorithm used for model training. */
  algorithmArn?: string;
  /** When PerformAutoML is specified, the ARN of the chosen algorithm. */
  autoMlAlgorithmArns?: string[];
  /**
   * The number of time-steps of the forecast. The forecast horizon is also called the prediction
   * length.
   */
  forecastHorizon?: number;
  /** The forecast types used during predictor training. Default value is ["0.1","0.5","0.9"] */
  forecastTypes?: string[];
  /** Whether the predictor is set to perform AutoML. */
  performAutoMl?: boolean;
  /**
   * The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon
   * Web Services Support or your account manager to learn more about access privileges. The AutoML
   * strategy used to train the predictor. Unless LatencyOptimized is specified, the AutoML strategy
   * optimizes predictor accuracy. This parameter is only valid for predictors trained using AutoML.
   */
  autoMlOverrideStrategy?: AutoMlOverrideStrategy;
  /** Whether the predictor is set to perform hyperparameter optimization (HPO). */
  performHpo?: boolean;
  /**
   * The default training parameters or overrides selected during model training. When running
   * AutoML or choosing HPO with CNN-QR or DeepAR+, the optimized values for the chosen
   * hyperparameters are returned. For more information, see aws-forecast-choosing-recipes.
   */
  trainingParameters?: Record<string, string>;
  evaluationParameters?: EvaluationParameters;
  hpoConfig?: HyperParameterTuningJobConfig;
  inputDataConfig?: InputDataConfig;
  featurizationConfig?: FeaturizationConfig;
  encryptionConfig?: EncryptionConfig;
  predictorExecutionDetails?: PredictorExecutionDetails;
  /** The estimated time remaining in minutes for the predictor training job to complete. */
  estimatedTimeRemainingInMinutes?: number;
  /** Whether the predictor was created with CreateAutoPredictor. */
  isAutoPredictor?: boolean;
  /**
   * An array of the ARNs of the dataset import jobs used to import training data for the predictor.
   */
  datasetImportJobArns?: string[];
  /**
   * The status of the predictor. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS,
   * CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED CREATE_STOPPING, CREATE_STOPPED
   * The Status of the predictor must be ACTIVE before you can use the predictor to create a
   * forecast.
   */
  status?: string;
  /** If an error occurred, an informational message about the error. */
  message?: string;
  /** When the model training task was created. */
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describePredictorResponseSchema: Schema<DescribePredictorResponse> =
  s.object<DescribePredictorResponse>(
    {
      predictorArn: s.optional(s.string()),
      predictorName: s.optional(s.string()),
      algorithmArn: s.optional(s.string()),
      autoMlAlgorithmArns: s.optional(s.array(s.string())),
      forecastHorizon: s.optional(s.int()),
      forecastTypes: s.optional(s.array(s.string())),
      performAutoMl: s.optional(s.boolean()),
      autoMlOverrideStrategy: s.optional(s.lazy(() => autoMlOverrideStrategySchema)),
      performHpo: s.optional(s.boolean()),
      trainingParameters: s.optional(s.record(s.string(), s.string())),
      evaluationParameters: s.optional(s.lazy(() => evaluationParametersSchema)),
      hpoConfig: s.optional(s.lazy(() => hyperParameterTuningJobConfigSchema)),
      inputDataConfig: s.optional(s.lazy(() => inputDataConfigSchema)),
      featurizationConfig: s.optional(s.lazy(() => featurizationConfigSchema)),
      encryptionConfig: s.optional(s.lazy(() => encryptionConfigSchema)),
      predictorExecutionDetails: s.optional(s.lazy(() => predictorExecutionDetailsSchema)),
      estimatedTimeRemainingInMinutes: s.optional(s.int()),
      isAutoPredictor: s.optional(s.boolean()),
      datasetImportJobArns: s.optional(s.array(s.string())),
      status: s.optional(s.string()),
      message: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModificationTime: s.optional(s.dateTime()),
      optimizationMetric: s.optional(s.lazy(() => optimizationMetricSchema)),
      _keysMap: {
        predictorArn: "PredictorArn",
        predictorName: "PredictorName",
        algorithmArn: "AlgorithmArn",
        autoMlAlgorithmArns: "AutoMLAlgorithmArns",
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
        predictorExecutionDetails: "PredictorExecutionDetails",
        estimatedTimeRemainingInMinutes: "EstimatedTimeRemainingInMinutes",
        isAutoPredictor: "IsAutoPredictor",
        datasetImportJobArns: "DatasetImportJobArns",
        status: "Status",
        message: "Message",
        creationTime: "CreationTime",
        lastModificationTime: "LastModificationTime",
        optimizationMetric: "OptimizationMetric",
      },
    },
    { additionalProperties: s.json() },
  );
