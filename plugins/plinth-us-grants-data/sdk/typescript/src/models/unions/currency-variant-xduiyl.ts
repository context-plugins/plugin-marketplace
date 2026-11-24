import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Currency of every amount in the response, when it is not US dollars. Amounts are never converted
 * — they are the filing's own figures.
 */
export type CurrencyVariantXduiyl = string;

export const currencyVariantXduiylSchema: Schema<CurrencyVariantXduiyl> = s.of<CurrencyVariantXduiyl>(
  s.union([s.string()]),
);
