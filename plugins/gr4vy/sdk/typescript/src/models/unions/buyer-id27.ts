import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only the items for which the `buyer` has an `id` that matches this value.
 */
export type BuyerId27 = string;

export const buyerId27Schema: Schema<BuyerId27> = s.of<BuyerId27>(s.union([s.string()]));
