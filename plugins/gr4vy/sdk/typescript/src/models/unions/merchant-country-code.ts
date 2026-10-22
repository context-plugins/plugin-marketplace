import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The country code where the merchant is registered. */
export type MerchantCountryCode = string;

export const merchantCountryCodeSchema: Schema<MerchantCountryCode> = s.of<MerchantCountryCode>(
  s.union([s.string()]),
);
