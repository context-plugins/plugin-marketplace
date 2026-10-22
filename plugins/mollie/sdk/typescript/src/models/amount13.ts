import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The portion of the total payment amount being routed. Currently only `EUR` payments can be
 * routed.
 */
export type Amount13 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount13Schema: Schema<Amount13> = s.object<Amount13>({
  currency: s.string(),
  value: s.string(),
});
