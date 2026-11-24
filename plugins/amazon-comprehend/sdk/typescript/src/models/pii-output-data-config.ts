import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PiiOutputDataConfig = {
  /**
   * When you use the PiiOutputDataConfig object with asynchronous operations, you specify the
   * Amazon S3 location where you want to write the output data. For a PII entity detection job, the
   * output file is plain text, not a compressed archive. The output file name is the same as the
   * input file, with .out appended at the end.
   */
  s3Uri: string;
  /**
   * ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to
   * encrypt the output results from an analysis job.
   */
  kmsKeyId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const piiOutputDataConfigSchema: Schema<PiiOutputDataConfig> = s.object<PiiOutputDataConfig>(
  {
    s3Uri: s.string(),
    kmsKeyId: s.optional(s.string()),
    _keysMap: {
      s3Uri: "S3Uri",
      kmsKeyId: "KmsKeyId",
    },
  },
  { additionalProperties: s.json() },
);
