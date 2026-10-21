import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant's ISO 3166-1 numeric country code. */
export type MerchantCountryCode3 = string;

export const merchantCountryCode3Schema: Schema<MerchantCountryCode3> = s.of<MerchantCountryCode3>(
  s.union([s.string()]),
);
