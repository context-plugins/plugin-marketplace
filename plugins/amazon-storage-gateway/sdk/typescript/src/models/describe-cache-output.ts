import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeCacheOutput = {
  gatewayArn?: string;
  /**
   * An array of strings that identify disks that are to be configured as working storage. Each
   * string has a minimum length of 1 and maximum length of 300. You can get the disk IDs from the
   * ListLocalDisks API.
   */
  diskIds?: string[];
  /** The amount of cache in bytes allocated to a gateway. */
  cacheAllocatedInBytes?: number;
  /**
   * Percent use of the gateway's cache storage. This metric applies only to the gateway-cached
   * volume setup. The sample is taken at the end of the reporting period.
   */
  cacheUsedPercentage?: number;
  /**
   * The file share's contribution to the overall percentage of the gateway's cache that has not
   * been persisted to Amazon Web Services. The sample is taken at the end of the reporting period.
   */
  cacheDirtyPercentage?: number;
  /**
   * Percent of application read operations from the file shares that are served from cache. The
   * sample is taken at the end of the reporting period.
   */
  cacheHitPercentage?: number;
  /**
   * Percent of application read operations from the file shares that are not served from cache. The
   * sample is taken at the end of the reporting period.
   */
  cacheMissPercentage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeCacheOutputSchema: Schema<DescribeCacheOutput> = s.object<DescribeCacheOutput>(
  {
    gatewayArn: s.optional(s.string()),
    diskIds: s.optional(s.array(s.string())),
    cacheAllocatedInBytes: s.optional(s.int()),
    cacheUsedPercentage: s.optional(s.float64()),
    cacheDirtyPercentage: s.optional(s.float64()),
    cacheHitPercentage: s.optional(s.float64()),
    cacheMissPercentage: s.optional(s.float64()),
    _keysMap: {
      gatewayArn: "GatewayARN",
      diskIds: "DiskIds",
      cacheAllocatedInBytes: "CacheAllocatedInBytes",
      cacheUsedPercentage: "CacheUsedPercentage",
      cacheDirtyPercentage: "CacheDirtyPercentage",
      cacheHitPercentage: "CacheHitPercentage",
      cacheMissPercentage: "CacheMissPercentage",
    },
  },
  { additionalProperties: s.json() },
);
