import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Name = {
  /** Full name of the user. */
  formatted?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nameSchema: Schema<Name> = s.object<Name>(
  {
    formatted: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
