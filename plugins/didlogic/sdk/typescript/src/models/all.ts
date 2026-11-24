import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Combined statistics for all calls */
export type All = {
  /** Total cost of all calls */
  total: string;
  /** Total number of all calls */
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allSchema: Schema<All> = s.object<All>(
  {
    total: s.string(),
    count: s.int(),
  },
  { additionalProperties: s.json() },
);
