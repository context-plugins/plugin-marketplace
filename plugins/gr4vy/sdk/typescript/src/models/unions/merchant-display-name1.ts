import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MerchantDisplayName1 = string;

export const merchantDisplayName1Schema: Schema<MerchantDisplayName1> = s.of<MerchantDisplayName1>(
  s.union([s.string()]),
);
