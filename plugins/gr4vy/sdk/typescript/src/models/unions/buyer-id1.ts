import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the buyer to retrieve billing details for. */
export type BuyerId1 = string;

export const buyerId1Schema: Schema<BuyerId1> = s.of<BuyerId1>(s.union([s.string()]));
