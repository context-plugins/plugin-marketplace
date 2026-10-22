import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { latitudeOptionsSchema, type LatitudeOptions } from "../latitude-options.js";

/** Custom options to be passed to the `gem-gemds` connector. */
export type GemGemds = LatitudeOptions;

export const gemGemdsSchema: Schema<GemGemds> = s.of<GemGemds>(
  s.union([s.lazy(() => latitudeOptionsSchema)]),
);
