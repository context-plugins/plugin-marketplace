import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the buyer to filter payment methods by. */
export type BuyerId24 = string;

export const buyerId24Schema: Schema<BuyerId24> = s.of<BuyerId24>(s.union([s.string()]));
