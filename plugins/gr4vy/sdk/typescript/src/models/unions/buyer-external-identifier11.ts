import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The `external_identifier` of the buyer to associate this gift card to. If this field is provided
 * then the `buyer_id` field needs to be unset.
 */
export type BuyerExternalIdentifier11 = string;

export const buyerExternalIdentifier11Schema: Schema<BuyerExternalIdentifier11> =
  s.of<BuyerExternalIdentifier11>(s.union([s.string()]));
