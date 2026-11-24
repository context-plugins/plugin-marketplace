import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LivenessOutputConfig = {
  /** The path to an AWS Amazon S3 bucket used to store Face Liveness session results. */
  s3Bucket: string;
  /** The prefix prepended to the output files for the Face Liveness session results. */
  s3KeyPrefix?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const livenessOutputConfigSchema: Schema<LivenessOutputConfig> = s.object<LivenessOutputConfig>(
  {
    s3Bucket: s.string(),
    s3KeyPrefix: s.optional(s.string()),
    _keysMap: {
      s3Bucket: "S3Bucket",
      s3KeyPrefix: "S3KeyPrefix",
    },
  },
  { additionalProperties: s.json() },
);
