import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The `id` of a stored buyer to use for this payout Use this instead of the `buyer` or
 * `buyer_external_identifier`.
 */
export type BuyerId17 = string;

export const buyerId17Schema: Schema<BuyerId17> = s.of<BuyerId17>(s.union([s.string()]));
