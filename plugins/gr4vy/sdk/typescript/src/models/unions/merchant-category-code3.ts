import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Merchant category code to use when calling 3DS through this scheme. */
export type MerchantCategoryCode3 = string;

export const merchantCategoryCode3Schema: Schema<MerchantCategoryCode3> = s.of<MerchantCategoryCode3>(
  s.union([s.string()]),
);
