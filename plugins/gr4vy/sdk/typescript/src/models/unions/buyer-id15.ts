import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the buyer to associate with the stored payment method. */
export type BuyerId15 = string;

export const buyerId15Schema: Schema<BuyerId15> = s.of<BuyerId15>(s.union([s.string()]));
