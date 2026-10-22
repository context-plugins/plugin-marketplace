import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { worldpayVapOptionsSchema, type WorldpayVapOptions } from "../worldpay-vap-options.js";

/** Custom options to be passed to the `worldpayvap-card` connector. */
export type WorldpayvapCard = WorldpayVapOptions;

export const worldpayvapCardSchema: Schema<WorldpayvapCard> = s.of<WorldpayvapCard>(
  s.union([s.lazy(() => worldpayVapOptionsSchema)]),
);
