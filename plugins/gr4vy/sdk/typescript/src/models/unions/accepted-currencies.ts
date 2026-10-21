import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A list of currencies for which this service is enabled, in ISO 4217 three-letter code format. */
export type AcceptedCurrencies = string[];

export const acceptedCurrenciesSchema: Schema<AcceptedCurrencies> = s.of<AcceptedCurrencies>(
  s.union([s.array(s.string())]),
);
