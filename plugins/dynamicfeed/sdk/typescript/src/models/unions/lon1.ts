import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Lon1 = number;

export const lon1InternalSchema: Schema<Lon1> = s.of<Lon1>(s.union([s.float64()]));

export const lon1Schema: Schema<Lon1> = s.lazySchema(() =>
  s.of<Lon1>(s.union([s.float64().check(s.gte(-180), s.lte(180))])),
);
