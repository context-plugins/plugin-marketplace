import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { latitudeOptionsSchema, type LatitudeOptions } from "../latitude-options.js";

/** Custom options to be passed to the `latitude-latitude` connector. */
export type LatitudeLatitude = LatitudeOptions;

export const latitudeLatitudeSchema: Schema<LatitudeLatitude> = s.of<LatitudeLatitude>(
  s.union([s.lazy(() => latitudeOptionsSchema)]),
);
