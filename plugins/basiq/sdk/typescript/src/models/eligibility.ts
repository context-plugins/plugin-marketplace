import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { discountEligibilityTypeSchema, type DiscountEligibilityType } from "./discount-eligibility-type.js";

export type Eligibility = {
  /** The type of the specific eligibility constraint for a discountType. */
  discountEligibilityType: DiscountEligibilityType;
  /**
   * Generic field containing additional information relevant to the discountEligibilityType
   * specified. Whether mandatory or not is dependent on the value of discountEligibilityType.
   */
  additionalValue?: string;
  /**
   * Display text providing more information on this eligibility constraint. Whether mandatory or
   * not is dependent on the value of discountEligibilityType.
   */
  additionalInfo?: string;
  /** Link to a web page with more information on this eligibility constraint. */
  additionalInfoUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eligibilitySchema: Schema<Eligibility> = s.object<Eligibility>(
  {
    discountEligibilityType: discountEligibilityTypeSchema,
    additionalValue: s.optional(s.string()),
    additionalInfo: s.optional(s.string()),
    additionalInfoUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
