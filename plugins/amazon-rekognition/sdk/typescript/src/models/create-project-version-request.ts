import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customizationFeatureConfigSchema,
  type CustomizationFeatureConfig,
} from "./customization-feature-config.js";
import { outputConfigSchema, type OutputConfig } from "./output-config.js";
import { testingDataSchema, type TestingData } from "./testing-data.js";
import { trainingDataSchema, type TrainingData } from "./training-data.js";

export type CreateProjectVersionRequest = {
  /**
   * The ARN of the Amazon Rekognition project that will manage the project version you want to
   * train.
   */
  projectArn: string;
  /** A name for the version of the project version. This value must be unique. */
  versionName: string;
  outputConfig: OutputConfig;
  trainingData?: TrainingData;
  testingData?: TestingData;
  /** A set of tags (key-value pairs) that you want to attach to the project version. */
  tags?: Record<string, string>;
  /**
   * The identifier for your AWS Key Management Service key (AWS KMS key). You can supply the Amazon
   * Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an
   * alias ARN. The key is used to encrypt training images, test images, and manifest files copied
   * into the service for the project version. Your source images are unaffected. The key is also
   * used to encrypt training results and manifest files written to the output Amazon S3 bucket
   * (OutputConfig). If you choose to use your own KMS key, you need the following permissions on
   * the KMS key. kms:CreateGrant kms:Descri
   */
  kmsKeyId?: string;
  /** A description applied to the project version being created. */
  versionDescription?: string;
  featureConfig?: CustomizationFeatureConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createProjectVersionRequestSchema: Schema<CreateProjectVersionRequest> =
  s.object<CreateProjectVersionRequest>(
    {
      projectArn: s.string(),
      versionName: s.string(),
      outputConfig: outputConfigSchema,
      trainingData: s.optional(s.lazy(() => trainingDataSchema)),
      testingData: s.optional(s.lazy(() => testingDataSchema)),
      tags: s.optional(s.record(s.string(), s.string())),
      kmsKeyId: s.optional(s.string()),
      versionDescription: s.optional(s.string()),
      featureConfig: s.optional(s.lazy(() => customizationFeatureConfigSchema)),
      _keysMap: {
        projectArn: "ProjectArn",
        versionName: "VersionName",
        outputConfig: "OutputConfig",
        trainingData: "TrainingData",
        testingData: "TestingData",
        tags: "Tags",
        kmsKeyId: "KmsKeyId",
        versionDescription: "VersionDescription",
        featureConfig: "FeatureConfig",
      },
    },
    { additionalProperties: s.json() },
  );
