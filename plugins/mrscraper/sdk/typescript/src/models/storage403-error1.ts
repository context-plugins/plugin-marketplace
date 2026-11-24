import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Storage403Error1 = {
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storage403Error1Schema: Schema<Storage403Error1> = s.object<Storage403Error1>(
  {
    error: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
