import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MinZ = number;

export const minZInternalSchema: Schema<MinZ> = s.of<MinZ>(s.union([s.float64()]));

export const minZSchema: Schema<MinZ> = s.lazySchema(() =>
  s.of<MinZ>(s.union([s.float64().check(s.gte(0), s.lte(8))])),
);
