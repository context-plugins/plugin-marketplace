import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** In SI units of the dimension. `min` must not be after `max`. */
export type Quantity = {
  min?: number;
  max?: number;
  /** For example `length`, `weight`, `speed`, `temperature`, `age`. */
  dimension?: string;
};

export const quantitySchema: Schema<Quantity> = s.object<Quantity>({
  min: s.optional(s.float64()),
  max: s.optional(s.float64()),
  dimension: s.optional(s.string()),
});
