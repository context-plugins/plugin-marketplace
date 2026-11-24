import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type S3Destination = {
  /**
   * The name of the Amazon S3 bucket you want to associate with the streaming video project. You
   * must be the owner of the Amazon S3 bucket.
   */
  bucket?: string;
  /**
   * The prefix value of the location within the bucket that you want the information to be
   * published to. For more information, see Using prefixes.
   */
  keyPrefix?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const s3DestinationSchema: Schema<S3Destination> = s.object<S3Destination>(
  {
    bucket: s.optional(s.string()),
    keyPrefix: s.optional(s.string()),
    _keysMap: {
      bucket: "Bucket",
      keyPrefix: "KeyPrefix",
    },
  },
  { additionalProperties: s.json() },
);
