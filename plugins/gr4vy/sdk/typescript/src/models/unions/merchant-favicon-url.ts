import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** URL to the merchant's favicon. */
export type MerchantFaviconUrl = string;

export const merchantFaviconUrlSchema: Schema<MerchantFaviconUrl> = s.of<MerchantFaviconUrl>(
  s.union([s.string()]),
);
