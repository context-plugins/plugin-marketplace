import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { locationTypeSchema, type LocationType } from "../location-type.js";

export type LocationType1 = LocationType;

export const locationType1Schema: Schema<LocationType1> = s.of<LocationType1>(
  s.union([s.lazy(() => locationTypeSchema)]),
);
