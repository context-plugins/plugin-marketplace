import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Split payment values to pass to the Adyen API on payment capture. See [the Adyen
 * docs](https://docs.adyen.com/platforms/online-payments/split-transactions/split-payments-at-capture/)
 * for details on the format and contents of the list.
 */
export type Capture1 = Record<string, unknown>[];

export const capture1Schema: Schema<Capture1> = s.of<Capture1>(
  s.union([s.array(s.record(s.string(), s.unknown()))]),
);
