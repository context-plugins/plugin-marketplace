import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logLevelEnumSchema, type LogLevelEnum } from "./log-level-enum.js";

export type EventLogConfig = {
  /** The type of information to log for the Event API. */
  logLevel: LogLevelEnum;
  /** The IAM service role that AppSync assumes to publish CloudWatch Logs in your account. */
  cloudWatchLogsRoleArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventLogConfigSchema: Schema<EventLogConfig> = s.object<EventLogConfig>(
  {
    logLevel: logLevelEnumSchema,
    cloudWatchLogsRoleArn: s.string(),
  },
  { additionalProperties: s.json() },
);
