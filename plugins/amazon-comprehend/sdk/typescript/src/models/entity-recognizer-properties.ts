import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityRecognizerInputDataConfigSchema,
  type EntityRecognizerInputDataConfig,
} from "./entity-recognizer-input-data-config.js";
import {
  entityRecognizerMetadataSchema,
  type EntityRecognizerMetadata,
} from "./entity-recognizer-metadata.js";
import {
  entityRecognizerOutputDataConfigSchema,
  type EntityRecognizerOutputDataConfig,
} from "./entity-recognizer-output-data-config.js";
import { languageCode11Schema, type LanguageCode11 } from "./language-code11.js";
import { status4Schema, type Status4 } from "./status4.js";
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type EntityRecognizerProperties = {
  /** The Amazon Resource Name (ARN) that identifies the entity recognizer. */
  entityRecognizerArn?: string;
  /**
   * The language of the input documents. All documents must be in the same language. Only English
   * ("en") is currently supported.
   */
  languageCode?: LanguageCode11;
  /** Provides the status of the entity recognizer. */
  status?: Status4;
  /** A description of the status of the recognizer. */
  message?: string;
  /** The time that the recognizer was submitted for processing. */
  submitTime?: Date;
  /** The time that the recognizer creation completed. */
  endTime?: Date;
  /** The time that training of the entity recognizer started. */
  trainingStartTime?: Date;
  /** The time that training of the entity recognizer was completed. */
  trainingEndTime?: Date;
  inputDataConfig?: EntityRecognizerInputDataConfig;
  recognizerMetadata?: EntityRecognizerMetadata;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to
   * your input data.
   */
  dataAccessRoleArn?: string;
  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to
   * encrypt data on the storage volume attached to the ML compute instance(s) that process the
   * analysis job. The VolumeKmsKeyId can be either of the following formats: KMS Key ID:
   * "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key:
   * "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
   */
  volumeKmsKeyId?: string;
  vpcConfig?: VpcConfig;
  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The
   * ModelKmsKeyId can be either of the following formats: KMS Key ID:
   * "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key:
   * "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
   */
  modelKmsKeyId?: string;
  /** The version name you assigned to the entity recognizer. */
  versionName?: string;
  /**
   * The Amazon Resource Name (ARN) of the source model. This model was imported from a different
   * Amazon Web Services account to create the entity recognizer model in your Amazon Web Services
   * account.
   */
  sourceModelArn?: string;
  /** The Amazon Resource Number (ARN) of the flywheel */
  flywheelArn?: string;
  outputDataConfig?: EntityRecognizerOutputDataConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityRecognizerPropertiesSchema: Schema<EntityRecognizerProperties> =
  s.object<EntityRecognizerProperties>(
    {
      entityRecognizerArn: s.optional(s.string()),
      languageCode: s.optional(s.lazy(() => languageCode11Schema)),
      status: s.optional(s.lazy(() => status4Schema)),
      message: s.optional(s.string()),
      submitTime: s.optional(s.dateTime()),
      endTime: s.optional(s.dateTime()),
      trainingStartTime: s.optional(s.dateTime()),
      trainingEndTime: s.optional(s.dateTime()),
      inputDataConfig: s.optional(s.lazy(() => entityRecognizerInputDataConfigSchema)),
      recognizerMetadata: s.optional(s.lazy(() => entityRecognizerMetadataSchema)),
      dataAccessRoleArn: s.optional(s.string()),
      volumeKmsKeyId: s.optional(s.string()),
      vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
      modelKmsKeyId: s.optional(s.string()),
      versionName: s.optional(s.string()),
      sourceModelArn: s.optional(s.string()),
      flywheelArn: s.optional(s.string()),
      outputDataConfig: s.optional(s.lazy(() => entityRecognizerOutputDataConfigSchema)),
      _keysMap: {
        entityRecognizerArn: "EntityRecognizerArn",
        languageCode: "LanguageCode",
        status: "Status",
        message: "Message",
        submitTime: "SubmitTime",
        endTime: "EndTime",
        trainingStartTime: "TrainingStartTime",
        trainingEndTime: "TrainingEndTime",
        inputDataConfig: "InputDataConfig",
        recognizerMetadata: "RecognizerMetadata",
        dataAccessRoleArn: "DataAccessRoleArn",
        volumeKmsKeyId: "VolumeKmsKeyId",
        vpcConfig: "VpcConfig",
        modelKmsKeyId: "ModelKmsKeyId",
        versionName: "VersionName",
        sourceModelArn: "SourceModelArn",
        flywheelArn: "FlywheelArn",
        outputDataConfig: "OutputDataConfig",
      },
    },
    { additionalProperties: s.json() },
  );
