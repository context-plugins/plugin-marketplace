import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The `external_identifier` of the buyer to associate this gift card to. Only allowed when `store`
 * is `true`. If this field is provided then the `buyer_id` field needs to be unset.
 */
export type BuyerExternalIdentifier10 = string;

export const buyerExternalIdentifier10Schema: Schema<BuyerExternalIdentifier10> =
  s.of<BuyerExternalIdentifier10>(s.union([s.string()]));
