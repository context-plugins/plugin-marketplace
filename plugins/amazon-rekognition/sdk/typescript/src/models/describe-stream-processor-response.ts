import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { regionOfInterestSchema, type RegionOfInterest } from "./region-of-interest.js";
import {
  statusAmazonRekognitionStreamProcessorApiSchema,
  type StatusAmazonRekognitionStreamProcessorApi,
} from "./status-amazon-rekognition-stream-processor-api.js";
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

export type DescribeStreamProcessorResponse = {
  /** Name of the stream processor. */
  name?: string;
  /** ARN of the stream processor. */
  streamProcessorArn?: string;
  /** Current status of the stream processor. */
  status?: StatusAmazonRekognitionStreamProcessorApi;
  /** Detailed status message about the stream processor. */
  statusMessage?: string;
  /** Date and time the stream processor was created */
  creationTimestamp?: Date;
  /**
   * The time, in Unix format, the stream processor was last updated. For example, when the stream
   * processor moves from a running state to a failed state, or when the user starts or stops the
   * stream processor.
   */
  lastUpdateTimestamp?: Date;
  input?: StreamProcessorInput;
  output?: StreamProcessorOutput;
  /** ARN of the IAM role that allows access to the stream processor. */
  roleArn?: string;
  settings?: StreamProcessorSettings;
  notificationChannel?: StreamProcessorNotificationChannel;
  /**
   * The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional
   * parameter for label detection stream processors.
   */
  kmsKeyId?: string;
  /**
   * Specifies locations in the frames where Amazon Rekognition checks for objects or people. This
   * is an optional parameter for label detection stream processors.
   */
  regionsOfInterest?: RegionOfInterest[];
  dataSharingPreference?: StreamProcessorDataSharingPreference;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeStreamProcessorResponseSchema: Schema<DescribeStreamProcessorResponse> =
  s.object<DescribeStreamProcessorResponse>(
    {
      name: s.optional(s.string()),
      streamProcessorArn: s.optional(s.string()),
      status: s.optional(s.lazy(() => statusAmazonRekognitionStreamProcessorApiSchema)),
      statusMessage: s.optional(s.string()),
      creationTimestamp: s.optional(s.dateTime()),
      lastUpdateTimestamp: s.optional(s.dateTime()),
      input: s.optional(s.lazy(() => streamProcessorInputSchema)),
      output: s.optional(s.lazy(() => streamProcessorOutputSchema)),
      roleArn: s.optional(s.string()),
      settings: s.optional(s.lazy(() => streamProcessorSettingsSchema)),
      notificationChannel: s.optional(s.lazy(() => streamProcessorNotificationChannelSchema)),
      kmsKeyId: s.optional(s.string()),
      regionsOfInterest: s.optional(s.array(s.lazy(() => regionOfInterestSchema))),
      dataSharingPreference: s.optional(s.lazy(() => streamProcessorDataSharingPreferenceSchema)),
      _keysMap: {
        name: "Name",
        streamProcessorArn: "StreamProcessorArn",
        status: "Status",
        statusMessage: "StatusMessage",
        creationTimestamp: "CreationTimestamp",
        lastUpdateTimestamp: "LastUpdateTimestamp",
        input: "Input",
        output: "Output",
        roleArn: "RoleArn",
        settings: "Settings",
        notificationChannel: "NotificationChannel",
        kmsKeyId: "KmsKeyId",
        regionsOfInterest: "RegionsOfInterest",
        dataSharingPreference: "DataSharingPreference",
      },
    },
    { additionalProperties: s.json() },
  );
