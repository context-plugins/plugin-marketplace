import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The ID of the buyer to associate this gift card to. If this field is provided then the
 * `buyer_external_identifier` field needs to be unset.
 */
export type BuyerId11 = string;

export const buyerId11Schema: Schema<BuyerId11> = s.of<BuyerId11>(s.union([s.string()]));
