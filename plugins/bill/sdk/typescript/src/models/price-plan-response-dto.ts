import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planTermSchema, type PlanTerm } from "./plan-term.js";

/** Organization price plan response. */
export type PricePlanResponseDto = {
  /** BILL-generated ID of the price plan. The value begins with `ppl`. */
  id?: string;
  /** Price plan name */
  name?: string;
  /** Price plan monthly subscription fee */
  monthlyPrice?: number;
  /** Set as `true` if the price plan allows a trial */
  allowTrial?: boolean;
  /** Set as `true` if the price plan has per-user pricing */
  priceVariesPerUser?: boolean;
  /**
   * Terms and conditions for additional charges in the price plan. These charges are for price plan
   * features based on a combination of charge `type`, `tier`, `quantity`, and `price`.
   */
  planTerms?: PlanTerm[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricePlanResponseDtoSchema: Schema<PricePlanResponseDto> = s.object<PricePlanResponseDto>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    monthlyPrice: s.optional(s.float64()),
    allowTrial: s.optional(s.boolean()),
    priceVariesPerUser: s.optional(s.boolean()),
    planTerms: s.optional(s.array(s.lazy(() => planTermSchema))),
  },
  { additionalProperties: s.json() },
);
