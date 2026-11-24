import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  acceptedOfferPriceStatusSchema,
  type AcceptedOfferPriceStatus,
} from "./accepted-offer-price-status.js";

export type Item = {
  itemId?: string;
  acceptedOfferPrice?: string | null;
  acceptedOfferPriceStatus?: AcceptedOfferPriceStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemSchema: Schema<Item> = s.object<Item>(
  {
    itemId: s.optional(s.string()),
    acceptedOfferPrice: s.optionalNullable(s.string()),
    acceptedOfferPriceStatus: s.optional(s.lazy(() => acceptedOfferPriceStatusSchema)),
  },
  { additionalProperties: s.json() },
);
