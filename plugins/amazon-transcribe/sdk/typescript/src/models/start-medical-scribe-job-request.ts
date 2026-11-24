import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mediaSchema, type Media } from "./media.js";
import {
  medicalScribeChannelDefinitionSchema,
  type MedicalScribeChannelDefinition,
} from "./medical-scribe-channel-definition.js";
import { medicalScribeContextSchema, type MedicalScribeContext } from "./medical-scribe-context.js";
import { medicalScribeSettingsSchema, type MedicalScribeSettings } from "./medical-scribe-settings.js";
import { tagSchema, type Tag } from "./tag.js";

export type StartMedicalScribeJobRequest = {
  /**
   * A unique name, chosen by you, for your Medical Scribe job. This name is case sensitive, cannot
   * contain spaces, and must be unique within an Amazon Web Services account. If you try to create
   * a new job with the same name as an existing job, you get a ConflictException error.
   */
  medicalScribeJobName: string;
  media: Media;
  /**
   * The name of the Amazon S3 bucket where you want your Medical Scribe output stored. Do not
   * include the S3:// prefix of the specified bucket. Note that the role specified in the
   * DataAccessRoleArn request parameter must have permission to use the specified location. You can
   * change Amazon S3 permissions using the Amazon Web Services Management Console. See also
   * Permissions Required for IAM User Roles.
   */
  outputBucketName: string;
  /**
   * The Amazon Resource Name (ARN) of a KMS key that you want to use to encrypt your Medical Scribe
   * output. KMS key ARNs have the format arn:partition:kms:region:account:key/key-id. For example:
   * arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab. For more
   * information, see KMS key ARNs. If you do not specify an encryption key, your output is
   * encrypted with the default Amazon S3 key (SSE-S3). Note that the role making the request and
   * the role specified in the DataAccessRoleArn request parameter (if present) must have permission
   * to use the specified KMS key.
   */
  outputEncryptionKmsKeyId?: string;
  /**
   * A map of plain text, non-secret key:value pairs, known as encryption context pairs, that
   * provide an added layer of security for your data. For more information, see KMS encryption
   * context and Asymmetric keys in KMS.
   */
  kmsEncryptionContext?: Record<string, string>;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3
   * bucket that contains your input files, write to the output bucket, and use your KMS key if
   * supplied. If the role that you specify doesn’t have the appropriate permissions your request
   * fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For
   * example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs.
   */
  dataAccessRoleArn: string;
  settings: MedicalScribeSettings;
  /**
   * Makes it possible to specify which speaker is on which channel. For example, if the clinician
   * is the first participant to speak, you would set ChannelId of the first ChannelDefinition in
   * the list to 0 (to indicate the first channel) and ParticipantRole to CLINICIAN (to indicate
   * that it's the clinician speaking). Then you would set the ChannelId of the second
   * ChannelDefinition in the list to 1 (to indicate the second channel) and ParticipantRole to
   * PATIENT (to indicate that it's the patient speaking).
   */
  channelDefinitions?: MedicalScribeChannelDefinition[];
  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to the Medical Scribe job.
   * To learn more about using tags with Amazon Transcribe, refer to Tagging resources.
   */
  tags?: Tag[];
  medicalScribeContext?: MedicalScribeContext;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startMedicalScribeJobRequestSchema: Schema<StartMedicalScribeJobRequest> =
  s.object<StartMedicalScribeJobRequest>(
    {
      medicalScribeJobName: s.string(),
      media: mediaSchema,
      outputBucketName: s.string(),
      outputEncryptionKmsKeyId: s.optional(s.string()),
      kmsEncryptionContext: s.optional(s.record(s.string(), s.string())),
      dataAccessRoleArn: s.string(),
      settings: medicalScribeSettingsSchema,
      channelDefinitions: s.optional(s.array(s.lazy(() => medicalScribeChannelDefinitionSchema))),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      medicalScribeContext: s.optional(s.lazy(() => medicalScribeContextSchema)),
      _keysMap: {
        medicalScribeJobName: "MedicalScribeJobName",
        media: "Media",
        outputBucketName: "OutputBucketName",
        outputEncryptionKmsKeyId: "OutputEncryptionKMSKeyId",
        kmsEncryptionContext: "KMSEncryptionContext",
        dataAccessRoleArn: "DataAccessRoleArn",
        settings: "Settings",
        channelDefinitions: "ChannelDefinitions",
        tags: "Tags",
        medicalScribeContext: "MedicalScribeContext",
      },
    },
    { additionalProperties: s.json() },
  );
