import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The ID of the buyer to associate this gift card to. Only allowed when `store` is `true`. If this
 * field is provided then the `buyer_external_identifier` field needs to be unset.
 */
export type BuyerId10 = string;

export const buyerId10Schema: Schema<BuyerId10> = s.of<BuyerId10>(s.union([s.string()]));
