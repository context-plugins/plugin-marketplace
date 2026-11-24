import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type GeoFootprint = Record<string, unknown>[];

export const geoFootprintSchema: Schema<GeoFootprint> = s.of<GeoFootprint>(
  s.union([s.array(s.record(s.string(), s.unknown()))]),
);
