import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Storage400Error = {
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storage400ErrorSchema: Schema<Storage400Error> = s.object<Storage400Error>(
  {
    error: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
