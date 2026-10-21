import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ISO 4217 currency code of this refund's settlement. */
export type SettledCurrency = string;

export const settledCurrencySchema: Schema<SettledCurrency> = s.of<SettledCurrency>(s.union([s.string()]));
