import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { payoutMerchantSchema, type PayoutMerchant } from "../payout-merchant.js";

/** Merchant information for the source of the payout. */
export type Merchant = PayoutMerchant;

export const merchantSchema: Schema<Merchant> = s.of<Merchant>(s.union([s.lazy(() => payoutMerchantSchema)]));
