import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Storage400Error1 = {
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storage400Error1Schema: Schema<Storage400Error1> = s.object<Storage400Error1>(
  {
    error: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
