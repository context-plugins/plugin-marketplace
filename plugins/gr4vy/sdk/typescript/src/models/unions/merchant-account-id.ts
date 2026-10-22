import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the merchant account this entry was created for. */
export type MerchantAccountId = string;

export const merchantAccountIdSchema: Schema<MerchantAccountId> = s.of<MerchantAccountId>(
  s.union([s.string()]),
);
