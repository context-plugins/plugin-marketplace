import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  wpayPaytoResourceOptionsSchema,
  type WpayPaytoResourceOptions,
} from "../wpay-payto-resource-options.js";

/** Options to pass to the `instrument` resource in the Wpay PayTo API. */
export type Instrument = WpayPaytoResourceOptions;

export const instrumentSchema: Schema<Instrument> = s.of<Instrument>(
  s.union([s.lazy(() => wpayPaytoResourceOptionsSchema)]),
);
