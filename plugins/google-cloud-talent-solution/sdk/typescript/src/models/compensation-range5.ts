import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { money1Schema, type Money1 } from "./money1.js";
import { money4Schema, type Money4 } from "./money4.js";

/**
 * Output only. Annualized base compensation range. Computed as base compensation entry's
 * CompensationEntry.amount times CompensationEntry.expected_units_per_year. See CompensationEntry
 * for explanation on compensation annualization.
 */
export type CompensationRange5 = {
  /**
   * The maximum amount of compensation. If left empty, the value is set to a maximal compensation
   * value and the currency code is set to match the currency code of min_compensation.
   */
  maxCompensation?: Money4;
  /**
   * The minimum amount of compensation. If left empty, the value is set to zero and the currency
   * code is set to match the currency code of max_compensation.
   */
  minCompensation?: Money1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compensationRange5Schema: Schema<CompensationRange5> = s.object<CompensationRange5>(
  {
    maxCompensation: s.optional(s.lazy(() => money4Schema)),
    minCompensation: s.optional(s.lazy(() => money1Schema)),
  },
  { additionalProperties: s.json() },
);
