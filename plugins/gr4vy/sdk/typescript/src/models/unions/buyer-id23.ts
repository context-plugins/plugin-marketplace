import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the buyer to query payment methods for. */
export type BuyerId23 = string;

export const buyerId23Schema: Schema<BuyerId23> = s.of<BuyerId23>(s.union([s.string()]));
