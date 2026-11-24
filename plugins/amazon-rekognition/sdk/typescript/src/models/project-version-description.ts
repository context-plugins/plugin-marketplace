import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customizationFeatureConfigSchema,
  type CustomizationFeatureConfig,
} from "./customization-feature-config.js";
import { evaluationResultSchema, type EvaluationResult } from "./evaluation-result.js";
import {
  featureAmazonRekognitionProjectVersionApiSchema,
  type FeatureAmazonRekognitionProjectVersionApi,
} from "./feature-amazon-rekognition-project-version-api.js";
import { groundTruthManifestSchema, type GroundTruthManifest } from "./ground-truth-manifest.js";
import { outputConfigSchema, type OutputConfig } from "./output-config.js";
import {
  status1AmazonRekognitionProjectVersionApiSchema,
  type Status1AmazonRekognitionProjectVersionApi,
} from "./status1-amazon-rekognition-project-version-api.js";
import { testingDataResultSchema, type TestingDataResult } from "./testing-data-result.js";
import { trainingDataResultSchema, type TrainingDataResult } from "./training-data-result.js";

export type ProjectVersionDescription = {
  /** The Amazon Resource Name (ARN) of the project version. */
  projectVersionArn?: string;
  /** The Unix datetime for the date and time that training started. */
  creationTimestamp?: Date;
  /**
   * The minimum number of inference units used by the model. Applies only to Custom Labels
   * projects. For more information, see StartProjectVersion.
   */
  minInferenceUnits?: number;
  /** The current status of the model version. */
  status?: Status1AmazonRekognitionProjectVersionApi;
  /** A descriptive message for an error or warning that occurred. */
  statusMessage?: string;
  /**
   * The duration, in seconds, that you were billed for a successful training of the model version.
   * This value is only returned if the model version has been successfully trained.
   */
  billableTrainingTimeInSeconds?: number;
  /** The Unix date and time that training of the model ended. */
  trainingEndTimestamp?: Date;
  outputConfig?: OutputConfig;
  trainingDataResult?: TrainingDataResult;
  testingDataResult?: TestingDataResult;
  evaluationResult?: EvaluationResult;
  manifestSummary?: GroundTruthManifest;
  /**
   * The identifer for the AWS Key Management Service key (AWS KMS key) that was used to encrypt the
   * model during training.
   */
  kmsKeyId?: string;
  /**
   * The maximum number of inference units Amazon Rekognition uses to auto-scale the model. Applies
   * only to Custom Labels projects. For more information, see StartProjectVersion.
   */
  maxInferenceUnits?: number;
  /**
   * If the model version was copied from a different project, SourceProjectVersionArn contains the
   * ARN of the source model version.
   */
  sourceProjectVersionArn?: string;
  /** A user-provided description of the project version. */
  versionDescription?: string;
  /** The feature that was customized. */
  feature?: FeatureAmazonRekognitionProjectVersionApi;
  /** The base detection model version used to create the project version. */
  baseModelVersion?: string;
  featureConfig?: CustomizationFeatureConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectVersionDescriptionSchema: Schema<ProjectVersionDescription> =
  s.object<ProjectVersionDescription>(
    {
      projectVersionArn: s.optional(s.string()),
      creationTimestamp: s.optional(s.dateTime()),
      minInferenceUnits: s.optional(s.int()),
      status: s.optional(s.lazy(() => status1AmazonRekognitionProjectVersionApiSchema)),
      statusMessage: s.optional(s.string()),
      billableTrainingTimeInSeconds: s.optional(s.int()),
      trainingEndTimestamp: s.optional(s.dateTime()),
      outputConfig: s.optional(s.lazy(() => outputConfigSchema)),
      trainingDataResult: s.optional(s.lazy(() => trainingDataResultSchema)),
      testingDataResult: s.optional(s.lazy(() => testingDataResultSchema)),
      evaluationResult: s.optional(s.lazy(() => evaluationResultSchema)),
      manifestSummary: s.optional(s.lazy(() => groundTruthManifestSchema)),
      kmsKeyId: s.optional(s.string()),
      maxInferenceUnits: s.optional(s.int()),
      sourceProjectVersionArn: s.optional(s.string()),
      versionDescription: s.optional(s.string()),
      feature: s.optional(s.lazy(() => featureAmazonRekognitionProjectVersionApiSchema)),
      baseModelVersion: s.optional(s.string()),
      featureConfig: s.optional(s.lazy(() => customizationFeatureConfigSchema)),
      _keysMap: {
        projectVersionArn: "ProjectVersionArn",
        creationTimestamp: "CreationTimestamp",
        minInferenceUnits: "MinInferenceUnits",
        status: "Status",
        statusMessage: "StatusMessage",
        billableTrainingTimeInSeconds: "BillableTrainingTimeInSeconds",
        trainingEndTimestamp: "TrainingEndTimestamp",
        outputConfig: "OutputConfig",
        trainingDataResult: "TrainingDataResult",
        testingDataResult: "TestingDataResult",
        evaluationResult: "EvaluationResult",
        manifestSummary: "ManifestSummary",
        kmsKeyId: "KmsKeyId",
        maxInferenceUnits: "MaxInferenceUnits",
        sourceProjectVersionArn: "SourceProjectVersionArn",
        versionDescription: "VersionDescription",
        feature: "Feature",
        baseModelVersion: "BaseModelVersion",
        featureConfig: "FeatureConfig",
      },
    },
    { additionalProperties: s.json() },
  );
