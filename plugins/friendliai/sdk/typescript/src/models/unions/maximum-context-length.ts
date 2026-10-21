import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The maximum context length (input + output tokens) to serve with. */
export type MaximumContextLength = number;

export const maximumContextLengthSchema: Schema<MaximumContextLength> = s.of<MaximumContextLength>(
  s.union([s.int()]),
);
