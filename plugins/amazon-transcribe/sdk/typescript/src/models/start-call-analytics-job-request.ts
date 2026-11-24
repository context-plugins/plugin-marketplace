import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  callAnalyticsJobSettingsSchema,
  type CallAnalyticsJobSettings,
} from "./call-analytics-job-settings.js";
import { channelDefinitionSchema, type ChannelDefinition } from "./channel-definition.js";
import { mediaSchema, type Media } from "./media.js";
import { tagSchema, type Tag } from "./tag.js";

export type StartCallAnalyticsJobRequest = {
  /**
   * A unique name, chosen by you, for your Call Analytics job. This name is case sensitive, cannot
   * contain spaces, and must be unique within an Amazon Web Services account. If you try to create
   * a new job with the same name as an existing job, you get a ConflictException error.
   */
  callAnalyticsJobName: string;
  media: Media;
  /**
   * The Amazon S3 location where you want your Call Analytics transcription output stored. You can
   * use any of the following formats to specify the output location: s3://DOC-EXAMPLE-BUCKET
   * s3://DOC-EXAMPLE-BUCKET/my-output-folder/
   * s3://DOC-EXAMPLE-BUCKET/my-output-folder/my-call-analytics-job.json Unless you specify a file
   * name (option 3), the name of your output file has a default value that matches the name you
   * specified for your transcription job using the CallAnalyticsJobName parameter. You can specify
   * a KMS key to encrypt your output using the OutputEncryptionKMSKeyId parameter. If you do not
   */
  outputLocation?: string;
  /**
   * The Amazon Resource Name (ARN) of a KMS key that you want to use to encrypt your Call Analytics
   * output. KMS key ARNs have the format arn:partition:kms:region:account:key/key-id. For example:
   * arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab. For more
   * information, see KMS key ARNs. If you do not specify an encryption key, your output is
   * encrypted with the default Amazon S3 key (SSE-S3). Note that the role making the request and
   * the role specified in the DataAccessRoleArn request parameter (if present) must have permission
   * to use the specified KMS key.
   */
  outputEncryptionKmsKeyId?: string;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3
   * bucket that contains your input files. If the role that you specify doesn’t have the
   * appropriate permissions to access the specified Amazon S3 location, your request fails. IAM
   * role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example:
   * arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs.
   */
  dataAccessRoleArn?: string;
  settings?: CallAnalyticsJobSettings;
  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to a new call analytics job
   * at the time you start this new job. To learn more about using tags with Amazon Transcribe,
   * refer to Tagging resources.
   */
  tags?: Tag[];
  /**
   * Makes it possible to specify which speaker is on which channel. For example, if your agent is
   * the first participant to speak, you would set ChannelId to 0 (to indicate the first channel)
   * and ParticipantRole to AGENT (to indicate that it's the agent speaking).
   */
  channelDefinitions?: ChannelDefinition[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startCallAnalyticsJobRequestSchema: Schema<StartCallAnalyticsJobRequest> =
  s.object<StartCallAnalyticsJobRequest>(
    {
      callAnalyticsJobName: s.string(),
      media: mediaSchema,
      outputLocation: s.optional(s.string()),
      outputEncryptionKmsKeyId: s.optional(s.string()),
      dataAccessRoleArn: s.optional(s.string()),
      settings: s.optional(s.lazy(() => callAnalyticsJobSettingsSchema)),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      channelDefinitions: s.optional(s.array(s.lazy(() => channelDefinitionSchema))),
      _keysMap: {
        callAnalyticsJobName: "CallAnalyticsJobName",
        media: "Media",
        outputLocation: "OutputLocation",
        outputEncryptionKmsKeyId: "OutputEncryptionKMSKeyId",
        dataAccessRoleArn: "DataAccessRoleArn",
        settings: "Settings",
        tags: "Tags",
        channelDefinitions: "ChannelDefinitions",
      },
    },
    { additionalProperties: s.json() },
  );
