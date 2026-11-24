import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  stats30DSummaryInternalSchema,
  stats30DSummarySchema,
  type Stats30DSummary,
} from "./stats30-dsummary.js";

/** Trailing 30-day aggregate metrics per SP type (`compute`, `database`). */
export type Stats30D = {
  /**
   * Minimal 30-day aggregate. Only `esr` and `savings` are persisted at this granularity. Responses
   * are denominated in USD.
   */
  compute?: Stats30DSummary;
  /**
   * Minimal 30-day aggregate. Only `esr` and `savings` are persisted at this granularity. Responses
   * are denominated in USD.
   */
  database?: Stats30DSummary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const stats30DProperties: s.Shape<Stats30D> = {
  compute: s.optional(s.lazy(() => stats30DSummaryInternalSchema)),
  database: s.optional(s.lazy(() => stats30DSummaryInternalSchema)),
};

export const stats30DInternalSchema: Schema<Stats30D> = s.object<Stats30D>(stats30DProperties, {
  additionalProperties: s.json(),
});

export const stats30DSchema: Schema<Stats30D> = s.lazySchema(() =>
  s.object<Stats30D>(
    {
      ...stats30DProperties,
      compute: s.optional(s.lazy(() => stats30DSummarySchema)),
      database: s.optional(s.lazy(() => stats30DSummarySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
