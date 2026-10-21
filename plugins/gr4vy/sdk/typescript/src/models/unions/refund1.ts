import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Split payment values to pass to the Adyen API on payment refund. See [the Adyen
 * docs](https://docs.adyen.com/platforms/online-payments/split-transactions/split-refunds/) for
 * details on the format and contents of the list.
 */
export type Refund1 = Record<string, unknown>[];

export const refund1Schema: Schema<Refund1> = s.of<Refund1>(
  s.union([s.array(s.record(s.string(), s.unknown()))]),
);
