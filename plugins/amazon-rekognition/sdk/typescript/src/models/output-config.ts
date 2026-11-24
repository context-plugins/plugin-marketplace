import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OutputConfig = {
  /** The S3 bucket where training output is placed. */
  s3Bucket?: string;
  /** The prefix applied to the training output files. */
  s3KeyPrefix?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const outputConfigSchema: Schema<OutputConfig> = s.object<OutputConfig>(
  {
    s3Bucket: s.optional(s.string()),
    s3KeyPrefix: s.optional(s.string()),
    _keysMap: {
      s3Bucket: "S3Bucket",
      s3KeyPrefix: "S3KeyPrefix",
    },
  },
  { additionalProperties: s.json() },
);
