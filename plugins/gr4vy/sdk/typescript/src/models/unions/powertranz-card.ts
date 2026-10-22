import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { powertranzOptionsSchema, type PowertranzOptions } from "../powertranz-options.js";

/** Custom options to be passed to the `powertranz-card` connector. */
export type PowertranzCard = PowertranzOptions;

export const powertranzCardSchema: Schema<PowertranzCard> = s.of<PowertranzCard>(
  s.union([s.lazy(() => powertranzOptionsSchema)]),
);
