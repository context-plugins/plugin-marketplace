import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Fractions (0.125 is 12.5%). `min` must not be after `max`. */
export type Percent = {
  min?: number;
  max?: number;
};

export const percentSchema: Schema<Percent> = s.object<Percent>({
  min: s.optional(s.float64()),
  max: s.optional(s.float64()),
});
