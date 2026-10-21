import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the buyer to associate this transaction to. */
export type BuyerId9 = string;

export const buyerId9Schema: Schema<BuyerId9> = s.of<BuyerId9>(s.union([s.string()]));
