import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { payoutMerchantSummarySchema, type PayoutMerchantSummary } from "../payout-merchant-summary.js";

/** The merchant details associated to this payout. */
export type Merchant1 = PayoutMerchantSummary;

export const merchant1Schema: Schema<Merchant1> = s.of<Merchant1>(
  s.union([s.lazy(() => payoutMerchantSummarySchema)]),
);
