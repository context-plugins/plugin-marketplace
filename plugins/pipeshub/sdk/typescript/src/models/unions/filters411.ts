import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Filters411 = Record<string, unknown> | string | Record<string, unknown>[];

export const filters411Schema: Schema<Filters411> = s.of<Filters411>(
  s.union([s.record(s.string(), s.unknown()), s.string(), s.array(s.record(s.string(), s.unknown()))]),
);
