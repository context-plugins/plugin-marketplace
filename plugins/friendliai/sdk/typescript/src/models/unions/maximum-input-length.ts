import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The maximum allowed input length. */
export type MaximumInputLength = number;

export const maximumInputLengthSchema: Schema<MaximumInputLength> = s.of<MaximumInputLength>(
  s.union([s.int()]),
);
