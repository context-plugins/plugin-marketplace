import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The IDs of the merchant accounts to associate with the API key pair. The caller can only assign
 * merchant accounts it has access to.
 */
export type MerchantAccountIds = string[];

export const merchantAccountIdsSchema: Schema<MerchantAccountIds> = s.of<MerchantAccountIds>(
  s.union([s.array(s.string())]),
);
