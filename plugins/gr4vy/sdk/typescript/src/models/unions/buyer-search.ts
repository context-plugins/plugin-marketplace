import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only get the items for which some of the buyer data contains exactly the
 * provided `buyer_search` values.
 */
export type BuyerSearch = string[];

export const buyerSearchSchema: Schema<BuyerSearch> = s.of<BuyerSearch>(s.union([s.array(s.string())]));
