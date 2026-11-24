import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Maximum number of events to return. Defaults to 20. Between 1 and 100. */
export type Limit1 = number;

export const limit1InternalSchema: Schema<Limit1> = s.of<Limit1>(s.union([s.int()]));

export const limit1Schema: Schema<Limit1> = s.lazySchema(() =>
  s.of<Limit1>(s.union([s.int().check(s.gte(1), s.lte(100))])),
);
