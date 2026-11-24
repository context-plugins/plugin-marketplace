import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Taxes = number;

export const taxesInternalSchema: Schema<Taxes> = s.of<Taxes>(s.union([s.float64()]));

export const taxesSchema: Schema<Taxes> = s.lazySchema(() =>
  s.of<Taxes>(s.union([s.float64().check(s.gte(0))])),
);
