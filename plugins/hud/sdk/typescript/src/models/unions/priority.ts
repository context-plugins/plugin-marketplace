import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Priority = number;

export const priorityInternalSchema: Schema<Priority> = s.of<Priority>(s.union([s.float64()]));

export const prioritySchema: Schema<Priority> = s.lazySchema(() =>
  s.of<Priority>(s.union([s.float64().check(s.gte(0), s.lte(1))])),
);
