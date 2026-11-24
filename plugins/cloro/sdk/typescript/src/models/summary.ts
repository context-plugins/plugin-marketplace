import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Aggregate counts for the batch. */
export type Summary = {
  /** Total number of tasks submitted in the batch. */
  total: number;
  /** Number of tasks successfully created. */
  succeeded: number;
  /** Number of tasks that failed validation or processing. */
  failed: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summarySchema: Schema<Summary> = s.object<Summary>(
  {
    total: s.int(),
    succeeded: s.int(),
    failed: s.int(),
  },
  { additionalProperties: s.json() },
);
