import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlanPlanProductsItemsPlanProductAttributeItems = {
  id?: string;
  organizationId?: string;
  planProductId?: string;
  productAttributeId?: string;
  /** The pricing configuration for this attribute */
  pricing?: Record<string, unknown>;
  createdAt?: Date;
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planPlanProductsItemsPlanProductAttributeItemsSchema: Schema<PlanPlanProductsItemsPlanProductAttributeItems> =
  s.object<PlanPlanProductsItemsPlanProductAttributeItems>(
    {
      id: s.optional(s.string()),
      organizationId: s.optional(s.string()),
      planProductId: s.optional(s.string()),
      productAttributeId: s.optional(s.string()),
      pricing: s.optional(s.record(s.string(), s.unknown())),
      createdAt: s.optional(s.dateTime()),
      updatedAt: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
