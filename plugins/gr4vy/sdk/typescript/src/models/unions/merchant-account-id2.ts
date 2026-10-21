import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The merchant account to which this subscription is associated. When null this represents an
 * instance level webhook.
 */
export type MerchantAccountId2 = string;

export const merchantAccountId2Schema: Schema<MerchantAccountId2> = s.of<MerchantAccountId2>(
  s.union([s.string()]),
);
