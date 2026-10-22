import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether to enable parallel function calling. */
export type ParallelToolCalls = boolean;

export const parallelToolCallsSchema: Schema<ParallelToolCalls> = s.of<ParallelToolCalls>(
  s.union([s.boolean()]),
);
