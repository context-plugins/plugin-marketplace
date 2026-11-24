import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateOrderLineAttributeRequestPricingCreditUnitBracketsItems = {
  upTo: number | null;
  creditUnits: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createOrderLineAttributeRequestPricingCreditUnitBracketsItemsSchema: Schema<CreateOrderLineAttributeRequestPricingCreditUnitBracketsItems> =
  s.object<CreateOrderLineAttributeRequestPricingCreditUnitBracketsItems>(
    {
      upTo: s.nullable(s.int()),
      creditUnits: s.int(),
    },
    { additionalProperties: s.json() },
  );
