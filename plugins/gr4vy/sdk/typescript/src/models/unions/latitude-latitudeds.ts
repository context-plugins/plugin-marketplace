import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { latitudeOptionsSchema, type LatitudeOptions } from "../latitude-options.js";

/** Custom options to be passed to the `latitude-latitudeds` connector. */
export type LatitudeLatitudeds = LatitudeOptions;

export const latitudeLatitudedsSchema: Schema<LatitudeLatitudeds> = s.of<LatitudeLatitudeds>(
  s.union([s.lazy(() => latitudeOptionsSchema)]),
);
