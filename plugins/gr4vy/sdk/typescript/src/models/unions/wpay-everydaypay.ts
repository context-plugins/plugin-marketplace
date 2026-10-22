import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { wpayEverdaypayOptionsSchema, type WpayEverdaypayOptions } from "../wpay-everdaypay-options.js";

/** Custom options to be passed to the `wpay-everydaypay` connector. */
export type WpayEverydaypay = WpayEverdaypayOptions;

export const wpayEverydaypaySchema: Schema<WpayEverydaypay> = s.of<WpayEverydaypay>(
  s.union([s.lazy(() => wpayEverdaypayOptionsSchema)]),
);
