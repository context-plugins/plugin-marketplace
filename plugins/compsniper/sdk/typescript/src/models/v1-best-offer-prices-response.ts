import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";

export type V1BestOfferPricesResponse = {
  items?: Item[];
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1BestOfferPricesResponseSchema: Schema<V1BestOfferPricesResponse> =
  s.object<V1BestOfferPricesResponse>(
    {
      items: s.optional(s.array(s.lazy(() => itemSchema))),
      requestId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
