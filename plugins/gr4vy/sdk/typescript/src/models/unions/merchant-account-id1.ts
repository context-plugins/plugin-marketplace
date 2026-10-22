import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the merchant account this payout was created for. */
export type MerchantAccountId1 = string;

export const merchantAccountId1Schema: Schema<MerchantAccountId1> = s.of<MerchantAccountId1>(
  s.union([s.string()]),
);
