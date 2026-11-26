import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Unauthorized1 = {
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unauthorized1Schema: Schema<Unauthorized1> = s.object<Unauthorized1>(
  {
    error: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
