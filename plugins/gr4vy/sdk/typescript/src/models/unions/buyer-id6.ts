import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The `id` of a stored buyer to use Use this instead of the `buyer_external_identifier`. */
export type BuyerId6 = string;

export const buyerId6Schema: Schema<BuyerId6> = s.of<BuyerId6>(s.union([s.string()]));
