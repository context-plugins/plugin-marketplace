import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Bedrooms = number;

export const bedroomsInternalSchema: Schema<Bedrooms> = s.of<Bedrooms>(s.union([s.float64()]));

export const bedroomsSchema: Schema<Bedrooms> = s.lazySchema(() =>
  s.of<Bedrooms>(s.union([s.float64().check(s.gte(0))])),
);
