import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type CloudWatchLogsConfig = {
  /**
   * The current status of the logs in CloudWatch Logs for a build project. Valid values are:
   * ENABLED: CloudWatch Logs are enabled for this build project. DISABLED: CloudWatch Logs are not
   * enabled for this build project.
   */
  status: Status;
  /**
   * The group name of the logs in CloudWatch Logs. For more information, see Working with Log
   * Groups and Log Streams.
   */
  groupName?: string;
  /**
   * The prefix of the stream name of the CloudWatch Logs. For more information, see Working with
   * Log Groups and Log Streams.
   */
  streamName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudWatchLogsConfigSchema: Schema<CloudWatchLogsConfig> = s.object<CloudWatchLogsConfig>(
  {
    status: statusSchema,
    groupName: s.optional(s.string()),
    streamName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
