import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MerchantCategoryCode1 = string;

export const merchantCategoryCode1Schema: Schema<MerchantCategoryCode1> = s.of<MerchantCategoryCode1>(
  s.union([s.string()]),
);
