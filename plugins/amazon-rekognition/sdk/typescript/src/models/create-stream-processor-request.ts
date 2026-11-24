import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { regionOfInterestSchema, type RegionOfInterest } from "./region-of-interest.js";
import {
  streamProcessorDataSharingPreferenceSchema,
  type StreamProcessorDataSharingPreference,
} from "./stream-processor-data-sharing-preference.js";
import { streamProcessorInputSchema, type StreamProcessorInput } from "./stream-processor-input.js";
import {
  streamProcessorNotificationChannelSchema,
  type StreamProcessorNotificationChannel,
} from "./stream-processor-notification-channel.js";
import { streamProcessorOutputSchema, type StreamProcessorOutput } from "./stream-processor-output.js";
import { streamProcessorSettingsSchema, type StreamProcessorSettings } from "./stream-processor-settings.js";

export type CreateStreamProcessorRequest = {
  input: StreamProcessorInput;
  output: StreamProcessorOutput;
  /**
   * An identifier you assign to the stream processor. You can use Name to manage the stream
   * processor. For example, you can get the current status of the stream processor by calling
   * DescribeStreamProcessor. Name is idempotent. This is required for both face search and label
   * detection stream processors.
   */
  name: string;
  settings: StreamProcessorSettings;
  /**
   * The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor.
   * The IAM role provides Rekognition read permissions for a Kinesis stream. It also provides write
   * permissions to an Amazon S3 bucket and Amazon Simple Notification Service topic for a label
   * detection stream processor. This is required for both face search and label detection stream
   * processors.
   */
  roleArn: string;
  /** A set of tags (key-value pairs) that you want to attach to the stream processor. */
  tags?: Record<string, string>;
  notificationChannel?: StreamProcessorNotificationChannel;
  /**
   * The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional
   * parameter for label detection stream processors and should not be used to create a face search
   * stream processor. You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your
   * KMS key, an alias for your KMS key, or an alias ARN. The key is used to encrypt results and
   * data published to your Amazon S3 bucket, which includes image frames and hero images. Your
   * source images are unaffected.
   */
  kmsKeyId?: string;
  /**
   * Specifies locations in the frames where Amazon Rekognition checks for objects or people. You
   * can specify up to 10 regions of interest, and each region has either a polygon or a bounding
   * box. This is an optional parameter for label detection stream processors and should not be used
   * to create a face search stream processor.
   */
  regionsOfInterest?: RegionOfInterest[];
  dataSharingPreference?: StreamProcessorDataSharingPreference;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createStreamProcessorRequestSchema: Schema<CreateStreamProcessorRequest> =
  s.object<CreateStreamProcessorRequest>(
    {
      input: streamProcessorInputSchema,
      output: streamProcessorOutputSchema,
      name: s.string(),
      settings: streamProcessorSettingsSchema,
      roleArn: s.string(),
      tags: s.optional(s.record(s.string(), s.string())),
      notificationChannel: s.optional(s.lazy(() => streamProcessorNotificationChannelSchema)),
      kmsKeyId: s.optional(s.string()),
      regionsOfInterest: s.optional(s.array(s.lazy(() => regionOfInterestSchema))),
      dataSharingPreference: s.optional(s.lazy(() => streamProcessorDataSharingPreferenceSchema)),
      _keysMap: {
        input: "Input",
        output: "Output",
        name: "Name",
        settings: "Settings",
        roleArn: "RoleArn",
        tags: "Tags",
        notificationChannel: "NotificationChannel",
        kmsKeyId: "KmsKeyId",
        regionsOfInterest: "RegionsOfInterest",
        dataSharingPreference: "DataSharingPreference",
      },
    },
    { additionalProperties: s.json() },
  );
