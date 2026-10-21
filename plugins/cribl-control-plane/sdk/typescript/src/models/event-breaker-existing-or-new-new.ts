import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventBreakerTypeSchema, type EventBreakerType } from "./event-breaker-type.js";
import { existingOrNewSchema, type ExistingOrNew } from "./existing-or-new.js";
import { timestampFormatSchema, type TimestampFormat } from "./timestamp-format.js";

export type EventBreakerExistingOrNewNew = {
  /** Whether to use an existing Event Breaker Ruleset or create a new one inline. */
  existingOrNew?: ExistingOrNew;
  /** Type of event-breaking rule to apply when creating a new inline ruleset. */
  ruleType?: EventBreakerType;
  /** The maximum number of bytes that an event can be before being flushed to the Pipelines */
  maxEventBytes?: number;
  /**
   * Regex to match before attempting timestamp extraction. Use $ (end of string anchor) to not
   * perform extraction.
   */
  timestampAnchorRegex?: string;
  /** Configuration for extracting and parsing timestamps from events. */
  timestamp?: TimestampFormat;
  /** Timezone to assign to timestamps without timezone info */
  timestampTimezone?: string;
  /**
   * The earliest timestamp value allowed relative to now, such as -42years. Parsed values prior to
   * this date will be set to current time.
   */
  timestampEarliest?: string;
  /**
   * The latest timestamp value allowed relative to now, such as +42days. Parsed values after this
   * date will be set to current time.
   */
  timestampLatest?: string;
};

export const eventBreakerExistingOrNewNewSchema: Schema<EventBreakerExistingOrNewNew> =
  s.object<EventBreakerExistingOrNewNew>({
    existingOrNew: s.optional(s.lazy(() => existingOrNewSchema)),
    ruleType: s.optional(s.lazy(() => eventBreakerTypeSchema)),
    maxEventBytes: s.optional(s.float64()),
    timestampAnchorRegex: s.optional(s.string()),
    timestamp: s.optional(s.lazy(() => timestampFormatSchema)),
    timestampTimezone: s.optional(s.string()),
    timestampEarliest: s.optional(s.string()),
    timestampLatest: s.optional(s.string()),
  });
