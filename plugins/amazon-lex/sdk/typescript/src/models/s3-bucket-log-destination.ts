import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type S3BucketLogDestination = {
  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services Key Management Service (KMS) key for
   * encrypting audio log files stored in an S3 bucket.
   */
  kmsKeyArn?: string;
  /** The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored. */
  s3BucketArn: string;
  /** The S3 prefix to assign to audio log files. */
  logPrefix: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const s3BucketLogDestinationSchema: Schema<S3BucketLogDestination> = s.object<S3BucketLogDestination>(
  {
    kmsKeyArn: s.optional(s.string()),
    s3BucketArn: s.string(),
    logPrefix: s.string(),
  },
  { additionalProperties: s.json() },
);
