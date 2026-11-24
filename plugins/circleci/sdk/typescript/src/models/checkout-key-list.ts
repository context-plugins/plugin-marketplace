import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checkoutKeySchema, type CheckoutKey } from "./checkout-key.js";

export type CheckoutKeyList = {
  /** List of checkout keys */
  items?: CheckoutKey[];
  /** Token for retrieving the next page */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkoutKeyListSchema: Schema<CheckoutKeyList> = s.object<CheckoutKeyList>(
  {
    items: s.optional(s.array(s.lazy(() => checkoutKeySchema))),
    nextPageToken: s.optional(s.string()),
    _keysMap: {
      nextPageToken: "next_page_token",
    },
  },
  { additionalProperties: s.json() },
);
