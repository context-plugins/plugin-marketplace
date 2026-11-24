import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { applicabilityConditionsSchema, type ApplicabilityConditions } from "./applicability-conditions.js";
import { rateApplicationMethodSchema, type RateApplicationMethod } from "./rate-application-method.js";
import { unitOfMeasureSchema, type UnitOfMeasure } from "./unit-of-measure.js";

export type Tier = {
  /** A display name for the tier. */
  name: string;
  /**
   * The unit of measure that applies to the minimumValue and maximumValue values e.g. a DOLLAR
   * amount. PERCENT (in the case of loan-to-value ratio or LVR). Tier term period representing a
   * discrete number of MONTH's or DAY's (in the case of term deposit tiers).
   */
  unitOfMeasure: UnitOfMeasure;
  /**
   * The number of unitOfMeasure units that form the lower bound of the tier. The tier should be
   * inclusive of this value.
   */
  minimumValue: number;
  /**
   * The number of unitOfMeasure units that form the upper bound of the tier or band. For a tier
   * with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as
   * minimumValue. Where this is the same as the minimumValue value of the next-higher tier the
   * referenced tier should be exclusive of this value. For example a term deposit of 2 months falls
   * into the upper tier of the following tiers: (1 - 2 months, 2 - 3 months). If absent the tier's
   * range has no upper bound..
   */
  maximumValue?: number;
  /**
   * The method used to calculate the amount to be applied using one or more tiers. A single rate
   * may be applied to the entire balance or each applicable tier rate is applied to the portion of
   * the balance that falls into that tier (referred to as 'bands' or 'steps').
   */
  rateApplicationMethod?: RateApplicationMethod;
  applicabilityConditions?: ApplicabilityConditions | null;
  /** Display text providing more information on the rate tier. */
  additionalInfo?: string;
  /** Link to a web page with more information on this rate tier. */
  additionalInfoUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tierSchema: Schema<Tier> = s.object<Tier>(
  {
    name: s.string(),
    unitOfMeasure: unitOfMeasureSchema,
    minimumValue: s.int(),
    maximumValue: s.optional(s.int()),
    rateApplicationMethod: s.optional(s.lazy(() => rateApplicationMethodSchema)),
    applicabilityConditions: s.optionalNullable(s.lazy(() => applicabilityConditionsSchema)),
    additionalInfo: s.optional(s.string()),
    additionalInfoUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
