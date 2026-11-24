import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classifierMetadataSchema, type ClassifierMetadata } from "./classifier-metadata.js";
import {
  documentClassifierInputDataConfigSchema,
  type DocumentClassifierInputDataConfig,
} from "./document-classifier-input-data-config.js";
import {
  documentClassifierOutputDataConfigSchema,
  type DocumentClassifierOutputDataConfig,
} from "./document-classifier-output-data-config.js";
import { languageCode9Schema, type LanguageCode9 } from "./language-code9.js";
import { mode2Schema, type Mode2 } from "./mode2.js";
import { status2Schema, type Status2 } from "./status2.js";
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type DocumentClassifierProperties = {
  /** The Amazon Resource Name (ARN) that identifies the document classifier. */
  documentClassifierArn?: string;
  /** The language code for the language of the documents that the classifier was trained on. */
  languageCode?: LanguageCode9;
  /**
   * The status of the document classifier. If the status is TRAINED the classifier is ready to use.
   * If the status is TRAINED_WITH_WARNINGS the classifier training succeeded, but you should review
   * the warnings returned in the CreateDocumentClassifier response. If the status is FAILED you can
   * see additional information about why the classifier wasn't trained in the Message field.
   */
  status?: Status2;
  /** Additional information about the status of the classifier. */
  message?: string;
  /** The time that the document classifier was submitted for training. */
  submitTime?: Date;
  /** The time that training the document classifier completed. */
  endTime?: Date;
  /**
   * Indicates the time when the training starts on documentation classifiers. You are billed for
   * the time interval between this time and the value of TrainingEndTime.
   */
  trainingStartTime?: Date;
  /**
   * The time that training of the document classifier was completed. Indicates the time when the
   * training completes on documentation classifiers. You are billed for the time interval between
   * this time and the value of TrainingStartTime.
   */
  trainingEndTime?: Date;
  inputDataConfig?: DocumentClassifierInputDataConfig;
  outputDataConfig?: DocumentClassifierOutputDataConfig;
  classifierMetadata?: ClassifierMetadata;
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
   * Indicates the mode in which the specific classifier was trained. This also indicates the format
   * of input documents and the format of the confusion matrix. Each classifier can only be trained
   * in one mode and this cannot be changed once the classifier is trained.
   */
  mode?: Mode2;
  /**
   * ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The
   * ModelKmsKeyId can be either of the following formats: KMS Key ID:
   * "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key:
   * "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
   */
  modelKmsKeyId?: string;
  /** The version name that you assigned to the document classifier. */
  versionName?: string;
  /**
   * The Amazon Resource Name (ARN) of the source model. This model was imported from a different
   * Amazon Web Services account to create the document classifier model in your Amazon Web Services
   * account.
   */
  sourceModelArn?: string;
  /** The Amazon Resource Number (ARN) of the flywheel */
  flywheelArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentClassifierPropertiesSchema: Schema<DocumentClassifierProperties> =
  s.object<DocumentClassifierProperties>(
    {
      documentClassifierArn: s.optional(s.string()),
      languageCode: s.optional(s.lazy(() => languageCode9Schema)),
      status: s.optional(s.lazy(() => status2Schema)),
      message: s.optional(s.string()),
      submitTime: s.optional(s.dateTime()),
      endTime: s.optional(s.dateTime()),
      trainingStartTime: s.optional(s.dateTime()),
      trainingEndTime: s.optional(s.dateTime()),
      inputDataConfig: s.optional(s.lazy(() => documentClassifierInputDataConfigSchema)),
      outputDataConfig: s.optional(s.lazy(() => documentClassifierOutputDataConfigSchema)),
      classifierMetadata: s.optional(s.lazy(() => classifierMetadataSchema)),
      dataAccessRoleArn: s.optional(s.string()),
      volumeKmsKeyId: s.optional(s.string()),
      vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
      mode: s.optional(s.lazy(() => mode2Schema)),
      modelKmsKeyId: s.optional(s.string()),
      versionName: s.optional(s.string()),
      sourceModelArn: s.optional(s.string()),
      flywheelArn: s.optional(s.string()),
      _keysMap: {
        documentClassifierArn: "DocumentClassifierArn",
        languageCode: "LanguageCode",
        status: "Status",
        message: "Message",
        submitTime: "SubmitTime",
        endTime: "EndTime",
        trainingStartTime: "TrainingStartTime",
        trainingEndTime: "TrainingEndTime",
        inputDataConfig: "InputDataConfig",
        outputDataConfig: "OutputDataConfig",
        classifierMetadata: "ClassifierMetadata",
        dataAccessRoleArn: "DataAccessRoleArn",
        volumeKmsKeyId: "VolumeKmsKeyId",
        vpcConfig: "VpcConfig",
        mode: "Mode",
        modelKmsKeyId: "ModelKmsKeyId",
        versionName: "VersionName",
        sourceModelArn: "SourceModelArn",
        flywheelArn: "FlywheelArn",
      },
    },
    { additionalProperties: s.json() },
  );
