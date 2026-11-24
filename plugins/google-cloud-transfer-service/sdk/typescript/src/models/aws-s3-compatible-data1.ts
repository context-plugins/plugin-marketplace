import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { s3CompatibleMetadata2Schema, type S3CompatibleMetadata2 } from "./s3-compatible-metadata2.js";

/** Optional. An AWS S3 compatible data source. */
export type AwsS3CompatibleData1 = {
  /** A S3 compatible metadata. */
  s3Metadata?: S3CompatibleMetadata2;
  /**
   * Specifies the root path to transfer objects. Must be an empty string or full path name that
   * ends with a '/'. This field is treated as an object prefix. As such, it should generally not
   * begin with a '/'.
   */
  path?: string;
  /**
   * Specifies the region to sign requests with. This can be left blank if requests should be signed
   * with an empty region.
   */
  region?: string;
  /** Required. Specifies the endpoint of the storage service. */
  endpoint?: string;
  /** Required. Specifies the name of the bucket. */
  bucketName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const awsS3CompatibleData1Schema: Schema<AwsS3CompatibleData1> = s.object<AwsS3CompatibleData1>(
  {
    s3Metadata: s.optional(s.lazy(() => s3CompatibleMetadata2Schema)),
    path: s.optional(s.string()),
    region: s.optional(s.string()),
    endpoint: s.optional(s.string()),
    bucketName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
