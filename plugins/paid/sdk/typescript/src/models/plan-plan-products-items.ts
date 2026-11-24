import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  planPlanProductsItemsPlanProductAttributeItemsSchema,
  type PlanPlanProductsItemsPlanProductAttributeItems,
} from "./plan-plan-products-items-plan-product-attribute-items.js";
import { product2Schema, type Product2 } from "./product2.js";

export type PlanPlanProductsItems = {
  id?: string;
  organizationId?: string;
  planId?: string;
  productId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  /** The product associated with this plan product */
  product?: Product2;
  /** The product attributes with pricing for this plan */
  planProductAttribute?: PlanPlanProductsItemsPlanProductAttributeItems[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planPlanProductsItemsSchema: Schema<PlanPlanProductsItems> = s.object<PlanPlanProductsItems>(
  {
    id: s.optional(s.string()),
    organizationId: s.optional(s.string()),
    planId: s.optional(s.string()),
    productId: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    product: s.optional(s.lazy(() => product2Schema)),
    planProductAttribute: s.optional(
      s.array(s.lazy(() => planPlanProductsItemsPlanProductAttributeItemsSchema)),
    ),
  },
  { additionalProperties: s.json() },
);
