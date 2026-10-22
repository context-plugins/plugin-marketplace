import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The exchange rate, if applicable. */
export type ExchangeRate = number;

export const exchangeRateSchema: Schema<ExchangeRate> = s.of<ExchangeRate>(s.union([s.float64()]));
