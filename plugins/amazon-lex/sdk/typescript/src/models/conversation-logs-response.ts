import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logSettingsResponseSchema, type LogSettingsResponse } from "./log-settings-response.js";

export type ConversationLogsResponse = {
  /** The settings for your conversation logs. You can log text, audio, or both. */
  logSettings?: LogSettingsResponse[];
  /**
   * The Amazon Resource Name (ARN) of the IAM role used to write your logs to CloudWatch Logs or an
   * S3 bucket.
   */
  iamRoleArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationLogsResponseSchema: Schema<ConversationLogsResponse> =
  s.object<ConversationLogsResponse>(
    {
      logSettings: s.optional(s.array(s.lazy(() => logSettingsResponseSchema))),
      iamRoleArn: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
