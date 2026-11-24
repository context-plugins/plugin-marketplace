import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Median offer IN `currency`, same exclusion as `min`. */
export type Median = number;

export const medianInternalSchema: Schema<Median> = s.of<Median>(s.union([s.float64()]));

export const medianSchema: Schema<Median> = s.lazySchema(() =>
  s.of<Median>(s.union([s.float64().check(s.gte(0))])),
);
