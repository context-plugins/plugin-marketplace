import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Acquirer BIN to use when calling 3DS through this scheme. */
export type MerchantAcquirerBin = string;

export const merchantAcquirerBinSchema: Schema<MerchantAcquirerBin> = s.of<MerchantAcquirerBin>(
  s.union([s.string()]),
);
