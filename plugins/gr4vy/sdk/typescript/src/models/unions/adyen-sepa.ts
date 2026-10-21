import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adyenSepaOptionsSchema, type AdyenSepaOptions } from "../adyen-sepa-options.js";

/** Custom options to be passed to the `adyen-sepa` connector. */
export type AdyenSepa = AdyenSepaOptions;

export const adyenSepaSchema: Schema<AdyenSepa> = s.of<AdyenSepa>(
  s.union([s.lazy(() => adyenSepaOptionsSchema)]),
);
