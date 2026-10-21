import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Split payment values to pass to the Adyen API on payment authorization. See [the Adyen
 * docs](https://docs.adyen.com/platforms/online-payments/split-transactions/split-payments-at-authorization/)
 * for details on the format and contents of the list.
 */
export type Authorization = Record<string, unknown>[];

export const authorizationSchema: Schema<Authorization> = s.of<Authorization>(
  s.union([s.array(s.record(s.string(), s.unknown()))]),
);
