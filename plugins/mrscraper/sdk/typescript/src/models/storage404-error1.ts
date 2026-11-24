import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Storage404Error1 = {
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storage404Error1Schema: Schema<Storage404Error1> = s.object<Storage404Error1>(
  {
    error: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
