import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ISO 4217 currency code of this transaction's settlement. */
export type SettledCurrency1 = string;

export const settledCurrency1Schema: Schema<SettledCurrency1> = s.of<SettledCurrency1>(s.union([s.string()]));
