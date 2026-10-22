import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The ID of the buyer to associate the payment method with. Note: When `buyer_id` is provided, the
 * payment link should be treated as a secret as it will allow the user to manage payment methods
 * for the associated buyer.
 */
export type BuyerId16 = string;

export const buyerId16Schema: Schema<BuyerId16> = s.of<BuyerId16>(s.union([s.string()]));
