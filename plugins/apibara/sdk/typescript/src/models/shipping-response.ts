import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { shippingPriceSchema, type ShippingPrice } from "./shipping-price.js";

export type ShippingResponse = {
  data?: ShippingPrice[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shippingResponseSchema: Schema<ShippingResponse> = s.object<ShippingResponse>(
  {
    data: s.optional(s.array(s.lazy(() => shippingPriceSchema))),
  },
  { additionalProperties: s.json() },
);
