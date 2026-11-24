import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CloudWatchLogsLogGroup = {
  /**
   * The ARN of the the CloudWatch log group to which you want your logs emitted to. The ARN must
   * end with :*
   */
  logGroupArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudWatchLogsLogGroupSchema: Schema<CloudWatchLogsLogGroup> = s.object<CloudWatchLogsLogGroup>(
  {
    logGroupArn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
