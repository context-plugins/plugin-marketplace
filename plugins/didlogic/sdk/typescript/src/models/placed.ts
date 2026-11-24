import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Statistics for placed (outgoing) calls */
export type Placed = {
  /** Total cost of placed calls */
  total: string;
  /** Number of placed calls */
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const placedSchema: Schema<Placed> = s.object<Placed>(
  {
    total: s.string(),
    count: s.int(),
  },
  { additionalProperties: s.json() },
);
