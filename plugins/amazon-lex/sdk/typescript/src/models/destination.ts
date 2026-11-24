import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The destination where logs are delivered. */
export const Destination = {
  CloudwatchLogs: "CLOUDWATCH_LOGS",
  S3: "S3",
} as const;
export type Destination = (typeof Destination)[keyof typeof Destination] | (string & {});

export const destinationSchema: EnumSchema<Destination> = s.enumOf<Destination>(Destination);
