import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID for the buyer. */
export type BuyerId14 = string;

export const buyerId14Schema: Schema<BuyerId14> = s.of<BuyerId14>(s.union([s.string()]));
