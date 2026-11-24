import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Statistics for missed calls */
export type Missed1 = {
  /** Number of missed calls */
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const missed1Schema: Schema<Missed1> = s.object<Missed1>(
  {
    count: s.int(),
  },
  { additionalProperties: s.json() },
);
