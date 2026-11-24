import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { destination1Schema, type Destination1 } from "./destination1.js";
import { logType1Schema, type LogType1 } from "./log-type1.js";

export type LogSettingsRequest = {
  /**
   * The type of logging to enable. Text logs are delivered to a CloudWatch Logs log group. Audio
   * logs are delivered to an S3 bucket.
   */
  logType: LogType1;
  /**
   * Where the logs will be delivered. Text logs are delivered to a CloudWatch Logs log group. Audio
   * logs are delivered to an S3 bucket.
   */
  destination: Destination1;
  /**
   * The Amazon Resource Name (ARN) of the AWS KMS customer managed key for encrypting audio logs
   * delivered to an S3 bucket. The key does not apply to CloudWatch Logs and is optional for S3
   * buckets.
   */
  kmsKeyArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3 bucket where the logs
   * should be delivered.
   */
  resourceArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logSettingsRequestSchema: Schema<LogSettingsRequest> = s.object<LogSettingsRequest>(
  {
    logType: logType1Schema,
    destination: destination1Schema,
    kmsKeyArn: s.optional(s.string()),
    resourceArn: s.string(),
  },
  { additionalProperties: s.json() },
);
