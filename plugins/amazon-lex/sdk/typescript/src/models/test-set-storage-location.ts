import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TestSetStorageLocation = {
  /** The name of the Amazon S3 bucket in which the test set is stored. */
  s3BucketName: string;
  /** The path inside the Amazon S3 bucket where the test set is stored. */
  s3Path: string;
  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services Key Management Service (KMS) key for
   * encrypting the test set.
   */
  kmsKeyArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetStorageLocationSchema: Schema<TestSetStorageLocation> = s.object<TestSetStorageLocation>(
  {
    s3BucketName: s.string(),
    s3Path: s.string(),
    kmsKeyArn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
