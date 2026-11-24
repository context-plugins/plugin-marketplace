import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NotificationChannel = {
  /** The Amazon SNS topic to which Amazon Rekognition posts the completion status. */
  snsTopicArn: string;
  /**
   * The ARN of an IAM role that gives Amazon Rekognition publishing permissions to the Amazon SNS
   * topic.
   */
  roleArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationChannelSchema: Schema<NotificationChannel> = s.object<NotificationChannel>(
  {
    snsTopicArn: s.string(),
    roleArn: s.string(),
    _keysMap: {
      snsTopicArn: "SNSTopicArn",
      roleArn: "RoleArn",
    },
  },
  { additionalProperties: s.json() },
);
