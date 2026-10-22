import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The `external_identifier` of a stored buyer to use for this payout. Use this instead of the
 * `buyer_id` or `buyer`.
 */
export type BuyerExternalIdentifier14 = string;

export const buyerExternalIdentifier14Schema: Schema<BuyerExternalIdentifier14> =
  s.of<BuyerExternalIdentifier14>(s.union([s.string()]));
