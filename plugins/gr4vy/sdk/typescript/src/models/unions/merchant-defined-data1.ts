import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A dictionary of merchant defined data, to be passed to Wpay for anti-fraud control. */
export type MerchantDefinedData1 = Record<string, string>;

export const merchantDefinedData1Schema: Schema<MerchantDefinedData1> = s.of<MerchantDefinedData1>(
  s.union([s.record(s.string(), s.string())]),
);
