import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CacheAttributes = {
  /**
   * Refreshes a file share's cache by using Time To Live (TTL). TTL is the length of time since the
   * last refresh after which access to the directory would cause the file gateway to first refresh
   * that directory's contents from the Amazon S3 bucket or Amazon FSx file system. The TTL duration
   * is in seconds. Valid Values:0, 300 to 2,592,000 seconds (5 minutes to 30 days)
   */
  cacheStaleTimeoutInSeconds?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cacheAttributesSchema: Schema<CacheAttributes> = s.object<CacheAttributes>(
  {
    cacheStaleTimeoutInSeconds: s.optional(s.int()),
    _keysMap: {
      cacheStaleTimeoutInSeconds: "CacheStaleTimeoutInSeconds",
    },
  },
  { additionalProperties: s.json() },
);
