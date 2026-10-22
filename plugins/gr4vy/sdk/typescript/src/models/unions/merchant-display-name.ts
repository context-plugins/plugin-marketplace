import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The consumer facing name of the merchant. */
export type MerchantDisplayName = string;

export const merchantDisplayNameSchema: Schema<MerchantDisplayName> = s.of<MerchantDisplayName>(
  s.union([s.string()]),
);
