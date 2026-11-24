import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The currency `revenue` is in — the filing's own. Nothing in this dataset is converted, so figures
 * from the two registers are never comparable and never additive.
 */
export const Currency = {
  Usd: "USD",
  Cad: "CAD",
} as const;
export type Currency = (typeof Currency)[keyof typeof Currency] | (string & {});

export const currencySchema: EnumSchema<Currency> = s.enumOf<Currency>(Currency);
