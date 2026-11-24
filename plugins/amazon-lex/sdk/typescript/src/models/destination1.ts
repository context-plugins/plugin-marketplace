import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Where the logs will be delivered. Text logs are delivered to a CloudWatch Logs log group. Audio
 * logs are delivered to an S3 bucket.
 */
export const Destination1 = {
  CloudwatchLogs: "CLOUDWATCH_LOGS",
  S3: "S3",
} as const;
export type Destination1 = (typeof Destination1)[keyof typeof Destination1] | (string & {});

export const destination1Schema: EnumSchema<Destination1> = s.enumOf<Destination1>(Destination1);
