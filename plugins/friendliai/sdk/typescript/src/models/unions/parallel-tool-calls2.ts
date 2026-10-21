import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether to allow the model to run tool calls in parallel. */
export type ParallelToolCalls2 = boolean;

export const parallelToolCalls2Schema: Schema<ParallelToolCalls2> = s.of<ParallelToolCalls2>(
  s.union([s.boolean()]),
);
