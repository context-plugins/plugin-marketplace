import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { partnerPricePlanTypeSchema, type PartnerPricePlanType } from "./partner-price-plan-type.js";

/** Update an organization price plan */
export type UpdateOrgPricePlanRequest = {
  pricePlanType: PartnerPricePlanType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateOrgPricePlanRequestSchema: Schema<UpdateOrgPricePlanRequest> =
  s.object<UpdateOrgPricePlanRequest>(
    {
      pricePlanType: partnerPricePlanTypeSchema,
    },
    { additionalProperties: s.json() },
  );
