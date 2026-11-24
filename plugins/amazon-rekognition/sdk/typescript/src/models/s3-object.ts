import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type S3Object = {
  /** Name of the S3 bucket. */
  bucket?: string;
  /** S3 object key name. */
  name?: string;
  /** If the bucket is versioning enabled, you can specify the object version. */
  version?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const s3ObjectSchema: Schema<S3Object> = s.object<S3Object>(
  {
    bucket: s.optional(s.string()),
    name: s.optional(s.string()),
    version: s.optional(s.string()),
    _keysMap: {
      bucket: "Bucket",
      name: "Name",
      version: "Version",
    },
  },
  { additionalProperties: s.json() },
);
