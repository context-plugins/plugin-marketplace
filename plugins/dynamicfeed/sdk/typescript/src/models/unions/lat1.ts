import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Lat1 = number;

export const lat1InternalSchema: Schema<Lat1> = s.of<Lat1>(s.union([s.float64()]));

export const lat1Schema: Schema<Lat1> = s.lazySchema(() =>
  s.of<Lat1>(s.union([s.float64().check(s.gte(-90), s.lte(90))])),
);
