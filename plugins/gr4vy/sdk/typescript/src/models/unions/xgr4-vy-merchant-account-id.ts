import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the merchant account to use for this request. */
export type XGr4VyMerchantAccountId = string;

export const xGr4VyMerchantAccountIdSchema: Schema<XGr4VyMerchantAccountId> = s.of<XGr4VyMerchantAccountId>(
  s.union([s.string()]),
);
