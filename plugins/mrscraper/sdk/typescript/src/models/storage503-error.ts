import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Storage503Error = {
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storage503ErrorSchema: Schema<Storage503Error> = s.object<Storage503Error>(
  {
    error: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
