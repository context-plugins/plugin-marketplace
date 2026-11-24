import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Detailed price breakdown */
export type PriceDetails5 = {
  /** Formatted display price */
  displayPrice?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const priceDetails5Schema: Schema<PriceDetails5> = s.object<PriceDetails5>(
  {
    displayPrice: s.optional(s.string()),
    _keysMap: {
      displayPrice: "display_price",
    },
  },
  { additionalProperties: s.json() },
);
