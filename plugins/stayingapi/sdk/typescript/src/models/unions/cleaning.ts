import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Cleaning = number;

export const cleaningInternalSchema: Schema<Cleaning> = s.of<Cleaning>(s.union([s.float64()]));

export const cleaningSchema: Schema<Cleaning> = s.lazySchema(() =>
  s.of<Cleaning>(s.union([s.float64().check(s.gte(0))])),
);
