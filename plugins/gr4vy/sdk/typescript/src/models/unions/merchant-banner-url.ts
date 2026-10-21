import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant's banner image URL. */
export type MerchantBannerUrl = string;

export const merchantBannerUrlSchema: Schema<MerchantBannerUrl> = s.of<MerchantBannerUrl>(
  s.union([s.string()]),
);
