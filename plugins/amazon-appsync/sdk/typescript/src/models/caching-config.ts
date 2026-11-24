import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CachingConfig = {
  /**
   * The TTL in seconds for a resolver that has caching activated. Valid values are 1–3,600 seconds.
   */
  ttl: number;
  /**
   * The caching keys for a resolver that has caching activated. Valid values are entries from the
   * $context.arguments, $context.source, and $context.identity maps.
   */
  cachingKeys?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cachingConfigSchema: Schema<CachingConfig> = s.object<CachingConfig>(
  {
    ttl: s.int(),
    cachingKeys: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
