import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the buyer to attach the method to. */
export type BuyerId = string;

export const buyerIdSchema: Schema<BuyerId> = s.of<BuyerId>(s.union([s.string()]));
