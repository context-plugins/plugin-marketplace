import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Maximum number of monitors to return. Defaults to 100. Between 1 and 10000. */
export type Limit = number;

export const limitInternalSchema: Schema<Limit> = s.of<Limit>(s.union([s.int()]));

export const limitSchema: Schema<Limit> = s.lazySchema(() =>
  s.of<Limit>(s.union([s.int().check(s.gte(1), s.lte(10000))])),
);
