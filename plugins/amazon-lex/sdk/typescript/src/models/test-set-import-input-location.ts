import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TestSetImportInputLocation = {
  /** The name of the Amazon S3 bucket. */
  s3BucketName: string;
  /** The path inside the Amazon S3 bucket pointing to the test-set CSV file. */
  s3Path: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetImportInputLocationSchema: Schema<TestSetImportInputLocation> =
  s.object<TestSetImportInputLocation>(
    {
      s3BucketName: s.string(),
      s3Path: s.string(),
    },
    { additionalProperties: s.json() },
  );
