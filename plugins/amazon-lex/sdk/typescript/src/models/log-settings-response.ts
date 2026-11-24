import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { destinationSchema, type Destination } from "./destination.js";
import { logTypeSchema, type LogType } from "./log-type.js";

export type LogSettingsResponse = {
  /** The type of logging that is enabled. */
  logType?: LogType;
  /** The destination where logs are delivered. */
  destination?: Destination;
  /** The Amazon Resource Name (ARN) of the key used to encrypt audio logs in an S3 bucket. */
  kmsKeyArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3 bucket where the logs are
   * delivered.
   */
  resourceArn?: string;
  /**
   * The resource prefix is the first part of the S3 object key within the S3 bucket that you
   * specified to contain audio logs. For CloudWatch Logs it is the prefix of the log stream name
   * within the log group that you specified.
   */
  resourcePrefix?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logSettingsResponseSchema: Schema<LogSettingsResponse> = s.object<LogSettingsResponse>(
  {
    logType: s.optional(s.lazy(() => logTypeSchema)),
    destination: s.optional(s.lazy(() => destinationSchema)),
    kmsKeyArn: s.optional(s.string()),
    resourceArn: s.optional(s.string()),
    resourcePrefix: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
