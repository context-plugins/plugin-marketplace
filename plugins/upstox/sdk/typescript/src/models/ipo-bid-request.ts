import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IpoBidRequest = {
  /**
   * Number of shares bid for. Must be a multiple of the IPO's `lot_size` and at least its
   * `minimum_quantity`
   */
  quantity: number;
  /**
   * Bid price per share, in whole rupees — decimals are not accepted. Must sit within the IPO's
   * price band, or equal its `cut_off_price`
   */
  price: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoBidRequestSchema: Schema<IpoBidRequest> = s.object<IpoBidRequest>(
  {
    quantity: s.int(),
    price: s.float64(),
  },
  { additionalProperties: s.json() },
);
