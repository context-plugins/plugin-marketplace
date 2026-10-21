import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Merchant classification for the type of goods or services it provides. */
export type MerchantCategoryCode = string;

export const merchantCategoryCodeSchema: Schema<MerchantCategoryCode> = s.of<MerchantCategoryCode>(
  s.union([s.string()]),
);
