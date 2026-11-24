import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Storage403Error = {
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storage403ErrorSchema: Schema<Storage403Error> = s.object<Storage403Error>(
  {
    error: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
