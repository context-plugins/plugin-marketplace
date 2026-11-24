import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bucketOwnerAccessSchema, type BucketOwnerAccess } from "./bucket-owner-access.js";
import { status1Schema, type Status1 } from "./status1.js";

export type S3LogsConfig = {
  /**
   * The current status of the S3 build logs. Valid values are: ENABLED: S3 build logs are enabled
   * for this build project. DISABLED: S3 build logs are not enabled for this build project.
   */
  status: Status1;
  /**
   * The ARN of an S3 bucket and the path prefix for S3 logs. If your Amazon S3 bucket name is
   * my-bucket, and your path prefix is build-log, then acceptable formats are my-bucket/build-log
   * or arn:aws:s3:::my-bucket/build-log.
   */
  location?: string;
  /**
   * Set to true if you do not want your S3 build log output encrypted. By default S3 build logs are
   * encrypted.
   */
  encryptionDisabled?: boolean;
  bucketOwnerAccess?: BucketOwnerAccess;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const s3LogsConfigSchema: Schema<S3LogsConfig> = s.object<S3LogsConfig>(
  {
    status: status1Schema,
    location: s.optional(s.string()),
    encryptionDisabled: s.optional(s.boolean()),
    bucketOwnerAccess: s.optional(s.lazy(() => bucketOwnerAccessSchema)),
  },
  { additionalProperties: s.json() },
);
