import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IpoOrderBid = {
  /** Number of shares bid for */
  quantity?: number;
  /** Bid price per share */
  price?: number;
  /** Value of the bid, quantity x price */
  amount?: number;
  /** Message from the exchange for this bid, when one was returned */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoOrderBidSchema: Schema<IpoOrderBid> = s.object<IpoOrderBid>(
  {
    quantity: s.optional(s.int()),
    price: s.optional(s.float64()),
    amount: s.optional(s.float64()),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
