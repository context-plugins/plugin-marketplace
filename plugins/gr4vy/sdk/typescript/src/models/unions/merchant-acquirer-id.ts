import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Merchant ID to use when calling 3DS through this scheme. */
export type MerchantAcquirerId = string;

export const merchantAcquirerIdSchema: Schema<MerchantAcquirerId> = s.of<MerchantAcquirerId>(
  s.union([s.string()]),
);
