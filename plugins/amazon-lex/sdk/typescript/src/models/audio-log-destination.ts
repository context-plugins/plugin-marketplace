import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { s3BucketLogDestinationSchema, type S3BucketLogDestination } from "./s3-bucket-log-destination.js";

export type AudioLogDestination = {
  s3Bucket: S3BucketLogDestination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audioLogDestinationSchema: Schema<AudioLogDestination> = s.object<AudioLogDestination>(
  {
    s3Bucket: s3BucketLogDestinationSchema,
  },
  { additionalProperties: s.json() },
);
