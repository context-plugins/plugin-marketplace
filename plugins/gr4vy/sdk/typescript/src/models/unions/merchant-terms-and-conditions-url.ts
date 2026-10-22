import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** URL to the merchant's terms and conditions. */
export type MerchantTermsAndConditionsUrl = string;

export const merchantTermsAndConditionsUrlSchema: Schema<MerchantTermsAndConditionsUrl> =
  s.of<MerchantTermsAndConditionsUrl>(s.union([s.string()]));
