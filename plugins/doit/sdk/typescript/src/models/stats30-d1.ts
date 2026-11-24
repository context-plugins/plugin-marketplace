import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  stats30DSummaryInternalSchema,
  stats30DSummarySchema,
  type Stats30DSummary,
} from "./stats30-dsummary.js";

/** Trailing 30-day aggregate metrics (`esr`, `savings`), broken down by SP type. */
export type Stats30D1 = {
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

const stats30D1Properties: s.Shape<Stats30D1> = {
  compute: s.optional(s.lazy(() => stats30DSummaryInternalSchema)),
  database: s.optional(s.lazy(() => stats30DSummaryInternalSchema)),
};

export const stats30D1InternalSchema: Schema<Stats30D1> = s.object<Stats30D1>(stats30D1Properties, {
  additionalProperties: s.json(),
});

export const stats30D1Schema: Schema<Stats30D1> = s.lazySchema(() =>
  s.object<Stats30D1>(
    {
      ...stats30D1Properties,
      compute: s.optional(s.lazy(() => stats30DSummarySchema)),
      database: s.optional(s.lazy(() => stats30DSummarySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
