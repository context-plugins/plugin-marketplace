import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Jobs = {
  scheduled?: number;
  running?: number;
  total?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobsSchema: Schema<Jobs> = s.object<Jobs>(
  {
    scheduled: s.optional(s.int()),
    running: s.optional(s.int()),
    total: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
