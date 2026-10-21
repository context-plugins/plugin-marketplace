import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { wpayPaytoOptionsSchema, type WpayPaytoOptions } from "../wpay-payto-options.js";

/** Custom options to be passed to the `wpay-payto` connector. */
export type WpayPayto = WpayPaytoOptions;

export const wpayPaytoSchema: Schema<WpayPayto> = s.of<WpayPayto>(
  s.union([s.lazy(() => wpayPaytoOptionsSchema)]),
);
