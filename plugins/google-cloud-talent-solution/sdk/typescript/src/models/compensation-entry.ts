import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { compensationRangeSchema, type CompensationRange } from "./compensation-range.js";
import { money2Schema, type Money2 } from "./money2.js";
import { typeSchema, type Type } from "./type.js";
import { unitSchema, type Unit } from "./unit.js";

/**
 * A compensation entry that represents one component of compensation, such as base pay, bonus, or
 * other compensation type. Annualization: One compensation entry can be annualized if - it contains
 * valid amount or range. - and its expected_units_per_year is set or can be derived. Its annualized
 * range is determined as (amount or range) times expected_units_per_year.
 */
export type CompensationEntry = {
  /**
   * Expected number of units paid each year. If not specified, when Job.employment_types is
   * FULLTIME, a default value is inferred based on unit. Default values: - HOURLY: 2080 - DAILY:
   * 260 - WEEKLY: 52 - MONTHLY: 12 - ANNUAL: 1
   */
  expectedUnitsPerYear?: number;
  /** Compensation type. Default is CompensationType.COMPENSATION_TYPE_UNSPECIFIED. */
  type?: Type;
  /**
   * Frequency of the specified amount. Default is CompensationUnit.COMPENSATION_UNIT_UNSPECIFIED.
   */
  unit?: Unit;
  /** Compensation amount. */
  amount?: Money2;
  /** Compensation range. */
  range?: CompensationRange;
  /**
   * Compensation description. For example, could indicate equity terms or provide additional
   * context to an estimated bonus.
   */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compensationEntrySchema: Schema<CompensationEntry> = s.object<CompensationEntry>(
  {
    expectedUnitsPerYear: s.optional(s.float64()),
    type: s.optional(s.lazy(() => typeSchema)),
    unit: s.optional(s.lazy(() => unitSchema)),
    amount: s.optional(s.lazy(() => money2Schema)),
    range: s.optional(s.lazy(() => compensationRangeSchema)),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
