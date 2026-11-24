import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ParallelRun = {
  /** The parallel run index */
  index?: number;
  /** The status of this parallel run */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const parallelRunSchema: Schema<ParallelRun> = s.object<ParallelRun>(
  {
    index: s.optional(s.int()),
    status: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
