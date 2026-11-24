import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tierSchema, type Tier } from "./tier.js";

export type PricePoint = {
  currency?: string;
  unitPrice?: number;
  minQuantity?: number;
  tiers?: Tier[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricePointSchema: Schema<PricePoint> = s.object<PricePoint>(
  {
    currency: s.optional(s.string()),
    unitPrice: s.optional(s.float64()),
    minQuantity: s.optional(s.float64()),
    tiers: s.optional(s.array(s.lazy(() => tierSchema))),
  },
  { additionalProperties: s.json() },
);
