import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionConfSchemaSuppress = {
  /**
   * Suppression key expression used to uniquely identify events to suppress. For example,
   * `${ip}:${port}` will use fields ip and port from each event to generate the key.
   */
  keyExpr?: string;
  /** The number of events to allow per time period */
  allow?: number;
  /** The number of seconds to suppress events after 'Number to allow' events are received */
  suppressPeriodSec?: number;
  /** If disabled, suppressed events will be tagged with suppress=1 but not dropped */
  dropEventsMode?: boolean;
  /**
   * The maximum number of keys that can be cached before idle entries are removed. Leave at default
   * unless you understand the implications of changing.
   */
  maxCacheSize?: number;
  /**
   * The number of suppression periods 'Suppression Period' of inactivity before a cache entry is
   * considered idle. Leave at default unless you understand the implications of changing.
   */
  cacheIdleTimeoutPeriods?: number;
  /**
   * Check cache for idle sessions every N events when cache size is > 'Maximum Cache Size'. Leave
   * at default unless you understand the implications of changing.
   */
  numEventsIdleTimeoutTrigger?: number;
};

export const functionConfSchemaSuppressSchema: Schema<FunctionConfSchemaSuppress> =
  s.object<FunctionConfSchemaSuppress>({
    keyExpr: s.optional(s.string()),
    allow: s.optional(s.float64()),
    suppressPeriodSec: s.optional(s.float64()),
    dropEventsMode: s.optional(s.boolean()),
    maxCacheSize: s.optional(s.float64()),
    cacheIdleTimeoutPeriods: s.optional(s.float64()),
    numEventsIdleTimeoutTrigger: s.optional(s.float64()),
  });
