import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventBreakerTypeSchema, type EventBreakerType } from "./event-breaker-type.js";
import { existingOrNew2Schema, type ExistingOrNew2 } from "./existing-or-new2.js";
import { timestampFormatSchema, type TimestampFormat } from "./timestamp-format.js";

export type FunctionConfSchemaEventBreaker = {
  /** Whether to use an existing event breaker ruleset or create a new one inline. */
  existingOrNew?: ExistingOrNew2;
  /** Add this Function name to the cribl_breaker field */
  shouldMarkCriblBreaker?: boolean;
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
  /** ID of an existing event breaker ruleset to apply. */
  existingRule?: string;
};

export const functionConfSchemaEventBreakerSchema: Schema<FunctionConfSchemaEventBreaker> =
  s.object<FunctionConfSchemaEventBreaker>({
    existingOrNew: s.optional(s.lazy(() => existingOrNew2Schema)),
    shouldMarkCriblBreaker: s.optional(s.boolean()),
    ruleType: s.optional(s.lazy(() => eventBreakerTypeSchema)),
    maxEventBytes: s.optional(s.float64()),
    timestampAnchorRegex: s.optional(s.string()),
    timestamp: s.optional(s.lazy(() => timestampFormatSchema)),
    timestampTimezone: s.optional(s.string()),
    timestampEarliest: s.optional(s.string()),
    timestampLatest: s.optional(s.string()),
    existingRule: s.optional(s.string()),
  });
