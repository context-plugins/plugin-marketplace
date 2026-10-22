import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Merchant tax ID (for example, EIN or VAT number). */
export type MerchantTaxId = string;

export const merchantTaxIdSchema: Schema<MerchantTaxId> = s.of<MerchantTaxId>(s.union([s.string()]));
