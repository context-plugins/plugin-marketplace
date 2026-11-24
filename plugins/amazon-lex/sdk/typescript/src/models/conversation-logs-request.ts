import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logSettingsRequestSchema, type LogSettingsRequest } from "./log-settings-request.js";

export type ConversationLogsRequest = {
  /**
   * The settings for your conversation logs. You can log the conversation text, conversation audio,
   * or both.
   */
  logSettings: LogSettingsRequest[];
  /**
   * The Amazon Resource Name (ARN) of an IAM role with permission to write to your CloudWatch Logs
   * for text logs and your S3 bucket for audio logs. If audio encryption is enabled, this role also
   * provides access permission for the AWS KMS key used for encrypting audio logs. For more
   * information, see Creating an IAM Role and Policy for Conversation Logs.
   */
  iamRoleArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationLogsRequestSchema: Schema<ConversationLogsRequest> =
  s.object<ConversationLogsRequest>(
    {
      logSettings: s.array(s.lazy(() => logSettingsRequestSchema)),
      iamRoleArn: s.string(),
    },
    { additionalProperties: s.json() },
  );
