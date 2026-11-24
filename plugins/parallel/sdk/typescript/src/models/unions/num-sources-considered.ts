import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Number of sources considered in processing the task. */
export type NumSourcesConsidered = number;

export const numSourcesConsideredSchema: Schema<NumSourcesConsidered> = s.of<NumSourcesConsidered>(
  s.union([s.int()]),
);
