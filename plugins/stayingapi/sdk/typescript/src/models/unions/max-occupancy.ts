import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MaxOccupancy = number;

export const maxOccupancyInternalSchema: Schema<MaxOccupancy> = s.of<MaxOccupancy>(s.union([s.int()]));

export const maxOccupancySchema: Schema<MaxOccupancy> = s.lazySchema(() =>
  s.of<MaxOccupancy>(s.union([s.int().check(s.gt(0), s.lte(9007199254740991))])),
);
