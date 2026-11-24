import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { betweenFilter2Schema, type BetweenFilter2 } from "./between-filter2.js";
import { inListFilter2Schema, type InListFilter2 } from "./in-list-filter2.js";
import { numericFilter2Schema, type NumericFilter2 } from "./numeric-filter2.js";
import { stringFilter2Schema, type StringFilter2 } from "./string-filter2.js";

/**
 * A primitive filter. In the same FilterExpression, all of the filter's field names need to be
 * either all dimensions or all metrics.
 */
export type Filter2 = {
  /**
   * The dimension name or metric name. In most methods, dimensions & metrics can be used for the
   * first time in this field. However in a RunPivotReportRequest, this field must be additionally
   * specified by name in the RunPivotReportRequest's dimensions or metrics.
   */
  fieldName?: string;
  /** A filter for two values. */
  betweenFilter?: BetweenFilter2;
  /** A filter for in list values. */
  inListFilter?: InListFilter2;
  /** A filter for numeric or date values. */
  numericFilter?: NumericFilter2;
  /** Strings related filter. */
  stringFilter?: StringFilter2;
  /** A filter for empty values such as `(not set)` and `""` values. */
  emptyFilter?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filter2Schema: Schema<Filter2> = s.object<Filter2>(
  {
    fieldName: s.optional(s.string()),
    betweenFilter: s.optional(s.lazy(() => betweenFilter2Schema)),
    inListFilter: s.optional(s.lazy(() => inListFilter2Schema)),
    numericFilter: s.optional(s.lazy(() => numericFilter2Schema)),
    stringFilter: s.optional(s.lazy(() => stringFilter2Schema)),
    emptyFilter: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
