import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { ecommpayOptionsSchema, type EcommpayOptions } from "../ecommpay-options.js";

/** Custom options to be passed to the `ecommpay-card` connector. */
export type EcommpayCard = EcommpayOptions;

export const ecommpayCardSchema: Schema<EcommpayCard> = s.of<EcommpayCard>(
  s.union([s.lazy(() => ecommpayOptionsSchema)]),
);
