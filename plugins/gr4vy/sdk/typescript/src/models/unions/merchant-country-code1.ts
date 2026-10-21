import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MerchantCountryCode1 = string;

export const merchantCountryCode1Schema: Schema<MerchantCountryCode1> = s.of<MerchantCountryCode1>(
  s.union([s.string()]),
);
