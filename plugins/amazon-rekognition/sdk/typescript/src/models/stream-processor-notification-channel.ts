import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StreamProcessorNotificationChannel = {
  /**
   * The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to
   * which Amazon Rekognition posts the completion status.
   */
  snsTopicArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const streamProcessorNotificationChannelSchema: Schema<StreamProcessorNotificationChannel> =
  s.object<StreamProcessorNotificationChannel>(
    {
      snsTopicArn: s.string(),
      _keysMap: {
        snsTopicArn: "SNSTopicArn",
      },
    },
    { additionalProperties: s.json() },
  );
